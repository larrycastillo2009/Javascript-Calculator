"use strict";

function dis(val) {
    const dot = document.getElementById("thedot")

    if(document.getElementById("operator").value != ""){
        dot.disabled = false;
        if (val == "."){
            document.getElementById("sNum").value += val;
            dot.disabled =true;
        }else {
            document.getElementById("sNum").value += val;
        }
    }else {
        if (val == "."){
            document.getElementById("fNum").value += val;
            dot.disabled =true;
        }else {
            document.getElementById("fNum").value += val;
        }
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

function solution() {
    var firstNum = document.getElementById("fNum").value;
    var secondNum = document.getElementById("sNum").value;
    var operator = document.getElementById("operator").value;

    var answer = eval(firstNum + operator + secondNum);

    clearStr();
    dis(answer);

}