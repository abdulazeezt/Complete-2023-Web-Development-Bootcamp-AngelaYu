
/*
document.addEventListener("keypress", function(event) {

  alert("a Key was pressde");

  console.log(event.key );


}   )

*/


document.addEventListener("keypress", function(event) {

      makesound(event.key)

}   )


function makesound( key     ) {


    switch (key) {
      case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
        case "a":
          var tom1 = new Audio("sounds/tom-2.mp3");
          tom1.play();
        break;
        case "s":
          var tom1 = new Audio("sounds/tom-3.mp3");
          tom1.play();
        break;
        case "d":
          var tom1 = new Audio("sounds/tom-4.mp3");
          tom1.play();
        break;
        
        case "j":
          var tom1 = new Audio("sounds/snare.mp3");
          tom1.play();
        break;

        case "k":
          var tom1 = new Audio("sounds/crash.mp3");
          tom1.play();
        break;





      default:
        break;
    }


  
}
