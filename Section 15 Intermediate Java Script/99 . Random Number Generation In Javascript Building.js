
try {
    // const h2a = document.getElementById("h2-1")
  var h2a = document.getElementById("h2-1")
  var h2b = document.getElementById("h2-2")
  var h2c = document.getElementById("h2-3")
  var h2d = document.getElementById("h2-4")
  var h2error = document.getElementById("h2_error")
  var h2Completion = document.getElementById("h2_completion")
  
  var flexparadiv1 = document.getElementsByClassName("box-1")
  var flexparadiv2 = document.getElementsByClassName("box-2")

  //#################################################################################
  var greeting = "Hello world"
      // print (asdfas;ffasd)
      // h2d.innerHTML = " The code has been implemented ."
      // import math  
      var randnumber = Math.random()
      flexparadiv1[0].innerHTML = "Initial Random no. ------------:"  +randnumber


      var randnumber = Math.random()
      flexparadiv2[0].innerHTML = "Random no after multiplicaton with 6 is #: "  +(randnumber * 6)


      //###################################################################################
      h2error.innerHTML = " The code has been implemented and Successful."  
      //##################################################################################

} 

catch (error) {
  // document.write(" encountered , Error cached error is :   " +error  )
    h2error.innerHTML = "Error      :-      " +error
}

finally{

  h2Completion.innerHTML = "code execution has been completed ."  

}
