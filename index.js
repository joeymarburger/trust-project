const _ = require('ramda');
const nlp = require('nlp_compromise');

// For the HTML:
// <script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.17.1/ramda.min.js"></script>
// <script src="//unpkg.com/nlp_compromise@latest/builds/nlp_compromise.min.js"></script>
// <script>
//   var _ = window.ramda;
//   var nlp = window.nlp_compromise;

const sourceWords = [
  'said',
  'told',
  'reported',
  'stated',
  'according to',
  'recalled',
  'suggested',
  'mentioned',
  'tweeted',
  'thought',
  'quoted',
  'sourced from',
  'as seen',
  'heard on',
  'corrected',
  'paused',
  'in an interview',
  'at a press conference',
  '“.*”'
];
const sourceRegex = new RegExp(sourceWords.join('|'), 'gi');

const getTextFromTag = tag => tag.innerText;
const getSentencesFromText = text => nlp.text(text).sentences.map(sentence => sentence.str);
const getSentencesFromTags = _.map(getSentencesFromTag);
const hasAtLeastOneSourceWord = _.test(sourceRegex);
const getSentencesFromTag = tag => {
  return _.compose(_.map((sentence) => ({
    sentence,
    tag
  })), _.map(formatSentence), _.filter(hasAtLeastOneSourceWord), getSentencesFromText, getTextFromTag)(tag);
};
const removeNewlines = _.replace(/\n/g, '');
const removeSpacesFromBeginningAndEnd = text => {
  let newText = text;
  if (newText[0] === ' ') {
    newText = _.slice(1, newText.length, newText);
  }
  if (newText[newText.length - 1] === ' ') {
    newText = _.slice(0, newText.length - 1, newText);
  }
  return newText;
};
const formatSentence = _.compose(removeSpacesFromBeginningAndEnd, removeNewlines);
const getSentenceObjectsWithSourceWords = _.compose(_.flatten, getSentencesFromTags);

const createAnchors = _.forEach(createAnchor);
const createAnchor = tag => {
  tag.insertAdjacentHTML('afterbegin', `<span style='display: inline;' id='${createId(tag)}'></span>`);
};
const createId = (tag) => {
  return `trust-${getTextFromTag(tag)}`;
};
const createAnchorsForSentencesWithSourceWords = _.compose(createAnchors, getSentenceObjectsWithSourceWords);

createAnchorsForSentencesWithSourceWords(document.querySelectorAll('p'));

// </script>
