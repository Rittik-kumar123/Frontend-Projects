// // Object creation
// //In JS Function is also a object.

// let rectangle={
//     length: 1, // attributes or properties
//     breadth: 1,

//     // adding function and behaviour.
//     //function do unique task either printing or scaning.
//     //using dot operator we can call any method or behaviour of object.
//     draw: function()
//     {
//         console.log('let start');
//     }
// };

// // factory function.
// // cammelcase method used to write the variables name.
// function createRectangle(len,bre) {

//     return rectangle={
//         length: len, 
//         breadth: bre,
    
//         draw: function()
//         {
//             console.log('let start');
//         }
//     };

// }

// let rectangleobj1 = createRectangle(5,4);
// let rectangleobj2 = createRectangle(2,3);

// // constructor function ->Pascal notation -> first letter of every word is capital.
//  function Rectangle(len,bre) {
//     this.length=len;    //this refer to current object we are using.
//     this.breadth=bre;
//     this.draw = function()
//     {
//         console.log('This is rectangle');
//     }                            
//  }

//  let recobj1 = new Rectangle(5,2);

// recobj1.color='Yellow';//dynamic addition of properties.
// console.log(recobj1);

// delete recobj1.color;//deletion of property.
// console.log(recobj1); 

//for-in 
// let rectangle={
    // length:2,
    // breadth:4
// };

// for(let key in rectangle ){
    // key are reflected through key.
    // to get the values in a object we use square operator instead of dot operator.
    // console.log(key,rectangle[key]);
// }

//for-of
// for(let key of Object.entries(rectangle))//object.entries is a hack to itterate over rectangle
// {
    // console.log(key)
// }

// if('color' in rectangle)
// {
    // console.log('Yes');
// }
// else{
    // console.log('no');
// }

//clonning

let src={a:10,b:20,c:30};
let src2={val:40};
// let dst={};

//1-method->iteration.

// for(key in src)
// {
    // dst[key]=src[key];
// }
 
// for(key in dst)
// {
    // console.log(dst[key]);
// }

//2-method-> assign we can store multiple object using assign function.

// let dst=Object.assign({},src,src2);
// console.log(dst);

//3-method->spread
// let dst={...src};
// console.log(dst);
// 
// src.a++;
// console.log(dst);







