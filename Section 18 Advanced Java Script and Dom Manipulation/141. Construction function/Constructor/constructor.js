
function BellBoy(name,age,hasworkpermit,languages){
  this.name = name;
  this.age = age;
  this.hasworkpermit = hasworkpermit ;
  this.languages = languages;
}


newBellboy = new BellBoy("Timmy",19, true,["french","English"]); 
console.log("languages:  "   +newBellboy.languages)
console.log("has workpermit: " +newBellboy.hasworkpermit)
console.log("newBellboy.name : "  +newBellboy.name)