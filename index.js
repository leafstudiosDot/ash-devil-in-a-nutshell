// This is a script

let isAshDevilEnabled = document.getElementById("enableAshDevil");

chrome.storage.sync.get(['ashdevilen'], function(obj) {
    isAshDevilEnabled.checked = obj.ashdevilen
})

function AshDevilExec() {
    let ashdevilen = isAshDevilEnabled.checked ? true : false
    const payload = {
        ashdevilen: isAshDevilEnabled.checked ? true : false
    }
    chrome.storage.sync.set(payload)

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {ashdevilen})
    })
}

isAshDevilEnabled.addEventListener('change', AshDevilExec);