function greetuser () {
    let username = "Kyle" ;
    let greeting = `Hello ,${username}`;
    console.log(greeting)
    document.getElementById("output").innerHTML=greeting
}

greetuser ()

function changeText () {
    document.getElementById("message").innerText = "Hello, World!";
  }

changeText ()
 

function addNumbers () {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let sum = num1 + num2;
    document.getElementById('result').textContent = `Result =  ${sum}`;
}

addNumbers ()

// Question #4
function updateTitle () {
    let newTitle = document.getElementById('inputField').value;
    document.getElementById('title').textContent = newTitle;
}

updateTitle ()

// Question #5
function concatenateStrings() {
    let str1 = document.getElementById('string1').value;
    let str2 = document.getElementById('string2').value;
    let result = str1 + str2;
    document.getElementById('combinedText').textContent = result;
}

// Question #6
let button = document.getElementById('changeBackgroundButton');
let colorBox = document.getElementById('colorBox');

button.addEventListener('click', () => {
    colorBox.style.backgroundColor = 'blue';
});