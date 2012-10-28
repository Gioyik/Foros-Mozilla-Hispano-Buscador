var text = "Buscar...";
var searchField = $("#search");

searchField.focus(function() {
  if (searchField.val() == text) {
    searchField.val("");
  }
});

searchField.blur(function() {
  if (searchField.val() == "") {
    searchField.val(text);
  }
});

searchField.keyup(function(event) {
  if (event.keyCode == '13') {
    event.preventDefault();
    var value = searchField.val();
    self.postMessage(value);
    searchField.val("");
  }
});

