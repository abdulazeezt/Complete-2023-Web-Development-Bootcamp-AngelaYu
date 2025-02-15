
try {
  // const h2a = document.getElementById("h2-1")
var h2a = document.getElementById("h2-1")
var h2c = document.getElementById("h2-3")

var h2d = document.getElementById("h2-4")
// h2a.style="background-color: cadetblue; font-style: italic;"

// Class definition starts here-- Inheritance testing :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

class chef{

    constructor(name, age){
      this.name = name;
      this.age = age;  }

    makeChicken(){
      document.write(" the chef makes chicken <br>")
    }

    makeSalad(){
      document.write(" the chef makes salad")
    }

    makeSpecialDish(){
      document.write("The chef makes special dish <br>  ")
    }

}

//    Inherited class    ################################

class italianCheff extends chef 
{
        constructor(name, age, countryOfOrigin ) {
            super(name, age)   
            this.countryOfOrigin = countryOfOrigin 
            }

            makePasta()
            {
               document.write(" The chef makes pasta <br>");
            }
        makeSpecialDish(){
            document.write("the chef makes chicken parm  <br> ")
        }

}

//########   Class testing ######################################

var mychef = new chef("mychef",45)

mychef.makeChicken()

mychef.makeSpecialDish()

document.write(mychef.name +"<br>")


var myitalianchef = new italianCheff("italianchef",40,"italy")

myitalianchef.makeSpecialDish()

document.write(myitalianchef.name +"<br>")




} 

catch (error) {
      // document.write(" encountered , Error cached error is :   " +error  )
      h2c.innerHTML = "Error      :-      " +error
  
}


finally{

    h2d.innerHTML = " The code has been implemented ."  

}
