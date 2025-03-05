//####################################################################################

var mainHeading = `
117 . Selecting Html Elements With Javascript-1 
`
///####################################################################################

document.getElementsByTagName("header")[0].innerHTML = mainHeading

//####################################################################################
try {
   
    var mainpara1 = document.getElementById("mainPara1")
    var mainpara2 = document.getElementById("mainPara2")
    var mainpara3 = document.getElementById("mainPara3")
    var mainpara4 = document.getElementById("mainPara4")

    var h2error = document.getElementById("footerPara1")
    var h2Completion = document.getElementById("footerPara2")

    var flexparadiv1 = document.getElementsByClassName("box-1")
    var flexparadiv2 = document.getElementsByClassName("box-2")

//#################################[-################################################

//###################################################################################    

tempstr = "<br> <br> Printing from inside loop"
    mainpara1.innerHTML = tempstr


function getTagID(tagname) {
      var temparr = new Array();
      var indexcount = +document.getElementsByTagName(tagname).length  ;

      var temparr ;

      for (var i=0; i < indexcount ; i++){ 
        
            temparr.push(document.getElementsByTagName(tagname)[i].id  )
            console.log(  "Looping through : " +i +"Current ID is : " +document.getElementsByTagName(tagname)[i].id  +"<br>"  )
            // }
            //  temparr =   document.firstElementChild
            // temparr = indexcount
            if (document.getElementsByTagName(tagname)[i].id === "mainPara1") { document.write(" This is done. ")   }  
            // else { }
    }
    return temparr  

}
        // var allPtags = getTagID("p")  
        mainpara1.innerHTML = "Returning ID Array :  <br> total length is : "  +allPtags.length    +"<br>"  +allPtags  

        // mainpara1.innerHTML = "Returning Fib Array : <br> <br> " +DocumentObject().length
        // console.log("Returning ID Array : <br> <br> " +getTagID("li")  )

    //  ###################################################################################
    //  ###################################################################################
        h2error.innerHTML = " The code has been implemented and Successful."  
    //  ###################################################################################
    
    
    // console.log(" Has been implemented and successfull ")

        // console.log(" REturning :  "   +document.getElementsByTagName("p")[0].id  )

//##########EXCERCISE   BUTTON COLOR

document.getElementsByTagName("button")[0].style.backgroundColor = "Red "

//############################################################################################################
} 

catch (error) {
      //  document.write(" encountered , Error cached error is :   " +error  )
      h2error.innerHTML = "Error      :-      " +error
}

finally{
    h2Completion.innerHTML = "End of finally block ."  

}
