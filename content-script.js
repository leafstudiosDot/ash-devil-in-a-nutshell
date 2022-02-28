// This will be shown to an active tab
let ashdevilen;
chrome.runtime.onMessage.addListener((props, sender, response) => {
    ashdevilen = props.ashdevilen
    AshDevilNow(ashdevilen)
});

window.onload = chrome.storage.sync.get(['ashdevilen'], function(obj) {
    AshDevilNow(obj.ashdevilen);
})

function AshDevilNow(enabled) {

}