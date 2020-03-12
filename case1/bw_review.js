"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Clint Crockett
   Date:   March 11
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
//runs init functino when the page loads
window.onload = init();

function init(){
   var stars = document.querySelectorAll("span#stars img");

   for(var i = 0; i<stars.length;i++){
      stars[i].style.cursor = "pointer";
      stars[i].addEventListener("mouseenter", lightStars);
      
   }
   document.getElementById("comment").addEventListener("keyup", updateCount);
}

function lightStars(e){
   var starNumber = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");

   for(var i = 0; i<starNumber; i++){
      // this will light up the stars
      stars[i].src = "bw_star2.png";
   }
   for(var j = starNumber; j<5; j++){
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = (starNumber + "stars");
   // tihs will stop the stars from appering when you unhover
   e.target.addEventListener("mouseleave", turnOffStars);
   e.target.addEventListener("click", 
      function(){
         e.target.removeEventListener("mouseleave", turnOffStars);
      });

}
// this is the function to turn off the stars
function turnOffStars(){
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i<stars.length; i++){
      stars[i].src = "bw_star.png";
   }
   document.getElementById("rating").value = "";
}

function updateCount(){
   var commentText = document.getElementById("comment").value;
   var charCount = countCharacters(commentText);
   var  wordCountBox = document.getElementById("wordCount");

   wordCountBox.value = charCount + "/1000";

   if(charCount>1000){
      wordCountBox.style.color = "white";
      wordCountBox.style.background = "red";
   }
   else{
      wordCountBox.style.color = "black";
      wordCountBox.style.background = "white";
   }
}

  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   