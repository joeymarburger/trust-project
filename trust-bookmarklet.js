javascript:(function(){
  var style = document.createElement(%27style%27), styleContent = document.createTextNode(%27#trust-sidebar { position: relative !important; top: 0 !important; right: 0 !important; width: 300px !important; height: 100% !important; z-index: 9999 !important; background: white !important; border-left: 1px solid #c2c3c6 !important; color: #1f1f1f !important; font-family: sans-serif !important; }%27); style.appendChild(styleContent ); var caput = document.getElementsByTagName(%27head%27); caput[0].appendChild(style);
  var sideBar = document.createElement("div");
  sideBar.id = "trust-sidebar";
  sideBar.innerHTML = "<h1>Weeee!</h1>";
  document.getElementsByTagName('body')[0].appendChild(sideBar);
})();