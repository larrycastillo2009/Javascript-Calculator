"use strict";

function dis(val) {
    if(document.getElementById("operator").value != ""){
        document.getElementById("sNum").value += val;
    }else {
        document.getElementById("fNum").value += val;
    }
}

function op(val) {
    document.getElementById("operator").value = val;
}

function clearStr() {
    document.getElementById("operator").value = '';
    document.getElementById("fNum").value = '';
    document.getElementById("sNum").value = '';
}