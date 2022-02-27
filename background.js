chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        console.log('%c ash devil in a nutshell active!', 'color: #b30c00');
    }
})

/*chrome.management.onUninstalled.addListener(function () {
    chrome.tabs.create({ url: "https://youtu.be/RckGCham3uo" });
});*/

chrome.runtime.setUninstallURL("https://twitter.com/emojitownTV/status/1440595400541442050")