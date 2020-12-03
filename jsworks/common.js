/* Usual function  
          & 
Some ES6 methodologies like 
                      
A. let & const variables, 
B. Arrow function, 
C. Spread Operator, 
D. Rest Parameter,
E. Generator function,
F. Immediately Invoked Function Expression (IIFE),
G. ES6 Multidimensional Arrays
*/

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

//A] variable declaration using let & const
        let az   = 20    
        const dc = "Ram"

        console.log(dc +" is " + az + "years old");

//B] Arrow functions

    //1) Generaly use this

        myFunc2=()=>{
            let n3 = 50;
            let n4 = 40;
            let sum2 = n3 + n4;
            return sum2;
        }
        
        console.log( myFunc2() );

    //2) Only one line
        var show = () => console.log("Hello World");  
        show(); 

    //3) Only one line without Parentheses

        myFunc3=c=>c*2;
        
        console.log( myFunc3(25) );   

//C] Spread Operator

    //1) Constructing array literal, Concatenating arrays
        let colors = ['Red', 'Yellow'];  
        let newColors = [...colors, 'Violet', 'Orange', 'Green'];  
        console.log(newColors); 

    //2) Copying an array
        let colors2 = ['Red', 'Yellow'];  
        let newColors2 = [...colors2];  
        console.log(newColors2);  

//D] Rest Parameter [3 dots -> ...]
        addVal=(...args)=>{
            let sum = 0;  
            for (let i of args) {  
                sum += i;  
            }  
            console.log("Sum = "+sum); 
        }
        addVal(10, 20, 30, 50);

//E] ES6 Generators (Generator Functions) [Function with asterisk (*) & yield(return)]
        function* gen()  
        {  
            yield 100;  
            yield;  
            yield 200;  
        }  
        // Calling the Generator Function  
        var mygen = gen();  
        console.log(mygen.next().value);  
        console.log(mygen.next().value);  
        console.log(mygen.next().value); 
        
//F] Immediately Invoked Function Expression (IIFE)
        (function() { console.log("Immediately Invoked Function Expression"); })(); 
        
        (function (x, y, z) {  
            console.log(x+'-'+y+'-'+z); 
          })(100, 200, 300);  

//G] ES6 Multidimensional Arrays
        var multi = [[2,3],[4,5]]    
        console.log(multi[0][0]+'-'+multi[0][1]+'-'+multi[1][0]+'-'+multi[1][0]) 
        
        
/*************************************************************************************************************/

//Event example

let bt = document.getElementById("btn");

bt.addEventListener("click", function(){
    alert("Clicked!!");
})
