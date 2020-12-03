/* Usual function & Event */
// Usual styles

//1) Old style
function myFunc(){
    let n1   = 120;
    let n2 = 100;
    let summ = n1 + n2;
    return summ;
}
fn = myFunc();
console.log(fn);

//2) function expression 
var myfun11 = function show() {  
    console.log("It is a Function Expression");     
}  

//3) Anonymous function 
var myfun22 = function () {  
    console.log("It is an Anonymous Function");     
}  

/***********************************************************************************************************/

//Event example

let bt = document.getElementById("btn");

bt.addEventListener("click", function(){
    alert("Clicked!!");
})
