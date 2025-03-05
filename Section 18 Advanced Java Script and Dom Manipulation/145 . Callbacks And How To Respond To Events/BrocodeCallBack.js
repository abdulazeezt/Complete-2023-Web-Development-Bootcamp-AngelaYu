

//#######################################################################################
// this is the solution from Bro Code
// https://youtu.be/mzioHfj_Yb8?list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1

//#######################################################################################




sum(200,10, displayConsole);
// sum(200,10, displayDom);

function sum(x,y, callBack){

  let result = x + y;
  callBack(result);

}


function displayConsole(output){
  console.log(output)  
}

function displayDom(output){
  document.getElementById("mylable").innerHTML = output; }
