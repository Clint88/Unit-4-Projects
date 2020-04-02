"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Clint Crockett
   Date:   March 11
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/

var allLetters;
var currentLetter;
var acrossClue;
var downClue;
var typeDirection;

window.onload = init();

function init(){
   allLetters = document.querySelectorAll("table#crossword span");
   currentLetter = allLetters[0];
   var acrossID = currentLetter.dataset.clueA;
   var downID = currentLetter.dataset.clueD;
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);
}

// function formatPuzzle(){
//    currentLetter = puzzleLetter;
//    for(var i = 0; i < allLetters.length; i++){
//       allLetters[i].style.backgroundColor = "";
//    }
//    acrossClue[i]style.;
// }

   





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
