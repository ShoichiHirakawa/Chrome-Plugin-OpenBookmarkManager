chrome.browserAction.onClicked.addListener(function (tab) {
    if (localStorage["is_open_with_window"] == "on") {		
        chrome.windows.create({url: 'chrome://bookmarks/'});
    }
    else {
       chrome.tabs.create({url: 'chrome://bookmarks/'}, tab => {});
    }
});