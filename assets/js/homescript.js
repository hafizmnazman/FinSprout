const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const iconClose = document.querySelector('.icon-close');
const loginLink = document.querySelector('.login-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const registerLink = document.querySelector('.register-link');
const forgotLink = document.querySelector('.forgot-link');
const rememberLink = document.querySelector('.remember-link');
const verifyLink = document.querySelector('.verify-link');
const termsLink = document.querySelector('.terms-link');
const btnForgot = document.querySelector('.btn-forgot');
const btnVerify = document.querySelector('.btn-verify');
const btnReset = document.querySelector('.btn-reset');
const btnRegister = document.querySelector('.btn-register');
const btnQuiz = document.querySelector('.btn-quiz');
const btnQuiz2 = document.querySelector('.btn-quiz2');
const btnQuiz3 = document.querySelector('.btn-quiz3');
const btnQuiz4 = document.querySelector('.btn-quiz4');
const btnQuiz5 = document.querySelector('.btn-quiz5');
const btnQuiz6 = document.querySelector('.btn-quiz6');
const btnQuiz7 = document.querySelector('.btn-quiz7');
const btnQuiz8 = document.querySelector('.btn-quiz8');


loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

forgotLink.addEventListener('click', ()=> {
    wrapper.classList.add('active-forgot');
});

rememberLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active-forgot');
});

verifyLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active-verify');
});

termsLink.addEventListener('click', ()=> {
    wrapper.classList.add('active-terms');
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    body.classList.add('active-body');
});

btnForgot.addEventListener('click', ()=> {
    wrapper.classList.add('active-verify');
    wrapper.classList.remove('active-forgot');
});

btnVerify.addEventListener('click', ()=> {
    wrapper.classList.add('active-reset');
    wrapper.classList.remove('active-verify');
});

btnRegister.addEventListener('click', ()=> {
    wrapper.classList.add('active-quiz');
    wrapper.classList.remove('active');
});

btnQuiz.addEventListener('click', ()=> {
    wrapper.classList.add('active-quiz2');
    wrapper.classList.remove('active-quiz');
});

btnQuiz2.addEventListener('click', ()=> {
    wrapper.classList.add('active-quiz3');
    wrapper.classList.remove('active-quiz2');
});

btnQuiz3.addEventListener('click', ()=> {
    wrapper.classList.add('active-quiz4');
    wrapper.classList.remove('active-quiz3');
});

btnQuiz4.addEventListener('click', ()=> {
    wrapper.classList.add('active-quiz5');
    wrapper.classList.remove('active-quiz4');
});

btnQuiz5.addEventListener('click', ()=> {
    wrapper.classList.add('active-quiz6');
    wrapper.classList.remove('active-quiz5');
});

btnQuiz6.addEventListener('click', ()=> {
    wrapper.classList.add('active-quiz7');
    wrapper.classList.remove('active-quiz6');
});

btnQuiz7.addEventListener('click', ()=> {
    wrapper.classList.add('active-quiz8');
    wrapper.classList.remove('active-quiz7');
});

btnQuiz8.addEventListener('click', ()=> {
    wrapper.classList.add('active-result');
    wrapper.classList.remove('active-quiz8');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active-forgot');
    wrapper.classList.remove('active-verify');
    wrapper.classList.remove('active-reset');
    wrapper.classList.remove('active-terms');
    wrapper.classList.remove('active-quiz');
    wrapper.classList.remove('active-quiz2');
    wrapper.classList.remove('active-quiz3');
    wrapper.classList.remove('active-quiz4');
    wrapper.classList.remove('active-quiz5');
    wrapper.classList.remove('active-quiz6');
    wrapper.classList.remove('active-quiz7');
    wrapper.classList.remove('active-quiz8');
    wrapper.classList.remove('active-result');
    body.classList.remove('active-body');
});

function openFile() {
    window.open('index.html', '_self');
}
