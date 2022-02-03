/*
* Excercise 1
*
*/

const block=document.querySelector('#color-block')
block.addEventListener('click',changeColor)

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){  
    let colortext=document.querySelector('#color-name')
    //Write a condition determine what color it should be changed to
    if(colortext.innerHTML==='#F08080'){
        //change the background color using JS
        block.style.backgroundColor='#67cbf6'
        //Change the text of the color using the span id color-name
        colortext.innerHTML='#67cbf6'
    }
    else{
        //change the background color using JS
        block.style.backgroundColor='#F08080'
        //Change the text of the color using the span id color-name
        colortext.innerHTML='#F08080'
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

const converbtn=document.querySelector('#convertbtn')
converbtn.addEventListener('click',convertTemp)

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    let temp=document.querySelector('#f-input')
    //Calculate the temperature here
    let res=(temp.value-32)*5/9
    //Send the calculated temperature to HTML
    document.querySelector('#c-output').innerHTML=res
}


