
try {
    // const h2a = document.getElementById("h2-1")
  var h2a = document.getElementById("h2-1")
  var h2b = document.getElementById("h2-2")
  var h2c = document.getElementById("h2-3")
  var h2d = document.getElementById("h2-4")
  var h2error = document.getElementById("h2_error")
  var h2Completion = document.getElementById("h2_completion")
  
  var paradiv1 = document.getElementsByClassName("box-1")
  var paradiv2 = document.getElementsByClassName("box-2")
  var paradiv3 = document.getElementsByClassName("box-3")
  var paradiv4 = document.getElementsByClassName("box-4")

  //#################################################################################
  var greeting = "Hello world"
      // print (asdfas;ffasd)
      // h2d.innerHTML = " The code has been implemented ."  

      paradiv1[0].innerHTML = "the Lenghth:  " +greeting.length
      paradiv2[0].innerHTML = "the char :  " +greeting.charAt(0)
      paradiv3[0].innerHTML = "index of llo asfda adfa asfdafaaa    :  " +greeting.indexOf("llo")
      paradiv4[0].innerHTML = "substring 1,3 :- "+greeting.substring(1,3) 



      h2error.innerHTML = " The code has been implemented and Successful."  
      //##################################################################################

} 

catch (error) {
  // document.write(" encountered , Error cached error is :   " +error  )
    h2error.innerHTML = "Error      :-      " +error
}


finally{
  h2Completion.innerHTML = "End of finally block."  
}
