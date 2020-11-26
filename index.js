"use strict";

var numMemory = "";

function dis(val) {
    const dot = document.getElementById("thedot")

    if (document.getElementById("operator").value != "") {
        dot.disabled = false;
        if (val == ".") {
            document.getElementById("sNum").value += val;
            dot.disabled = true;
        } else if (val == "(-)") {
            val = "-";
            var newStr = document.getElementById("fNum").value;
            if (newStr.charAt(0) == "-") {
                newStr = newStr.substring(1);
                document.getElementById("sNum").value = newStr;
            } else {
                document.getElementById("sNum").value = val + newStr;
            }
        } else {
            document.getElementById("sNum").value += val;
        }
    } else {

        if (document.getElementById("fNum").value == "0") {
            document.getElementById("fNum").value = "";
        }

        if (val == ".") {
            document.getElementById("fNum").value += val;
            dot.disabled = true;
        } else if (val == "(-)") {
            val = "-";
            var newStr = document.getElementById("fNum").value;
            if (newStr.charAt(0) == "-") {
                newStr = newStr.substring(1);
                document.getElementById("fNum").value = newStr;
            } else {
                document.getElementById("fNum").value = val + newStr;
            }
        } else {
            document.getElementById("fNum").value += val;
        }
    }
}

function op(val) {
    document.getElementById("operator").value = val;
}

function clearStr() {
    document.getElementById("operator").value = '';
    document.getElementById("fNum").value = "0";
    document.getElementById("sNum").value = '';
}

function solution() {
    var firstNum = document.getElementById("fNum").value;
    var secondNum = document.getElementById("sNum").value;
    var operator = document.getElementById("operator").value;
    if (secondNum.charAt(0) == "-" && operator.charAt(0) == "-") {
        operator = "+";
        var newStr = secondNum.substring(1)
        var answer = eval(firstNum + operator + newStr);
    } else {
        var answer = eval(firstNum + operator + secondNum);
    }

    clearStr();
    dis(answer);

}

function sqroot() {
    var firstNum = document.getElementById("fNum").value;
    var answer = Math.sqrt(firstNum);
    clearStr();
    dis(answer);
}

function numPercentage() {
    if (document.getElementById("operator").value != ""){
        var dNum = document.getElementById("sNum").value
        document.getElementById("sNum").value = eval(dNum + "/" + "100");
    }else{
        var dNum = document.getElementById("fNum").value
        document.getElementById("fNum").value = eval(dNum + "/" + "100");
    }
}

function MRC() {
    if(document.getElementById("operator").value != ""){
        document.getElementById("sNum").value = numMemory;
    }else{
    document.getElementById("fNum").value = numMemory;
    }
}

function negM() {
    if (document.getElementById("operator").value != "") {
        var disNum = document.getElementById("sNum").value;
        if (numMemory == "") {
            numMemory = "-" + document.getElementById("sNum").value;
        } else {
            var newNum = eval(numMemory + "-" + disNum);
            numMemory = newNum;
        }
    } else {
        var disNum = document.getElementById("fNum").value;
        if (numMemory == "") {
            numMemory = "-" + document.getElementById("fNum").value;
        } else {
            var newNum = eval(numMemory + "-" + disNum);
            numMemory = newNum;
        }
    }
}

function plusM() {
    if (document.getElementById("operator").value != "") {
        var disNum = document.getElementById("sNum").value;

        if (numMemory == "") {
            numMemory += document.getElementById("sNum").value;
        } else {
            var newNum = eval(numMemory + "+" + disNum);
            numMemory = newNum;
        }
    } else {
        var disNum = document.getElementById("sNum").value;
        if (numMemory == "") {
            numMemory += document.getElementById("fNum").value;
        } else {
            var newNum = eval(numMemory + "+" + disNum);
            numMemory = newNum;
        }
    }
}

function compressedString(message) {
    var newStr = "";
    var counter = 0;
    for(var i = 0; i < message.length; i++){
        var newChar = message.charAt(i);
        console.log(newChar)
        var newerChar = message.charAt(i+1)
        console.log(newerChar)
       if(newChar === newerChar){
           counter++;
       }else {
           counter++;
           console.log(counter)
           newStr = newStr + newChar;
           if (counter > 1) {
               newStr = newStr + counter;
           }
           counter = 0;
       }

    }
    return newStr;
}
console.log(compressedString("aabb"));

$(document).ready(function () {
    var expanded = false;
    $("#drawer-handle").click(function () {
        if (expanded = !expanded) {
            $("#drawer-content").animate({ "margin-right": 0 },    "slow");
        } else {
            $("#drawer-content").animate({ "margin-right": -300 }, "slow");
        }
    });
});


