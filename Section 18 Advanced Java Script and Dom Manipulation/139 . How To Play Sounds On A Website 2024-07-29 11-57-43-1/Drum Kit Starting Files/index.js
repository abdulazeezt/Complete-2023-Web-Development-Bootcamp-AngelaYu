try 
{
    var numberOfButtons = document.getElementsByClassName("drum").length;
    // console.log(" alert. ")

                    console.clear();


    for (i=0 ; i < numberOfButtons ; i++){

          // console.log("inside loop no : "  +i )
          document.querySelectorAll(".drum")[i].addEventListener("click", function(e) {
            var buttoninnerHtml = this.innerHtml ;
            
            // console.log("clicked i Value is : " +i  )
            // const source = e.target || e.source;
            //  var source = new string()


            var source = e.target ;
            var classAttrib = toString( source.getAttribute("class")  );

                // var classAttrib = JSON.parse(classAttrib)
            
            // const arr = classAttrib.split(" ")
           // const s = arr[0]
            // window.alert( classAttrib  )
            // console.log( "Printing array   : " +e.target )

/*
            var NewclassAttrib = classAttrib.substring(0,10)
            NewclassAttrib = NewclassAttrib +"This is new"
            NewclassAttrib = String( NewclassAttrib.substring(0,10) )

        
            // newregexp = new RegExp("w|W","g")
            // searchresult = attrib.search(newregexp)
            
            var keypressed = "" ;

            switch ( classAttrib  ) {

                    case 'w drum':
                        keypressed = 'w';
                    break;

                    case 'a drum':
                        keypressed = 'a';
                    break;
                    case 's drum':
                        keypressed = 's';
            
                    break;
                    case 'd drum':
                    
                    break;
    
                    default:

                    break;
            }

                console.log("Inside switch :-- " +keypressed    )
            // if ( attrib.search("w") > 0 ){ console.log("Hello")} else { console.log(" Not Hello")}
            //   console.log( source.getAttribute("class"))
            //   console.log( "Printing the resulet "source);
            console.log(" clicked a button with class :  "  +NewclassAttrib )
        */
            var audio = new Audio("sounds/crash.mp3" )
            audio.play();
 
 
 
        })
    }

    
}
catch (error) {
        console.log(" Error Cached :---" +error    )
}
        // var attribsearch = attrib.search("w") > 0

finally{
        console.log(" End of finally block : " )
}