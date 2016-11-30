javascript:(function(){
  var trustCSSPath = 'http://wapo.joeydev.com/trust-project/';
  var trustJSPath = 'http://wapo.joeydev.com/trust-project/';
  var docHostname = document.location.hostname;
  if ((docHostname).indexOf('projects.dev') >= 0 || (docHostname).indexOf('localhost') >= 0 ) {
    trustCSSPath = '';
    trustJSPath = '';
  }
	var fileInsert = document.createElement('link');
	fileInsert.setAttribute('rel', 'stylesheet');
	fileInsert.setAttribute('href', trustCSSPath+'css/foundation.min.css');
	document.getElementsByTagName('head')[0].appendChild(fileInsert);
	var fileInsert2 = document.createElement('link');
	fileInsert2.setAttribute('rel', 'stylesheet');
	fileInsert2.setAttribute('href', trustCSSPath+'font-awesome-4.7.0/css/font-awesome.min.css');
	document.getElementsByTagName('head')[0].appendChild(fileInsert2);
	var fileInsert3 = document.createElement('link');
	fileInsert3.setAttribute('rel', 'stylesheet');
	fileInsert3.setAttribute('href', trustCSSPath+'css/trust-sidebar.css');
	document.getElementsByTagName('head')[0].appendChild(fileInsert3);
	var jsInsert = document.createElement('script');
	jsInsert.setAttribute('src', trustJSPath+'js/trust-sidebar.js');
	document.body.appendChild(jsInsert);
})();