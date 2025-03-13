try {

    // const buttons = document.getElementById("wbutton")
    // buttons.addEventListener("Click", alertOnClick    )

    // var noOfButtons = document.getElementsByClassName(".set").length
    // const button = document.querySelector("button")
    // button.addEventListener("click", alertOnClick(Event )   )

    // function getTagID(tagname) { var temparr = new Array(); 
    //     var indexcount = +document.getElementsByTagName(tagname).length  ; var temparr ;
    //     for (var i=0; i < indexcount ; i++){ temparr.push(document.getElementsByTagName(tagname)[i].id +"<br>" ) } ;
    //     return temparr      }

    // function alertclicks(){ 
    //     console.log(" inside loop no :  " +i  )
    //     h2tolog.innerHTML = "asdfa adsfasdfakj"    }


    var numberOfDrumButtons = document.querySelectorAll(".drum").length;

    for(var i=0; i < numberOfDrumButtons; i++){
        document.querySelectorAll(".d ")[i].addEventListener("click", function() {
            // alert("I got clicked");
            console.log("Got clicked " +i  );
        }
                                )


    }

    // // function alertOnClick(event="an event"){
    //     console.log("button clicked , Event : " +event  )
    //     alert("clicked")        }

} 

catch (error) {
        console.log("Error occured :-      " +error  )
}

finally{
        console.log(" end of finally block numberOfDrumButtons : " +numberOfDrumButtons )

}


