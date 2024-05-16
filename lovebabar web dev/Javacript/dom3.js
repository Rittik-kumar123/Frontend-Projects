// //Performance
// //1. Measure Speed of code
// //2. how to write efficient and performing code
// //3. Event loop

// //performance.now()->standard way to know how long your codes takes to run.
// //adding 10 para
// const t1=performance.now();
// for(let i=1;i<=10;i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent="This is para"+i;

//     document.body.appendChild(newElement);
// }
// const t2=performance.now();
// console.log("This took"+ (t2-t1) + "ms");

// //optimize

// const t3=performance.now();
// let myDiv = document.createElement('p');

// for(let i=1;i<=10;i++)
// {
//     let myEle= document.createElement('p');
//     myEle.textContent="This is para"+i;
//     myDiv.appendChild(myEle);
// }

// document.body.appendChild(myDiv);
// const t4=performance.now();
// console.log("This took"+ (t4-t3) + "ms");

// //Reflow-> continuously updating the element  in a tree.
// //repaint -> with updation we are going to print it simultaneously.
// //Fragmentation-> method solve the problem of Reflow and Repaint.

// const t5=performance.now();
// let fragment = document.createDocumentFragment();
// for(let i=1;i<=10;i++)
// {
//     let newEle=document.createElement('p');
//     newEle.textContent="This para"+i;

//     fragment.appendChild(newEle);
// }
// document.body.appendChild(fragment);
// const t6=performance.now();
// console.log("This took"+ (t6-t5) + "ms");

// //Call Stack-> single threaded lang->JS-> at a time only one program can run.

// function addpara()
// {
//     let para=document.createElement('p');
//     para.textContent="JS is good";
//     document.body.appendChild(para);
// }

// function newpara()
// {
//     let para=document.createElement('p');
//     para.textContent="JS is not good";
//     document.body.appendChild(para);
// }

// addpara();
// newpara();
// //Observations
// //1. Event loop->Philip Robert

// //Async code-> depend on JS event loop.,
// //Handling is done by browser.

//By this we can perform the function after 10 or any number that u give as a input.
//But it is the minimum time that func take to run maximum it can take more than assisgn time.
//whenever we are trying to defer something until the stack is clear    
// setTimeout(function()
// {
    // console.log("Hey");
// },10000);





