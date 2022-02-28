// This is a script

let isAshDevilEnabled = document.getElementById("enableAshDevil");

chrome.storage.sync.get(['ashdevilen'], function(obj) {
    isAshDevilEnabled.checked = obj.ashdevilen
})

function AshDevilExec() {
    const payload = {
        ashdevilen: isAshDevilEnabled.checked ? true : false
    }

    chrome.storage.sync.set(payload)
}

isAshDevilEnabled.addEventListener('click', AshDevilExec);