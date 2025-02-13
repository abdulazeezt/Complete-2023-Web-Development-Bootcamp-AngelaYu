
try {
    // const h2a = document.getElementById("h2-1")
    // h2a.innerHTML("asdfaasa") 
  var h2a = document.getElementById("h2-1")
  var h2d = document.getElementById("h2-4")
  // header.style = "Background"
  h2a.style="background-color: cadetblue; font-style: italic;"
  // document.write(  "hello workd" )
  // h2a.innerHTML  = " This is inner HTML"

  var grade = "A"
  var output = "F"

  switch (grade) {
    case "P":
      break;
    case "F":
        break;
    
    default:
      break;
  }

    h2a.innerHTML  = output

} 

catch (error) {
  // alert(" encountered " +error   )
  document.write(" encountered , Error cached error is :   " +error  )  
 }


finally{

// document.write(" Successfully implemented the code"  )
// document.write("<br>")
// document.write("<br>")
// document.write("<br>")
// document.write("<hr>")
  
  // h2d.write("hr")

 h2d.innerHTML = " Code implementation completed ."  

}