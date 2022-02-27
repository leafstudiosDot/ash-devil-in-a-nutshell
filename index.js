// This is a script
var isAshDevilEnabled = false;

//document.addEventListener('DOMContentLoaded', onInit, false);

function AshDevilCall() {
    var check = document.getElementById("enableAshDevil");
    if (check.checked == true) {
        isAshDevilEnabled = true;
    } else {
        console.log('%c ash devil in a nutshell is disabled! ', 'color: #b30c00');
        isAshDevilEnabled = false;
    }
}