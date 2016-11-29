const _ = require('ramda');
const nlp = require('nlp_compromise');

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
  '“'
];
const sourceRegex = new RegExp(sourceWords.join('|'), 'gi');

const getSentencesFromText = article => nlp.text(article).sentences.map(sentence => sentence.str);
const getCountOfSourceWords = _.compose(_.length, _.match(sourceRegex));
const removeQuotes = _.replace(/“.*”/g, '');
const getSentencesWithSourceWords = _.compose(_.map(removeQuotes), _.filter(getCountOfSourceWords), getSentencesFromText);
const getNamesFromSentence = sentence => nlp.sentence(sentence).people().filter(person => person.firstName || person.lastName).map(person => person.text.replace(',', '')).join(', ');
const getSources = _.compose(_.join(', '), _.filter(_.length), _.map(getNamesFromSentence), getSentencesWithSourceWords);

const article = `WASHINGTON — If President-elect Donald J. Trump wanted a cabinet secretary who could help him dismantle and replace President Obama’s health care law, he could not have found anyone more prepared than Representative Tom Price, who has been studying how to accomplish that goal for more than six years. Mr. Price, an orthopedic surgeon who represents many of the northern suburbs of Atlanta, speaks with the self-assurance of a doctor about to perform another joint-replacement procedure. He knows the task and will proceed with brisk efficiency.

Mr. Trump has picked Mr. Price, a six-term Republican congressman, to be secretary of health and human services, Mr. Trump’s transition team announced Tuesday morning.

Also on Monday, Mr. Trump met with David H. Petraeus, the highly decorated but scandal-scarred former military commander, who has emerged as a new contender for secretary of state.

While some Republicans have attacked the Affordable Care Act without proposing an alternative, Mr. Price has introduced bills offering a detailed, comprehensive replacement plan in every Congress since 2009, when Democrats started work on the legislation. Many of his ideas are included in the “Better Way” agenda issued several months ago by House Republicans.

In debate on the Affordable Care Act in 2009, Mr. Price railed against “a stifling and oppressive federal government,” a theme that pervades his politics. His most frequent objection to the law is that it interferes with the ability of patients and doctors to make medical decisions — a concern he will surely take with him if he wins Senate confirmation.

“The practicing physician and the patient could not have a better friend in that office than Tom Price,” said Representative Michael C. Burgess, Republican of Texas, who is also a physician.

Mr. Price, the chairman of the House Budget Committee, said he felt events had borne out his warnings about the health law.

“Congressional Democrats and the Obama administration blatantly ignored the voices of the American people and rammed through a hyperpartisan piece of legislation that will have a disastrous effect on our nation’s health care system,” Mr. Price said shortly after Mr. Obama signed the bill in 2010.

Now, he says: “Premiums have gone up, not down. Many Americans lost the health coverage they were told time and time again by the president that they could keep. Choices are fewer.”

The legislation Mr. Price has proposed, the Empowering Patients First Act, would repeal the Affordable Care Act and offer age-adjusted tax credits for the purchase of individual and family health insurance policies.

The bill would create incentives for people to contribute to health savings accounts; offer grants to states to subsidize insurance for “high-risk populations”; allow insurers licensed in one state to sell policies to residents of others; and authorize business and professional groups to provide coverage to members through “association health plans.”

As secretary, Mr. Price would be responsible for a department with an annual budget of more than $1 trillion, health programs that insure more than 100 million Americans, and agencies that regulate food and drugs and sponsor much of the nation’s biomedical research.

Democrats criticized the selection of Mr. Price.

“Congressman Price has proven to be far out of the mainstream of what Americans want when it comes to Medicare, the Affordable Care Act and Planned Parenthood,” said Senator Chuck Schumer of New York, who is in line to be the Senate Democratic leader in the new Congress. “Thanks to those three programs, millions of American seniors, families, people with disabilities and women have access to quality, affordable health care. Nominating Congressman Price to be the H.H.S. secretary is akin to asking the fox to guard the henhouse.”

From his days as a Georgia state senator, Mr. Price, now 62, has been a voice for doctors, often aligned with the positions of the American Medical Association and the Medical Association of Georgia.

He has introduced legislation that would make it easier for doctors to defend themselves against medical malpractice lawsuits and to enter into private contracts with Medicare beneficiaries. Under such contracts, doctors can, in effect, opt out of Medicare and charge more than the amounts normally allowed by the program’s rules.

He also supported legislation to bar federal funds for Planned Parenthood, saying some of its clinics had been involved in what he called “barbaric” abortion practices. Cecile Richards, the president of the Planned Parenthood Federation of America, said that Mr. Price “poses a grave threat to women’s health” and that as health secretary he “could take women back decades.” If he had his way, she said, “millions of women could be cut off from Planned Parenthood’s preventive health services,” could lose access to free birth control under the Affordable Care Act and could again be charged more than men for the same health insurance.

Mr. Price’s intimate knowledge of Medicare could serve him well. The secretary of health and human services sets Medicare payment policies for doctors, updates the physician fee schedule each year and issues rules that can have a huge influence on the practice of medicine. The government is carrying out a law that changes how doctors are paid under Medicare, and Medicare often serves as a model for private insurers.

On the other hand, as secretary, Mr. Price would need a broader perspective. He would have to consider not only the interests of doctors, but also the needs of Medicare beneficiaries, Medicaid patients and taxpayers who finance those programs.

Mr. Price is a strong conservative who invariably excites the audience at the annual Conservative Political Action Conference. His website lists him as a member of the Tea Party Caucus. His district includes territory once represented by Newt Gingrich, a former speaker of the House. But Mr. Price is no bomb thrower. He works within the system and has led two groups that promote conservative policies in the House.

Born in Lansing, Mich., Mr. Price went to college and medical school at the University of Michigan, did his residency at Emory University in Atlanta and was medical director of the orthopedic clinic at Grady Memorial Hospital in Atlanta.

He says he got into politics because he found that officials in Washington and Atlanta who had no medical training were making decisions that affected his ability to take care of patients.

Speaking at a political conference in early 2010, Mr. Price said he was proud to join fellow conservatives in an effort to beat back a “vile liberal agenda.”

In a similar vein, he complained this year that Obama administration officials were trying to “commandeer clinical decision-making” by forcing doctors to participate in experiments that test new ways of paying for prescription drugs, hip and knee replacement operations, and heart surgery for Medicare patients.

As secretary of health and human services, Mr. Price could carry out the advice he has given Mr. Obama: “Stop these mandatory demonstration projects.”

Mr. Price is also an outspoken opponent of abortion and has consistently received ratings of 100 percent from the National Right to Life Committee and scores of zero from the Planned Parenthood Federation of America.

Gay rights groups have also been critical of Mr. Price. Sarah Kate Ellis, the president and chief executive of GLAAD, formerly known as the Gay and Lesbian Alliance Against Defamation, said Mr. Price was “completely unfit” to be health secretary.

When the Supreme Court ruled last year that the Constitution guarantees a right to same-sex marriage, Mr. Price said it was “not only a sad day for marriage, but a further judicial destruction of our entire system of checks and balances.”

Also on Tuesday, Mr. Trump said that he had chosen Seema Verma, a health policy expert in Indiana, to be administrator of the Centers for Medicare and Medicaid Services. Working in state government and then as president of a consulting company, she helped Indiana expand Medicaid eligibility under the Affordable Care Act, with conservative policies that emphasized “personal responsibility.”

Ms. Verma worked closely with Gov. Mike Pence of Indiana, the vice president-elect, and with former Gov. Mitch Daniels, also a Republican. She has won praise from health care providers and state legislators of both parties. She has also provided technical assistance and advice to Medicaid officials in other states.

Under Mr. Obama, the agency that runs Medicare and Medicaid has also led efforts to carry out the Affordable Care Act, supervising most of the online marketplaces where people can buy health insurance and obtain subsidies to help cover the cost.`;

console.log(getSources(article));
