//empty objrct//

let people ={}
console.log(people)


//details object//

// it contains my info

let details ={
    name:'Aditya',
    city:'shevgaon',
    age:18,
    bloodgroup:'b+'
};
console.log(details);

//here name,city,age,bloodgroup is key and opposite side called value


//IF i only want to print name then simply type

console.log(details.name);

//If i only want to print city then

console.log(details.city);

//If i only want to print age then

console.log(details.age);

//If i only want to print bloodgroup then

console.log(details.bloodgroup);

// we also type in this way

console.log(details['name']);

//it is apply for all keys

console.log(details['city']);

console.log(details['age']);

console.log(details['bloodgroup']);


//now we create object for other things as our choice like this

const car={
    brand:'Mahindra',
    Model:'Scorpio',
    Color:'Black',
    varient:['s','s11'], 
    price:['1700000','2200000']
};
console.log(car);

//same as upper side

console.log(car.brand);

console.log(car.Model);

console.log(car.Color);

console.log(car.varient);

console.log(car.price);

//if i want only s variend then simply type this

console.log(car.varient[0]);

//same for s11

console.log(car.varient[1]);

//because array index start from 0

//same for price

console.log(car.price[0]);

console.log(car.price[1]);

// if i want multiple car brands and this vechicals type this 

const brands =[{
    brands:'Mahindra',
    Model:'Scorpio',
    Colors:['Black','Everest-white','red','classic-gray'],
    varient:['s','s11'], 
    price:['1700000','2200000']

},
{
    brands:'Tata',
    model:'Harrier',
    Colors:['pebblr-gray','lunar-white','seaweed green','sunlit yellow','Ash gray','coral red','black'],
    varient:['Harrier smart','harrer smart[0]','harrier pure','harrier pure[0],harrier pure plus'],
    price:[1500000,1585000,1685000,1735000,1855000]
}];
console.log(brands);

console.log(brands[0]);

console.log(brands[1]);             
console.log(brands[0].brands);


// now we create an object that represent instagram user 


const insta_user=[{
    name:'Pratik Sakhare',
    username:'pratik____001_',
    following:[{
        name:'Aditya Lokhande',
        username:'mr_adi_lokhande'
    },
    {
        name:'Ajinath Game',
        username:'game_ajinath_96k'
    }]

}];
console.log(insta_user);



       

