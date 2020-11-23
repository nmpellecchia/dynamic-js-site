class Input {
    constructor(field, labelTxt, type, errorTxt) {
        this.className = 'sign-up-input';
        this.field = field,
        this.labelTxt = labelTxt,
        this.type = type,
        this.errorTxt = errorTxt,
        this.error = `<p class="error ${field}">${errorTxt}</p>`
    };
};

const usernameField = new Input('username', 'Username', 'text', "Username must be only one word and can't contain symbols.");
const emailField = new Input('email', 'Email Address', 'text', 'Email format not valid.');
const passwordField = new Input('password', 'Password', 'password', 'Password has to be between 8 and 20 characters');
const passwordConfirm = new Input('passConf', 'Confirm password', 'password', "Passwords don't match.");
const termsField = new Input('terms-service', 'I accept the terms and conditions.', 'checkbox', 'Accepting the terms of service is a requirement.');
const submitInput = new Input('', 'Sign Up', 'submit', '');

export const inputList = [usernameField, emailField, passwordField, passwordConfirm, termsField, submitInput];