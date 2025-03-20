
//////////// FOR TESTING KEYBOARD EVENTS///////////////////////////////
document.getElementsByTagName("body")[0].addEventListener("keydown", (e ) => {
  // console.log("you Pressed down key code is :  " + e.code + " And key is : " + e.key);
  console.log(e)
  // if (e.ctrlKey) {
  //   console.log(e.code)
  //   // console.log(e)
  // }
})




document.getElementsByTagName("body")[0].addEventListener
(
  "keydown",(e) =>
  {

    var musicToPlay = ""
      switch (e.key) 
      {
        case "w":
              musicToPlay = "./sounds/crash.mp3"
          break;
        case "a":
            musicToPlay = "./sounds/kick-bass.mp3"
          break;
        case "s":
              musicToPlay = "./sounds/snare.mp3"
          break;
        case "d":
            musicToPlay = "./sounds/tom-1.mp3"
          break;
        case "j":
              musicToPlay = "./sounds/tom-2.mp3"
          break;
        case "k":
            musicToPlay = "./sounds/tom-3.mp3"
          break;
        case "l":
              musicToPlay = "./sounds/tom-4.mp3"
          break;
   
        default:
          break;
      }

      var music = new Audio(musicToPlay)
      music.play() 


  }

)