try 
{

    var numberOfButtons = document.getElementsByClassName("drum").length;
    // console.log(" alert. ")
    for (i=0 ; i < numberOfButtons ; i++){

          // console.log("inside loop no : "  +i )
          document.querySelectorAll(".drum")[i].addEventListener("click", function(e) {
            var buttoninnerHtml = this.innerHtml
            
            // console.log("clicked i Value is : " +i  )
            // const source = e.target || e.source;
            //  var source = new string()

            var source = e.target ;
            var attrib = toString( source.getAttribute("class")  ) 
            
              switch (source.getAttribute("class") ) {

                    case 'w drum':
                        // var source = 'w';
                        console.log("Inside w switch"    )
                
                    break;

                    case 'a drum':
                        // var source = 'a';
                    break;
                    case 's drum':
            
                    break;
                    case 'd drum':
                    
                    break;
    
                default:
                    break;
              }

                    

            // if ( attrib.search("w") > 0 ){ console.log("Hello")} else { console.log(" Not Hello")}
            //   console.log( source.getAttribute("class"))
            //   console.log( "Printing the resulet "source);
            console.log(" clicked a button with class :  "  +attrib )

            var audio = new Audio("sounds/crash.mp3" )
            // audio.play();
        })
    }




}
catch (error) {
        console.log(" Error Cached :---" +error    )

}
        // var attribsearch = attrib.search("w") > 0

finally{
        console.log(" End of finally block : " +attrib )
}


