
var currentno = 0;
var previousno = 0;
var fibanacci = 0;

for (var i = 0; i < 10 ; i++){
  //  alert("Hello")
  
  previousno = fibanacci ;
  currentno = i;
  fibanacci = currentno + previousno ;

  console.log ("i is :" + i + " Previousno :" + previousno + " Currentno :" + currentno + " Fibannacci :" + fibanacci  );
}