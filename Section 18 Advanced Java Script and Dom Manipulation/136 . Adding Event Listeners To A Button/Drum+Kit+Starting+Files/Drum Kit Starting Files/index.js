try {
    var noOfButtons = document.getElementsByClassName(".set").length
    const button = document.querySelector("button")
    button.addEventListener("click", alertOnClick(Event )   )

    function getTagID(tagname) { var temparr = new Array(); 
        var indexcount = +document.getElementsByTagName(tagname).length  ; var temparr ;
        for (var i=0; i < indexcount ; i++){ temparr.push(document.getElementsByTagName(tagname)[i].id +"<br>" ) } ;
        return temparr      }
    // console.log("Returning ID Array : <br> <br> " +getTagID("p") )
    
    function alertclicks(){ 
        console.log(" inside loop no :  " +i  )
        h2tolog.innerHTML = "asdfa adsfasdfakj"    }


    function alertOnClick(event){
        console.log("button clicked , Event : " +event  )
    }

} 

catch (error) {
        console.log("Error occured :-      " +error  )
}

finally{
        console.log(" end of finally block"  )

}


