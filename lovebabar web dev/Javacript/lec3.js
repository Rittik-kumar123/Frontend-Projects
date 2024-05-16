// //Inbuilt_functions->Date time,->math etc.
// //String
// //Template Literal. we use back tick notation to use it.


// console.log('Hello Jee');

// let nameLast='Babbar';

// let firstName= new String('love');

// let message=
// `Hell0 rittik
//  I am 
//  ${nameLast}.`;  // using $(Lastname) we dynamically allocate the name.
//  console.log(message);

// let date= new Date();
// console.log(date);

//Arrays
//creation
// let num=[1,2,3,4,5,6,7];
// console.log(num);

// //Insertion element in array
// //at end
// num.push(9);
// console.log(num);

// //at begin
// num.unshift(0);
// console.log(num);

// //at mid
// num.splice(2,0,'a','b');
// console.log(num);

// //Searching
// console.log(num);

// //checking index of element in array.
// //if number is not present then it print index value -1.
// console.log(num.indexOf('a'));


//Reference type object-> use call back function(when one function depend on another function output)
// let courses=[
//     {no:1, naam:'Rittik'},
//     {no:2, naam:'Kumar'},
// ];
// console.log(courses);

//finding element
// let course=cources.find(function(cource){
    // return cource.naam ==='Rittik';
// });
// console.log(course);
//Arrow function
// let x=courses.find(x => x.naam === 'Kumar');
// console.log(x);

//Removing Element
//end
// num.pop();
// console.log(num);
// begin
// num.shift();
// console.log(num);
// mid
// num.splice(2,1);
// console.log(num);

//Emptying in array
//num=[];//in this values has'nt be deleted we only change the address of num to empty;
//1->method
// num.length=0;
// console.log(num);
//2->method
// num.splice(0,num.length);
// console.log(num);

//combining and slicing of an array
//concatination
let num1=[1,2,3];
let num2=[4,5,6];
// let combine=num1.concat(num2);
// console.log(combine);
// slicing
// let sliced=combine.slice(2,4);
// console.log(sliced);

//concatenate using-> Spread Operator
let combined=[...num1,...num2];
console.log(combined);

//iterate using for-of operator
// for(i of combined){
    // console.log(i);
// }

//using foreach operator
// combined.forEach(function(numb)
// {
    // console.log(numb);
// });

//Joining Arrays
//Split method -> used in string
//Sorting method->sort function
//Filtering Arrays
//Mapping Arrays-> maps

let n=[3,4,5,6];

// let x=n.map(function(value){
    // return 'std no'+' '+value;
// })
//Arrow function
// let x=n.map(value => 'std no'+' '+value);
// console.log(x);

//making object from array element.
// let item = n.map(function(num){
    // return {value:num};
// })
// console.log(item);

//Lec -> 4
//Function-> A block of code that fulfils a specific task
//Uses-> 1. Reusebility. 

//create

run();

function run(){//keyword + func name + parameters
    console.log("Running");//func body.
}

//run();//revoking or calling we can put it top of funtion declaration

let stand = function walk(){
    console.log("Walking");
}

//we can't call this by walk().cause stand has been assigned to this function.
stand();//we can't call it before declaration because here we are doing function assinment not declaring.
let jump = stand;
jump();

//Annonymous function assignment as the function name is not given.
let stand1 = function(){
    console.log("Walking");
}
stand1();

//Hoisting -> Process of moving function declaration on top of the file. Done automatically by JS engine.
//Here the remaing values are stored in arguments with a and b also.
function sum(a,b){
    total=0;
    for(value of arguments)
    {
        total=total+value;
    }
    return total;
}

let ans=sum(1,2,3,4,5);
console.log(ans);

//Rest operator-> we can make an array of the values passed in argument.

function sum(num,value,...args)
{
    console.log(num);
    console.log(args);
}
sum(1,2,3,4,5);

//default Parameter in function.

//Getter Setter
//Getter -> access properties
//Setter -> change or mutate properties
// let person={
    // fname:'Rahul',
    // lname:'Kumar',
    // get fullname()
    // {
        // return `${person.fname} ${person.lname}`;
    // },
    // set fullname(value)
    // {
        // if(typeof value == String)
        // {
            // throw new Error("You don't have sent a string.");
        // }
        // let parts=value.split(" ");
        // this.fname = parts[0];
        // this.lname = parts[1];
    // }
// };
//  console.log(person.fullname);
//  person.fullname = "Rittik Kumar";

//  console.log(person.fullname);

//Error handling
//Try and catch
// try{
    // person.fullname="Rittik Kumar";
// }
// catch(e)
// {
    // alert(e);
// }
// console.log(person.fullname);

//Redusing an array
a=[1,2,3,4];

let totalSum = a.reduce((a,i)=>a+i,0);
console.log(totalSum);
