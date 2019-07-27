chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(chrome)
    console.log(chrome.browserAction)
    chrome.browserAction.setBadgeText({text: request.time.toString(), tabId: sender.tab.id});
});
