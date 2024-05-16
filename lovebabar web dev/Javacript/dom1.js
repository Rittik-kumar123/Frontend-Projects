//DOM -> Document Object Model
//BOM -> Browser Object Model

//lec-2

//Browser Events-> events,respond,data stored in event,stop an event,lifecycle of event.
//moniterevent()->let us see different events going on the website whenever we are visit our site.
//to stop any moniterevent we write unmoniterevent();.

//interface-> Blueprint
//Eventtarget interface-> interface implented by an object that can receive event and may have listener for them.
//3 method Eventtarget->add eventlistner(),remove eventlistner(), dispatch event()
//Nodes interface -> child of event target
//Elements interface -> child of node.

//pseudo code-> <event target>.addlistner(<event-to-listen-for>,<functin-to-run-when-event-happened>);
//event target-> components such as-> document,p,div,article etc.
//event type-> click,doubleclick,scroll etc.

// Type coersion-> where JS will try to convert the items being compared to same type.
// lose equality allow type coersion but Strict equality doesn't allow it.

//Remove eventlistner().-> same target,same type,same function.

//In the bellow code the remove property will not work because function calling is different object.
// document.addEventListener('click',function(){
    // console.log('hii');
// });
// document.removeEventListener('click',function(){
    // console.log('hii');
// });

//removeEventlistner will work as it has same function
// function party(){
    // console.log('hii');
// };
// document.addEventListener("click",party);
// document.removeEventListener('click',party);

//Phases 0f Event -> Capturing phase,At target phase,Bubbling Phase
//Capturring Phase->finding target ;
//At target phase-> reached target
//Bubbling phase -> return to the root parent. 
// const content = document.querySelector('#wrapper');
// content.addEventListener('click',function(event)
// {
    // console.log(event);
// })
//The Event Object :-> It print the event object
//Default Action-> Anchor tag has ability to open window by using Event.preventDefault() this we can prevent this property.
// let list=document.querySelectorAll('a');
// let x=list[2]
// x.addEventListener('click',function(event)
// {
    // event.preventDefault();
    // console.log("Hmm");
// })

//Avoid to many events
//we have created para using loops. 
// let mydiv=document.createElement('div');
// for(let i=1;i<=5;i++)
// {
    // let newelement=document.createElement('p');
    // newelement.textContent='Para'+i;
// 
    // newelement.addEventListener('click',function(event)
    // {
        // console.log("Para printed");
    // });
    // mydiv.appendChild(newelement);
// }

// document.body.appendChild(mydiv);

//optimization
// let mydiv=document.createElement('div');
// 
// function dick(event)
// {
    // console.log("Para printed" + event.target.textContent);
// }
// mydiv.addEventListener('click',dick);
// for(let i=1;i<=5;i++)
// {
    // let newelement=document.createElement('p');
    // newelement.textContent='Para'+i;
// 
    // mydiv.appendChild(newelement);
// }
// 
// document.body.appendChild(mydiv);


let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event)
{
    if(event.target.nodeName == 'SPAN')
    {
        console.log('Span pr click kiya'+ event.target.textContent);
    }
});

