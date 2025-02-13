
try {
  // const h2a = document.getElementById("h2-1")
var h2a = document.getElementById("h2-1")
var h2d = document.getElementById("h2-4")
h2a.style="background-color: cadetblue; font-style: italic;"

// Class definition starts here :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

  class Book {
    constructor(title, author   ) {
      this.title = title
      this.author = author
    }

     readBook(){
        document.write( " Reading :   " +this.title +"   by    :" +this.author   )
      //  return  " Reading " +this.title +"BY" +this.author

     }

     set title(title  ){
        this._title = title

     }

     get title(){
        return   this._title
     }



}
//#####################################################################


var book1 = new Book("Harry Potter", "JK Rawling")


book1.readBook()

book1._title = " ABcd author"

book1.readBook()



} 

catch (error) {
      document.write(" encountered , Error cached error is :   " +error  )  
}


finally{

    h2d.innerHTML = " Code implementation completed ."  

}
