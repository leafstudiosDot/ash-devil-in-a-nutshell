// This will be shown to an active tab
let ashdevilen;
chrome.runtime.onMessage.addListener((props, sender, response) => {
    console.log(props)
    ashdevilen = props.ashdevilen
    AshDevilNow(ashdevilen)
});

window.onload = chrome.storage.sync.get(['ashdevilen'], function(obj) {
    AshDevilNow(obj.ashdevilen);
    console.log("Working on ash devil in a nutshell")
})

function AshDevilNow(enabled) {
    const selectedTags = document.querySelectorAll('*')
    if (enabled) {
        for (let i = 0; i < selectedTags.length; i++) {
            if (selectedTags[i].innerHTML.includes('hot')) {
                selectedTags[i].innerHTML = selectedTags[i].innerHTML.replace('hot', '🥵');
            }
        }
    }
}