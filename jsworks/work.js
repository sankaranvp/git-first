const job = [
    {
        id: 1,
        jobno: "AE-001",
        status: 1,
        invdet: null
    },
    {
        id: 2,
        jobno: "AE-002",
        status: 4,
        invdet: [
        {
            invid: 1,
            invno: "CI/AE-001",
            invdate: "2020-11-10"
        } ]
    },
    {
        id: 3,
        jobno: "AE-003",
        status: 2,
        invdet: null
    },
    {
        id: 4,
        jobno: "AE-004",
        status: 1,
        invdet: null
    },
    {
        id: 5,
        jobno: "AE-005",
        status: 3,
        invdet: [
        {
            invid: 2,
            invno: "CI/AE-002",
            invdate: "2020-11-12"
        } ]
    }
];

/*************************************************************************************/
// foreach with arrow fn
let feres  = [];
let feres1 = [];
job.forEach((val,index,arr)=>(val.invdet == null)?feres.push(val):feres1.push(val));
//console.log(feres);
//console.log(feres1);

/*************************************************************************************/

// map with arrow fn
const mapres = job.map((val, index, arr)=>(val.invdet!=null)?val:null);
//console.log(mapres);

/*************************************************************************************/

// filter with arrow fn
const fltres = job.filter((val, index, arr)=>val.invdet!=null);
console.log(fltres);

/*************************************************************************************/

// find with arrow fn
const findres = job.find((val, index, arr)=>val.invdet!=null);
console.log(findres);

/*************************************************************************************/