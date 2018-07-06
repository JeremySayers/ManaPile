chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({card: 'Mist-Cloaked Herald'}, function() {
      console.log("Owned card is Mist-Cloaked Herald!");
    });
});
chrome.browserAction.setPopup({popup: 'popup.html'});