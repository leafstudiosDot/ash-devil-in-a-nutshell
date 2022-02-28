// This will be shown to an active tab
chrome.runtime.onMessage.addListener((props, sender, response) => {
    console.log(props);
});