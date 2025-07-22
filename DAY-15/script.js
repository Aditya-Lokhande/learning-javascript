//types of function

//sum of numbers without function name

let sum=function(a,b,c){
    console.log(a+b+c);

}
sum(20,45,50)

//even or odd function
let evenoroddnumber=function(a){
    if(a%2==0){
        console.log("even");
    }
    else
        console.log("odd")
}

let res1=evenoroddnumber(10)

let res2=evenoroddnumber(25)


//arrow function
 let arrow=()=>{
    console.log("arrow function");
 }

 //for sum 
 let addition=(a,b)=>{
    return(a+b)
 }
 console.log(addition(10,20));

 //for subtraction
 let subtraction=(a,b)=>{
    return(a-b)
 }
 console.log(subtraction(10,20));

 //for multiplication   
 let multi=(a,b)=>{
    return(a*b)

 }
 console.log(multi(10,20));

 //for division
 let div=(a,b)=>{
    return(a/b)

 }
 console.log(div(10,20));

//reverse function

let arr=[10,30,80,6,70]
const reversearr=()=>{
    return arr.reverse()

}
let res=reversearr(arr)
console.log(res)

//higher order function

let sub = (a,b)=>{
    console.log(a+b)

}

let operation =(anything)=>{
    sub(10,20)

}

operation(sub)







