//####################################################################################
    var mainHeading = `
    137 . Higher Order Functions And Passing Functions As Arguments
    `
///####################################################################################
document.getElementsByTagName("header")[0].innerHTML = mainHeading
//####################################################################################
try {
    var mainpara1 = document.getElementById("mainP") ; 
    var h2error = document.getElementById("footerPara1") ; var h2Completion = document.getElementById("footerPara2")
    var aside2 = document.getElementsByClassName("aside-2")
    
//###################################################################################   



tempstr = "This is the content of tempstr <br>"

function add(num1 , num2){ return num1 + num2}
function multiply(num1 , num2){ return num1 * num2}
function calculator(num1 , num2, operator){ return operator(num1 , num2)}

        mainpara1.innerHTML = tempstr
        console.log(" Has been implemented and successfull ")










    h2error.innerHTML = " function add(num1 , num2){ return num1 + num2} <br> \
        function multiply(num1 , num2){ return num1 * num2} <br> \
        function calculator(num1 , num2, operator){ return operator(num1 , num2)} "






}

catch (error) {
     //    h2error.innerHTML = "Error  :- "  +error
       aside2[0].innerHTML = "Error  :-  "  +error
}


finally{
     aside2[0].innerHTML = "End of finally block  . "
}















/*
var mainpara2 = document.getElementById("mainPara2")
var mainpara3 = document.getElementById("mainPara3") ; var mainpara4 = document.getElementById("mainPara4")









function getTagID(tagname) {
      var temparr = new Array();
      var indexcount = +document.getElementsByTagName(tagname).length  ;
      var temparr ;
      for (var i=0; i < indexcount ; i++){ 
            temparr.push(document.getElementsByTagName(tagname)[i].id +"<br>" )

            // console.log(  "Looping through : " +i +"Current ID is : " +document.getElementsByTagName(tagname)[i].id  +"<br>"  )
            
            // }
            //  temparr =   document.firstElementChild
            // temparr = indexcount
            

            // if (document.getElementsByTagName(tagname)[i].id === "mainPara1") { document.write(" This is done. ")   }  
            
            
            // else { }
        }
    return temparr  

}








function getTagClass(tagname) {
    var temparr = new Array();
    var indexcount = +document.getElementsByTagName(tagname).length  ;

    var temparr ;

    for (var i=0; i < indexcount ; i++){ 
      
          temparr.push(document.getElementsByTagName(tagname)[i] .id +"<br>" )
      }
  return temparr  

}






















*/


