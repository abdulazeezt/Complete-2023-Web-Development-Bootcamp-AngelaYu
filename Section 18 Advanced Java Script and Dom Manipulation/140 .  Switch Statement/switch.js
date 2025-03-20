
// let yourinput = prompt("please enter abcde . any of the letter");

// alert(" YOu have entered : asdfa "  + this.innerhtml );

var h1ForTesting = document.getElementById("h1ForTesting")
h1ForTesting.innerHTML = "for testing hello h1 asd"

var NumberOfButtons = document.querySelectorAll(".drum").length

for ( var i =0 ; i < NumberOfButtons; i++) 
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(e){
    
//My solution --------------------------------------------------------------

var buttoninnerHtml = this.innerHtml ;
            
// console.log("clicked i Value is : " +i  )
// const source = e.target || e.source;
//  var source = new string()

var source = e.target ;
// var classAttrib = toString( source.getAttribute("class")  );

h1ForTesting.innerHTML = toString( toString(e.currentTarget.innerHTML)  )
console.log(" Current targe is :---\t   "   +e.currentTarget.innerHTML )

//---------------------------------------------------------------------- */
var selectedcase = "x"
//--------------------------------------------------
switch(e.currentTarget.innerHTML){

  case "w":
    // alert("entered " +e.currentTarget.innerHTML )
    break;
  case "a":
    // alert("You have entered : " +e.currentTarget.innerHTML  )
    break;
  case "s":
      // alert("You have entered : " +e.currentTarget.innerHTML  )
      break;
  case "d":
        // alert("You have entered : " +e.currentTarget.innerHTML  )
        break;
  case "j":
          alert("You have entered : " +e.currentTarget.innerHTML  )
          break;
  default:
    alert("please enter a valid input")
  
  }
  

//----------------------------------------------------------------------
          // var selectedcase = "x"
          
          // switch (buttoninnerHtml) {
          //     case "w drum":
          //         selectedcase ="w"
          //         break;
              
          //     case "a":
          //         selectedcase ="a"
          //         break;
          
          //     case "s":
          //         selectedcase ="s"
          //         break;
          
          //     case "d":
          //         selectedcase ="d"
          //         break;
          
          //     case "j":
          //         selectedcase ="j"
          //         break;
              
          //     case "k":
          //         selectedcase ="k"
          //         break;
            
          //     case "l":
          //         selectedcase ="l"
          //         break;
            
          //     default:
          //       break;
          // }

          classAttrib= e.currentTarget.innerHTML
          console.log(" YOu have clicked : "  +classAttrib +" selected : --" +selectedcase );
          // console.log(e );


    }
  )
}












  





  