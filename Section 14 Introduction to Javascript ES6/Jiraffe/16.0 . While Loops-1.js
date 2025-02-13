
try {
  // const h2a = document.getElementById("h2-1")
var h2a = document.getElementById("h2-1")
var h2d = document.getElementById("h2-4")
h2a.style="background-color: cadetblue; font-style: italic;"

var index = 0


//  while loop
  while ( index < 20 ){

    // var output = "Hello";
    index++ ;
    document.write(index)

  }

//################################Do while loop %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

do {
  index++ ;
  document.write(index)

} while (index < 20);


  // h2a.innerHTML  = output

} 

catch (error) {
      document.write(" encountered , Error cached error is :   " +error  )  
}


finally{

    h2d.innerHTML = " Code implementation completed ."  

}