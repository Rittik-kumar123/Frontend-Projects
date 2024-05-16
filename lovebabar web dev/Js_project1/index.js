const countvalue=document.querySelector('#counter');

const increment = () =>
{
    //get the value from UI
    let value = parseInt(countvalue.innerText);
    //Update the value
    value=value+1;
    //set the value onto UI
    countvalue.innerText = value;
}

const decrement = () =>
{
    //get the value from UI
    let value = parseInt(countvalue.innerText);
    //Update the value
    value=value-1;
    //set the value onto UI
    countvalue.innerText = value;
}