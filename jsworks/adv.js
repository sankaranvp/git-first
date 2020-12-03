/* Javascript advanced/latest use/concept */

// Variable Declaration
// Spread Operators
// Rest
// Arrow Functions
// High order methods : ForEach, Map, Filter, Reduce, Find, Sort
// ES10 Syntax
// DOM Selectors
// ES6 Generators
// IIFE
// ES6 MultiDim Array

//1] variable declaration using let & const
    let az   = 20    
    const dc = "Ram"

    console.log(dc +" is " + az + "years old");



//2) spread Operators
    // Object
        const student = {
            id: 0,
            name: "Ajith",
            age: 17
        };
        // Spread operator [ Use 3 dots "..." for this ]
        const stud1 = {...student};  // If it use directly like 'const stud1 = student;' then age 17 override by 19 in all sections.
        stud1.age = 19;              // To overcome that we use spread operator, so it take the copy of main object & use.
        console.log("Spread Operator :"); 
        console.log(stud1);
        console.log(student);


    // Array
        const arr0 = ["Arun", "Divya", "Suresh"];
        const arr1 = [29, 24, 32];
        // Spread operator [ Use 3 dots "..." for this ]
        const newarr  = [...arr0,...arr1];   // Merge array
        const newarr1 = [...arr0, "Shiju"];  // Push new value to array
        const newarr2  = [...arr0];   // Copying an array
        console.log(newarr);
        console.log(newarr1);
        console.log(newarr2);



//3) rest
    // Object
        const fruit = {
            id: 0,
            name: "Apple",
            rate: 70
        };
        //  Normal de-structure
        //const {id, name, rate} = fruit;
        //console.log(id, name, rate);

        // Using rest [ Use 3 dots "..." for rest of the content ]
        const {id, ...rest} = fruit;
        console.log(id, rest);

    // Use as parameter in fn
        addVal=(...args)=>{
            let sum = 0;  
            for (let i of args) {  
                sum += i;  
            }  
            console.log("Sum = "+sum); 
        }
        addVal(10, 20, 30, 50);



//4) arrow function

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

        
        
//5) forEach : allowed 3 args
    const team = [
        {
            id: 0,
            name: "Ajith",
            age: 26
        },
        {
            id: 1,
            name: "Binoy",
            age: 24
        },
        {
            id: 2,
            name: "Suresh",
            age: 26
        }
    ];

    // foreach with arrow fn
    team.forEach( (value, index, arr)=>console.log(value.name) );



//6) map : allowed 3 args
    const newTeam =  team.map( (value/*, index, arr*/)=> value.name ); // New array with names of players
    console.log(newTeam);



//7) filter : allowed 3 args
    const newTeam1 =  team.filter( (value/*, index, arr*/)=> value.age === 26 ); // New array of same age players
    console.log(newTeam1);



//8) reduce : allowed 4 args
    const numArr = [10, 25, 30, 5, 40, 30, 50];
    const tot =  numArr.reduce( (total, val/*, index, arr*/)=> total + val, 0 ); // New array of sum. 0 => means declare 'total=0'
    console.log(tot);



//9) find
    const findRes = team.find( (value)=> value.name === "Suresh" ); // find data related with suresh
    console.log(findRes);



//10) sort
    const nums   = [10, 4, 30, 5, 110, 60, 1200, 2];
    const sorted = nums.sort( (a, b)=> a - b );  // a-b : ascending, b-a:descending
    console.log(sorted);



//11) some ES10 Syntax

    //1) flat & Infinity
        const numsAr = [10, 25, [30, 2], 44, 60, [8, 82,[24, 90]], 75];
        const res = numsAr.flat(Infinity);  // All nested arrays converted to a single array
        console.log(res);

    //2) Optional chaining
        const compData = {        
            id: 1,
            name: "Google",
            place: "Newyork",
            branch: {
                bid: 1,
                bcountry: "India",
                bplace: "Mumbai"
            }
        };
        // Chaining (For this use :  '?.' )
        if(compData?.branch?.bid){
            console.log(compData.branch.bcountry);
        }



//12) DOM Selectors
    //1) querySelector & querySelectorAll  : For replace jQuery fns
        document.querySelector("#header1").innerHTML = "Hello, Welcome";  // By id

        const hd = document.querySelectorAll(".header"); // By class        
            hd[1].innerHTML = "Good Morning"; // effected to single
            hd.forEach( (data)=> (data.style.color = "#0000FF") ) // applicable to all



//13) ES6 Generators (Generator Functions) [Function with asterisk (*) & yield(return)]
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



//14) Immediately Invoked Function Expression (IIFE)
    (function() { console.log("Immediately Invoked Function Expression"); })(); 

    (function (x, y, z) {  
        console.log(x+'-'+y+'-'+z); 
    })(100, 200, 300);  



//15) ES6 Multidimensional Arrays
    var multi = [[2,3],[4,5]]    
    console.log(multi[0][0]+'-'+multi[0][1]+'-'+multi[1][0]+'-'+multi[1][0]) 



