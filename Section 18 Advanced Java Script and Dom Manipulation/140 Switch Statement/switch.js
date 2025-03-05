
/*

let yourinput = prompt("please enter abcde . any of the letter");

switch(yourinput){

case "a":
  alert("entered a " + yourinput)
  break;
case "b":
  alert("You have entered b: " + yourinput  )
  break;

default:
  alert("please enter a valid input")

}

*/


// alert(" YOu have entered : asdfa "  + this.innerhtml );

var NumberOfButtons = document.querySelectorAll(".drum").length


for ( var i =0 ; i < NumberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){

    console.log(this)
    console.log(this.InnerHtml  )

    
    var InnerHtml = this.innerhtml;
    
    switch(InnerHtml){
      case "a":
        
      case "b":
      case "":

    }
  
    // alert(" YOu have entered : "  + InnerHtml  );
  }
  )
  }

