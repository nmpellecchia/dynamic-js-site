export function generateSignUp() {
    const signUpWrapper = document.createElement('div');
    const signUpForm = document.createElement('form');
    signUpForm.id = 'sign-up';
    signUpWrapper.classList.add('sign-up-wrapper');

    signUpForm.innerHTML = `
        <h1>Sign Up for free</h1>
        
        <div class="sign-up-input">
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Only one word" />
            <p class="error">Username must be one word and can't contain symbols</p>
        </div>
        <div class="sign-up-input">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="Your email" />
            <p class="error">Email address is incorrect</p>
        </div>
        <div class="sign-up-input">
            <label for="pass">Password</label>
            <input type="password" id="pass" placeholder="At least 8 characters"/>
            <p class="error">Password has to be between 8 and 20 characters and contain at least one number</p>
        </div>
        <div class="sign-up-input">
            <label for="pass-conf">Confirm Password</label>
            <input type="password" id="pass-conf" placeholder="Retype password" />
            <p class="error">The passwords don't match</p>
        </div>
        <div class="sign-up-input terms">
            <input type="checkbox" id="terms-service"/>
            <label for="terms-service"> I accept the terms and conditions </label>
            <p class="error">You need to accept the terms of service to continue</p>
        </div>
        <div class="sign-up-input">
            <input type="submit" value="Sign Up"/>
        </div>
    `;

    signUpWrapper.appendChild(signUpForm);
    document.body.appendChild(signUpWrapper);
};

