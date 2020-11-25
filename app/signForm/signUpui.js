const form = document.querySelector('#sign-up');

/* const username = document.querySelector('#username').value;
const email = document.querySelector('#email').value;
const pass = document.querySelector('#password').value;
const passConf = document.querySelector('#pass-conf').value;
const termService = document.querySelector('#terms-service').value; */

/* Swtich statement, if type checkbox, submit or other */

function handleInput(e) {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    const patterns = {
        username: /^[a-z\d]+$/i,
        password: /^[a-z\d]{8,20}$/i, //Need another to reconfirm that has at least a letter and a number
        email: /^([\w-\.]+)@([a-z0-9-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/,
        get passConf() {
            const pass = form.querySelector('#password');
            const conf = new RegExp(pass.value);
            return conf;
        }
    };

    inputs.forEach(input => {
        /* console.log(input.type); */
        /* console.log(patterns[input.id].test(input.value)); */
        const err = document.querySelector(`.error.${input.id}`);
        err.style.display = 'none';

        switch (input.type) {
            case 'submit':
                break;
            case 'checkbox':
                if(!input.checked) {
                    err.style.display = 'block';
                }; 
                break;
            default:
                if(!patterns[input.id].test(input.value)) {
                    err.style.display = 'block';
                };
        };
    });
    
};

form.addEventListener('submit', (e) => handleInput(e));
