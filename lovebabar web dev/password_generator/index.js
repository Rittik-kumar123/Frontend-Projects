//for using custom attribute we have to write that inside a square breackett inside queryselector function.
const inputslider=document.querySelector("[data-lengthSlider]");
const lengthDisplay=document.querySelector("[data-lengthNumber]");

const passwordDisplay=document.querySelector("[data-passwordDisplay]");
const copyBtn=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]");
const uppercaseCheck=document.querySelector("#uppercase");
const lowercaseCheck=document.querySelector("#lowercase");
const numbersCheck=document.querySelector("#numbers");
const symbolsCheck=document.querySelector("#symbols");
const indicator=document.querySelector("[data-indicator]");
const generateBtn=document.querySelector(".generateButton");
const allCheckBox=document.querySelectorAll("input[type=checkbox]");
const symbols='`~!@#$%^&*()_+-:;.,?';

let password ="";
let passwordLength=10;//handle slider ke UI pe reflect karwata hai
let checkCount=0;
handleSlider();
// set strength color to gray 
setIndicator("#ccc");

//set password length
function handleSlider(){
    inputslider.value = passwordLength; 
    lengthDisplay.innerText = passwordLength;
    const min=inputslider.min;
    console.log(passwordLength)
    console.log(min);
    const max=inputslider.max;
    console.log(max);
    inputslider.style.backgroundSize = ((passwordLength-min)*100/(max-min))  + '% 100%';
}

function setIndicator(color)
{
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow=`0px 0px 12px 1px ${color}`;
    //shadow
}

function getRndInteger(min,max){
    return Math.floor(Math.random()* (max-min)) + min;
}

function generateRandomInteger()
{
    return getRndInteger(0,9);
}

function generateLowerCase()
{
    return String.fromCharCode(getRndInteger(97,123));
}

function generateUpperCase()
{
    //console.log(symbols.length);
    return String.fromCharCode(getRndInteger(65,91));
}
//console.log(symbols.length);
function generateSymbol()
{
    //console.log(symbols.length);
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}
//console.log(symbols.length);
function calcStrength(){
    let hasUpper= false;
    let hasLower= false;
    let hasNum= false;
    let hasSym= false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8 )
    {
        setIndicator("#ff0");
    }
    else if((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >=6)
    {
        setIndicator("#0f0");
    }
    else{
        setIndicator("#f00"); 
    }
}
//console.log(symbols.length);
async function copyContent()
{
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    }
    catch(e)
    {
        copyMsg.innerText = "Failed";
    }
    //To make copy wala image visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);
}
//console.log(symbols.length);
function shufflePassword(array)
{
    for(let i=array.length-1; i>0;i--)
    {
        const j= Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[j]=array[i];
        array[i]=temp;

    }
    let str="";
    array.forEach((el)=> (str += el));
    return str;
}

function handleCheckBoxChange()
{
    checkCount=0;
    allCheckBox.forEach((checkBox)=>
    {
        if(checkBox.checked)
                checkCount++;
    })

    //Special Condition
    if(passwordLength<checkCount && checkCount>0)
    {
         //console.log(passwordLength);
        passwordLength=checkCount;
        handleSlider();
        //console.log(passwordLength);
    }
}

allCheckBox.forEach((checkBox)=>{
    checkBox.addEventListener('change',handleCheckBoxChange);
})

inputslider.addEventListener('input',(e) =>
{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>
{
    if(passwordDisplay.value)
    {
        copyContent();
    }
})

generateBtn.addEventListener('click',()=>
{
    //none of the checkbox are selected
    if(checkCount == 0) 
    {
        password="";
        passwordDisplay.value=password;
        calcStrength();
        return;
    }
    
    if(passwordLength < checkCount)
    {
        passwordLength = checkCount;
        handleSlider();
    }

    //Let's start the journey to find the new password
    console.log("Journey Starts");

    //remove old password
    password="";

    //let's put the stuff mention by checkbox

    // if(uppercaseCheck.checked)
    // {
        // password += generateUpperCase();
    // }
    // if(lowercaseCheck.checked)
    // {
        // password += generateLowerCase();
    // }
    // if(symbolsCheck.checked)
    // {
        // password += generateSymbol();
    // }
    // if(numbersCheck.checked)
    // {
        // password += generateRandomInteger();
    // }

    let funcArr=[];
    if(uppercaseCheck.checked)
    {
        funcArr.push(generateUpperCase);
    }
    if(lowercaseCheck.checked)
    {
       funcArr.push(generateLowerCase);
    }   
    if(symbolsCheck.checked)
    {
        funcArr.push(generateSymbol);
    }
    if(numbersCheck.checked)
    {
        funcArr.push(generateRandomInteger);
    }
    //compulsory
    console.log("Journey End");
    for(let i=0;i<funcArr.length;i++)
    {
        password += funcArr[i]();
    }
    console.log("Compulsory addition done");


    //remaining addition
    for(let i=0;i<passwordLength - funcArr.length;i++)
    {
        let randIndex=getRndInteger(0,funcArr.length);
        password += funcArr[randIndex]();
    }
    console.log("REmaining adiition done");
    //suffle the password
    password = shufflePassword(Array.from(password));

    //show in UI
    passwordDisplay.value = password;
    //calculate Strength
    calcStrength();
});
