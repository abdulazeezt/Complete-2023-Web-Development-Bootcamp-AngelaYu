//++++++++++++++++++++++++++++++ First method

function handleClick(element){
  // var h2a = document.getElementById(h2-1)
  // h2a.innerHTML(element.id )
  alert( " You hae clicked")
}

//Second method  ++++++++++++++++++++++++++++++++
var heading2 = document.getElementById("h2-2")

heading2.addEventListener("click",function(){
    alert("you have clicked heading 2 with ID  " +heading2.id  )
})