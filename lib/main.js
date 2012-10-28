var tabs = require("tabs");
var data = require("self").data;
var widgets = require("widget");
var panels = require("panel");

widgets.Widget({
  id: "widget",
  label: "Busca facilmente ayuda en los foros de Mozilla Hispano",
  contentURL: data.url("mh.ico"),
  panel: panels.Panel({
    width: 165,
    height: 45,
    contentURL: data.url("panel.html"),
    contentScriptFile: [data.url("jquery.js"), data.url("panel.js")],
    onMessage: function(message){
       this.hide();
       tabs.open("https://www.mozilla-hispano.org/foro/search.php?keywords="+message);
    }
  })
});

