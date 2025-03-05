// alert("hello")
var numOfDrumButtons = document.querySelectorAll(".drum").length

// alert(numOfDrumButtons

for ( var i =0 ; i<numOfDrumButtons; i++)
{

  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    alert(" I got clicked . button name is :" + i );

  });



};