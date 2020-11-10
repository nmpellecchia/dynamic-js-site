const form = document.querySelector('#sign-up');
const username = document.querySelector('#username').value;
const email = document.querySelector('#email').value;
const pass = document.querySelector('#pass').value;
const passConf = document.querySelector('#pass-conf').value;
const termService = document.querySelector('#terms-service').value;

/* If input selected is != conditions of [input.ClassName], alert the user */

function handleInput(e) {
    e.preventDefault();
    
    console.log(`${username.value == test}`);
};

const test = /[a-z]/;
console.log(`${test.test(e.target.value)}`)

form.addEventListener('submit', (e) => handleInput(e));
