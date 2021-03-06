"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Clint Crockett
   Date:   March 11
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/
// this will load init function at the beging of the page
window.onload = init();

function init(){
   var calcButtons = document.getElementsByClassName("calcButton");

   for(var i = 0; i<calcButtons.length; i++){
      calcButtons[i].addEventListener("click", buttonClick);
   }
   document.getElementById("calcWindow").addEventListener("keydown", calcKeys);
}

function buttonClick(e){
   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;
   var buttonValue = e.target.value;
   // these are buttons for on click
   switch(buttonValue){
      // this will delete all #s
      case "del":
         calcValue = "";
         break;
      // this will delete one #
      case "bksp":
         calcValue = eraseChar(calcValue);
         break;
      // this will solve the problem
      case "enter":
         calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
         break;
      // this will go back the previous problem
      case "prev":
         calcValue += lastEq(calcValue);
         break;
      default: 
         calcValue = calcValue + buttonValue;
   }
   document.getElementById("calcWindow").value = calcValue;
   document.getElementById("calcWindow").focus();
}

function calcKeys(e){
   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;
   // these are buttons for typing on your keyboard
   switch(e.key){
      case "Delete":
         calcValue = "";
         break;
      case "Enter":
         calcValue += " = " + evalEq(calcValue + calcDecimal);
         break;
      case "ArrowUp":
         calcValue += lastEq(calcWindow.value);
         break;
         preventDefalt();
   }
   document.getElementById("calcWindow").value = calcValue;
}


/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}