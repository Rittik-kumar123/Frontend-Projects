//Async code->set time,eventlistner
//API-> Application Programming Interface.

//get ,post, put call in API read it.

//Features of Async code:
//1.clear and concise
//2.better error handling
//3.Easier bugging

//Promise is given by async code to do the job wheather it will do it or not depends on circumstances.
//Promice has two parameter-> Resolve,Reject and Two Method-> then(),Catch()
//then()->Resolve->value
//Catch()->Reject->error

// let x=new Promise(function(resolve, reject)
// {
    // setTimeout(function()
    // {
        // console.log("Hey me");
    // },2000);
    // resolve(2001);//->We explicitly marking that the given function is resolved.
    // reject(new Error('Bhai Error a gya'));//We explicitly marked that the function is rejected by passing reason behind Rejection.
// });

// x.then((value)=>{console.log(value)},(error)=>{console.log("Receive An Error")});
//x.catch((error)=>{console.log("Receive An Error")});

// console.log("me");

//Async-await-> Special syntax used to work with promises chaining.
//Async func-> always returns promise.

// async function abcd()
// {
    // return "Hai";
// }

// async function utility() {
    // let delhiMausam= new Promise((resolve,reject)=>{
        // setTimeout(()=>{
            // resolve("Delhi is hot");
        // },10000);
    // });
    
    
    
    // let hydMausam= new Promise((resolve,reject)=>{
        // setTimeout(()=>{
            // resolve("Hyderabad is cool");
        // },5000);
    // });

    // let dm=await delhiMausam;
    // let hm=await hydMausam;
    // return [dm,hm];
// }

//Fetch API->we can send or retrieve data from server or network.It returns a promise.
//Closures


