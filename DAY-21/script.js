let date=new Date();
console.log(date);

// if i want to year

console.log(date.getFullYear());

//same for month

let months=["january","february","march","april","may","june","july","august","september","october","november","december"]
console.log(months[date.getMonth()]);

//same for date

console.log(date.getDate());

//same for day

let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
console.log(days[date.getDay()]);

//same for hours

console.log(date.getHours());

//same for minutes

console.log(date.getMinutes());

//same for seconds

console.log(date.getSeconds());