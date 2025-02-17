
try {
    // const h2a = document.getElementById("h2-1")
  var h2a = document.getElementById("h2-1")
  var h2b = document.getElementById("h2-2")
  var h2c = document.getElementById("h2-3")
  var h2d = document.getElementById("h2-4")
  var h2error = document.getElementById("h2_error")
  var h2Completion = document.getElementById("h2_completion")
  
  var listbox1 = document.getElementsByClassName("box-1")

  //#################################################################################
  var greeting = "Hello world"
      // print (asdfas;ffasd)
      // h2d.innerHTML = " The code has been implemented ."  

      listbox1[0].innerHTML = greeting

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
