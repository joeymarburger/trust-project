(function(){
  console.log('Trust Bar loaded!');
  
  // Load Sources dependencies
	var jsInsert = document.createElement('script');
	jsInsert.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/ramda/0.17.1/ramda.min.js');
	document.body.appendChild(jsInsert);
	var jsInsert2 = document.createElement('script');
	jsInsert2.setAttribute('src', '//unpkg.com/nlp_compromise@latest/builds/nlp_compromise.min.js');
	document.body.appendChild(jsInsert2);
  
  // Build sidebar via HTML injection
  var sideBar = document.createElement("div");
  sideBar.id = "trust-sidebar";
  sideBar.innerHTML = '<div id="trust-close-bar" class="row"><div class="small-6 columns"><p><strong>Trust Bar</strong> <small><a href="http://thetrustproject.org" title="About Trust Bar" target="_blank"><i class="fa fa-question-circle"></i></a></small></p></div><div class="small-6 columns"><p id="trust-close-text"><strong><a href="#" id="trust-close" title="Close">&times;</a></strong></p></div></div>';

  var trustBarWrapper = document.createElement("div");
  trustBarWrapper.id = "trust-bar-wrapper";
  
  var trustBarSources = document.createElement("div");
  trustBarSources.id = "trust-bar-sources";
  trustBarSources.className = "trust-bar-content";
  //<li>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua," said Source Name One. <strong><a href="#" title="Source">Show</a></strong></li><hr>
  trustBarSources.innerHTML = '<h6><strong>SOURCES</strong></h6><ol id="trust-sources-list"><li>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua," said Source Name One. <strong><a href="#" title="Source">Show</a></strong></li><hr><li>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua," said Source Name Two. <strong><a href="#" title="Source">Show</a></strong></li><hr><li>"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua," said Source Name Three. <strong><a href="#" title="Source">Show</a></strong></li></ol><hr>';
  trustBarWrapper.appendChild(trustBarSources);
  
  var trustBarMeta = document.createElement("div");
  trustBarMeta.id = "trust-bar-meta";
  trustBarMeta.className = "trust-bar-content";
  trustBarMeta.innerHTML = '<h6><strong>PUBLISHER</small></strong></h6><div class="row small-collapse expanded"><div class="small-6 columns"><p>Correction <a href="#" title="Correction"><i class="fa fa-check-circle"></i></a> <i class="fa fa-times-circle"></i></p></div><div class="small-6 columns"><p>Author <a href="#" title="Author"><i class="fa fa-check-circle"></i></a> <i class="fa fa-times-circle"></i></p></div><div class="small-6 columns"><p>Ethics <a href="#" title="Ethics"><i class="fa fa-check-circle"></i></a></p></div><div class="small-6 columns"><p>Location <a href="#" title="Author"><i class="fa fa-check-circle"></i></a> <i class="fa fa-times-circle"></i></p></div><hr>';
  trustBarWrapper.appendChild(trustBarMeta);  
  
  // Append all HTML
  sideBar.appendChild(trustBarWrapper);
  document.getElementsByTagName('body')[0].appendChild(sideBar);
  
  // Handle close link
  var closeLink = document.getElementById('trust-close');
  closeLink.onclick = closeTrustBar;
  function closeTrustBar() {
    document.getElementById("trust-sidebar").remove();
    return false;
  };
})();