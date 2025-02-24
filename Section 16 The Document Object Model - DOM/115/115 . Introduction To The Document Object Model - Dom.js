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
    tempstr = "<br> <br> Printing from inside loop"
    mainpara1.innerHTML = tempstr

function DocumentObject() {
  // var temparr = new Array();
  var temparr ;
  // for (var i=0; i < 10 ; i++){
  //     var fib = i + prevval
  //     temparr.push( "Looping through : " +i +" , Previous val is: \
  //       " +prevval +" , Current Fib is : " +fib +"<br>"  )
  //     // console.log("Looping through : " +i +" , Previous val is: " +prevval +" , Current Fib is : " +fib )
  // }
//  temparr =   document.firstElementChild

    // 1temparr = document.getElementsByTagName("li")

  

   


    return temparr


  }

  var entirehtml = document.firstChild

  entirehtml = entirehtml.nodeValue

        mainpara1.innerHTML = "Returning Fib Array : <br> <br> " +entirehtml

      // mainpara1.innerHTML = "Returning Fib Array : <br> <br> " +DocumentObject().length
      // console.log("Returning Fib Array : <br> <br> " +DocumentObject()[0].name)

      // // document.write("<h4>Hello wold</h4>")
      // document.innerHTML = "<h4>Hello wold</h4>"


  //  entirehtml.firstChild.get
      console.log("Returning : Helloasdfas " +entirehtml   )

  //  ###################################################################################

  //  ###################################################################################
      h2error.innerHTML = " The code has been implemented and Successful."  
  //  ###################################################################################

} 

catch (error) {
  //  document.write(" encountered , Error cached error is :   " +error  )
  h2error.innerHTML = "Error      :-      " +error
}

  finally{
  h2Completion.innerHTML = "End of finally block ."  

}