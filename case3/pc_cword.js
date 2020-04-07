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
   var typeImage;

   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   downClue = document.getElementById(currentLetter.dataset.clueD);

   for(var i = 0; i = allLetters.length; i++){
      allLetters[i].style.cursor = "pointer";
      allLetters[i].onmousedown = function(e){
         formatPuzzle(e.target);
      }
   }

   for(var i = 0; i = allLetters.length; i++){
      if(keydown === true){
         selectLetter();
      }
   } 

   allLetters[i].style.cursor = "pointer";
   if(typeImage === true){
      swichTypeDirection();
   }

}

function formatPuzzle(){
   currentLetter = puzzleLetter;
   for(var i = 0; i < allLetters.length; i++){
      allLetters[i].style.backgroundColor = "";
   }
   acrossClue.style.color = "";
   downClue.style.color = "";

   if(currentLetter.dataset.clueA !== undefined){
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      acrossClue.style.color = "blue";

      wordLetters = document.querySelectorAll("[data-clue-a =" + currentLetter.dataset.clueA + "]");
     
      wordLetters[0].style.backgroundColor = "rgb(231, 231, 255)";
   }
   if(currentLetter.dataset.clueD !== undefined){
      acrossClue = document.getElementById(currentLetter.dataset.clueD);
      acrossClue.style.color = "red";

      wordLetters = document.querySelectorAll("[data-clue-d =" + currentLetter.dataset.clueD + "]");
      
      wordLetters[0].style.backgroundColor = "rgb(255, 231, 231)";
   }
   if(typeDirection === "right"){
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }
   else{
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}

function selectLetter(e){
   var leftLetter = document.getElementById(currentLetter.dataset.left);
   var upLetter = document.getElementById(currentLetter.dataset.up);
   var rightLetter = document.getElementById(currentLetter.dataset.right);
   var downLetter = document.getElementById(currentLetter.dataset.down);

   var userKey = e.keycode; 

   if(userKey = 37){
      formatPuzzle(leftLetter);
   }
   else if(userKey === 38){
      formatPuzzle(upLetter);
   }
   else if(userKey === 39 || userKey === 9){
      formatPuzzle(rightLetter);
   }
   else if(userKey === 40 || userKey === 13){
      formatPuzzle(downLetter);
   }
   else if(userKey === 8 || userKey === 46){
         currentLetter.textContent = "";
   }
   else if(userKey === 32){
      swichTypeDirection();
   }
   else if(userKey >= 65 && userKey <= 90){
      currentLetter = getChar("userKey")

      if(typeDirection = "right"){
         formatPuzzle(rightLetter);
      }
      else{
         formatPuzzle(downLetter);
         }
   }
   
   e.preventDefalt()
}
   
function swichTypeDirection(){
   var typeImage;
   if(typeDirection === "right"){
      typeDirection = "down";
      typeImage.style.src = "pc_right.png";
      typeImage.style.backgroundColor = "rgb(255, 191, 191)";

   }
   else{
      typeDirection = "right";
      typeImage.style.src = "pc_down.png";
      typeImage.style.backgroundColor = "rgb(191, 191, 255)";
   }
}   





/*====================================================*/

function getChar(keyNum) {
   return String.fromCharCode(keyNum);
}
