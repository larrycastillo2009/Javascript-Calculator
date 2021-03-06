"use strict";

// Variable for number memory button/functionality
var numMemory = "";

// Function for displaying numbers on screen
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

// Function for displaying operator on screen
function op(val) {
    document.getElementById("operator").value = val;
}

// Function clearing screen
function clearStr() {
    document.getElementById("operator").value = '';
    document.getElementById("fNum").value = "0";
    document.getElementById("sNum").value = '';
}

// Function for solving and displaying solution to screen
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

// Function for computating the square root
function sqroot() {
    var firstNum = document.getElementById("fNum").value;
    var answer = Math.sqrt(firstNum);
    clearStr();
    dis(answer);
}

// Function for converting a number into a percentage
function numPercentage() {
    if (document.getElementById("operator").value != ""){
        var dNum = document.getElementById("sNum").value
        document.getElementById("sNum").value = eval(dNum + "/" + "100");
    }else{
        var dNum = document.getElementById("fNum").value
        document.getElementById("fNum").value = eval(dNum + "/" + "100");
    }
}

// Function for storing/recalling a number into calculator memory
function MRC() {
    if(document.getElementById("operator").value != ""){
        document.getElementById("sNum").value = numMemory;
    }else{
    document.getElementById("fNum").value = numMemory;
    }
}

// Function for subtracting a number from the number stored in memory
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

// Function for adding a number from the number stored in memory
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




