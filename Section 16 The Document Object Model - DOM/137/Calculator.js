

var num1 = window.prompt(" Enter first number ")
var num2 = window.prompt("Enter your second number")

// result = num1 + num2


function add (num1 , num2  )
{
    return num1 + num2;

}



function multiply (num1 , num2  )
{
    return num1 * num2;

}






function calculator(num1, num2, operator){

    return operator (num1, num2) ;

}




    
// alert( " the sum is " + result  ) 

result = calculator(parseFloat(num1), parseFloat(num2),add)
alert( " calling calculator the sum is " +result )
result = calculator(num1, num2,  multiply)
alert( " calling calculator the multiplying: " +result) 


