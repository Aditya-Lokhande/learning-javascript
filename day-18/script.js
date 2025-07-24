let container=document.getElementById("container");
console.log(container);

//now below is queryselector

//in getelement by id and element by class dont need of # for id & . for class but in query selector it needed

let res=document.querySelector(".container");
console.log(res)

//now for id selector


let res1=document.querySelector("#class");
console.log(res1)

// now is  innertexr it change the line and anything write in specific div 
let res3=document.getElementsByClassName("text")
res3.innertext=this is a inner text change my inner text
console.log(res3)