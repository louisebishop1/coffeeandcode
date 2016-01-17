// Built in JS functions

// alert("Welcome to my website");
// confirm("Is this working?");

// Primitive Data Types

// "hello" - String
// 1, 2, -156, 13087990 - Integers
// 0.23, -123.43, 10000.34 - Floats
// true, false - Boolean values
// ["milk", "bread", "tea"] - Array (ie storing multiple values of the same type together)

//Variables
//Variables are containers for storing information and their value can be changed
//var username = "lbishop";
//username = "mrothery";

//Jquery

//$("nav a").html("hello jquery");
//$(selector).action("value");

//The $ talks to jquery
//The selector - "nav a", selects what we want to affect
//The action - .html, what we want to do to the selector
//The value - ("hello jquery"), what we want to change the content to

//$("body").css("background-color", "red");

//Event listeners

//$("h1").on("click", function(){
//
//   $("body").css("background-color", "red");
//
// });

$(".trigger").on("click", function(){

  $(".trigger").css("transform", "rotate(90deg)");
  $("nav").slideToggle("slow");

});
