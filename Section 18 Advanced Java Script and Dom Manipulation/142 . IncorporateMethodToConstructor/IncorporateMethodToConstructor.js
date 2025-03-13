// var head1 = document.getElementsByTagName("h1")

// document.write("")

var headingOne = document.getElementById("HeadingOne");


function HouseKeeper(yearsOfexperience, name, cleaningrepoitorie) {
  this.yearsOfexperience = yearsOfexperience;
  this.name = name;
  this.cleaningrepoitorie = cleaningrepoitorie;
  this.clean = function () {
    console.log(" Cleaning in progress ")

  }



}
