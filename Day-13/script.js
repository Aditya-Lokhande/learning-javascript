//if we want only keys in object

const details={
    name:"Aditya",
    age:18,
    edu:"bcs"
}

console.log(Object.keys(details));

//if we want only values in object

console.log(Object.values(details));


//if we want entries in object

console.log(Object.entries(details))

// now method of Freeze

Object.freeze(details);

console.log(details);

//for of method 
//syntax:- for(let i of array_name)

//ex,

let colors=["red","green","blue"]

for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}

for(let i of colors){
    console.log(i);
}

//when we use array then use for of method
//when we use object then use for in method

//for in
//syntax:-for(let i in object_name)

//ex.

let brands={
    oppo:"mobile",
    dell:"laptop",
    samsung:"mobile",
    apple:"laptop"
}

for(let i in brands){
    console.log(i);


}


