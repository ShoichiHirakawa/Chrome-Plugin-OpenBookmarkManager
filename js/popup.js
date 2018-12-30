(function() {
  var main;

  main = function() {
    chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.create({url: 'chrome://bookmarks/'}, tab => {});
      window.close();
    });
  };

  main();

}).call(this);
