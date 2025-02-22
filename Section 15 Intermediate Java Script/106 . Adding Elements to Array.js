try {
  // const h2a = document.getElementById("h2-1")
var mainpara1 = document.getElementById("mainPara1")
var mainpara2 = document.getElementById("mainPara2")
var mainpara3 = document.getElementById("mainPara3")
var mainpara4 = document.getElementById("mainPara4")

var h2error = document.getElementById("footerPara1")
var h2Completion = document.getElementById("footerPara2")

var flexparadiv1 = document.getElementsByClassName("box-1")
var flexparadiv2 = document.getElementsByClassName("box-2")

//#################################[-################################################
var testarray = [1,2,3,4,5,6,7,8,9]

mainpara1.innerHTML = "Printing Full Array : ##  "   +testarray
tempstr = "<br> <br> Printing from inside loop"

function fizzbuzz(n) {
for ( var i=0 ; i<= n  ; i++  ){
      // console.log("Your are printing the data");
       //mainpara2.innerHTML = "value in 0 position "
      tempstr = tempstr +"<br> printing loop: " +i
      if ( (i% 3) === 0   &&  (i% 5) === 0  ) 
          { tempstr = tempstr +"<br> FIZZBUZZ " +i  }
      else if ( i% 3 === 0  ){ tempstr = tempstr +"<br> FIZZ " +i     }    
      else if ( i% 5 === 0  ){ tempstr = tempstr +"<br> BUZZ " +i     }
      else{} 
       

 }

  return tempstr


}


      // mainpara2.innerHTML = tempstr
      
     mainpara2.innerHTML = fizzbuzz(20)
  
      // mainpara2.innerHTML = " Hello"

  // alert("Helo")
  // console.log("Thi is the log")

  // mainpara2.innerHTML = "value in 0 position "   +guestlist[0]
  // mainpara3.innerHTML = "Include Feature searching for Jack: ###  "   +guestlist.includes("Jack")

  //###################################################################################


  //###################################################################################
      h2error.innerHTML = " The code has been implemented and Successful."  
  //###################################################################################

} 

catch (error) {
// document.write(" encountered , Error cached error is :   " +error  )
  h2error.innerHTML = "Error      :-      " +error
}

finally{

h2Completion.innerHTML = "End of finally block ."  

}
