"use strict";

function dis(val) {
    const dot = document.getElementById("thedot")

    if(document.getElementById("operator").value != ""){
        dot.disabled = false;
        if (val == "."){
            document.getElementById("sNum").value += val;
            dot.disabled =true;
        }else if(val == "(-)") {
            val = "-";
            var newStr = document.getElementById("fNum").value;
            if (newStr.charAt(0) == "-") {
                newStr = newStr.substring(1);
                document.getElementById("sNum").value = newStr;
            }else {
                document.getElementById("sNum").value = val + newStr;
            }
        }
        else {
            document.getElementById("sNum").value += val;
        }
    }else {
        if (val == "."){
            document.getElementById("fNum").value += val;
            dot.disabled =true;
        }else if(val == "(-)") {
            val = "-";
            var newStr = document.getElementById("fNum").value;
            if(newStr.charAt(0) == "-"){
                newStr = newStr.substring(1);
                document.getElementById("fNum").value = newStr;
            }else{
            document.getElementById("fNum").value = val + newStr;
            }
        }
        else {
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
    if(sNum.charAt(0) == "-" && operator.charAt(0) == "-"){
        operator = "+";
        var newStr = secondNum.substring(1)
        var answer = eval(firstNum + operator + newStr);
    }else{
        var answer = eval(firstNum + operator + secondNum);
    }

    clearStr();
    dis(answer);

}

