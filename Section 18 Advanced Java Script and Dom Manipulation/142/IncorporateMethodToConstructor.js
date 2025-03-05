// var head1 = document.getElementsByTagName("h1")

// document.write("")

var headingOne = document.getElementById("HeadingOne");


function HouseKeeper(yearsOfexperience, name, cleaningrepoitor) {

  this.yearsOfexperience = yearsOfexperience;
  this.name = name;
  this.cleaningrepoitor = cleaningrepoitor;
  
   this.clean =   function (){
      
      //  alert("Cleaning has beebn taking care. ")
       return "Cleaning has been taken care.";
      


  }
  
}

// var hskpr1 = new HouseKeeper()

// hskpr1.clean


// newheading = hskpr1.clean()
headingOne.innerHTML  = "Initial : " + newheading  ;

// hskpr1.clean()
