import { inputList } from './SignUpData.js';

export function generateSignUp() {
    const signUpWrapper = document.createElement('div');
    const signUpForm = document.createElement('form');
    signUpForm.id = 'sign-up';
    signUpWrapper.classList.add('sign-up-wrapper');

    signUpForm.innerHTML = `<h1>Register for free</h1>`;
    for(let i = 0; i < inputList.length; i++) {
        signUpForm.appendChild(generateInputs(inputList[i]));
    };

    signUpWrapper.appendChild(signUpForm);
    document.body.appendChild(signUpWrapper);
};

function generateInputs(test) {
    const inputWrapper = document.createElement('div');
    inputWrapper.classList.add(test.className);

    
    switch (test.type) {
        case 'checkbox':
            inputWrapper.innerHTML = `
            <input type="${test.type}" id="${test.field}" />
            <label for=${test.field}>${test.labelTxt}</label>
            ${test.error}
        `;
        break;
        case 'submit':
            inputWrapper.innerHTML = `
            <input type="${test.type}" id="${test.field}" value="${test.labelTxt}" />
        `;
        break;
        default:
            inputWrapper.innerHTML = `
        <label for=${test.field}>${test.labelTxt}</label>
        <input type="${test.type}" id="${test.field}" />
        ${test.error}
    `;
    };
    

    return inputWrapper;
};
