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
var guestlist = ["Angele","Jack","Pam","James","Lara","Jason"]
mainpara1.innerHTML = "the length of array is "   +guestlist.length
mainpara2.innerHTML = "value in 0 position "   +guestlist[0]
mainpara3.innerHTML = "Include Feature searching for Jack: ###  "   +guestlist.includes("Jack")

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
