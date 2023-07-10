import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


const LS_KEY = "feedback-form-state";
const userData = {};
const { email, message } = form.elements;
pupulateForm();

function onFormInput(event) {
    userData[event.target.name] = event.target.value;
    localStorage.setItem(LS_KEY, JSON.stringify(userData));
};

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LS_KEY);
    console.log(userData);
};

function pupulateForm() {
    const savedData = JSON.parse(localStorage.getItem(LS_KEY));
    console.log(savedData);
    if(savedData){
        email.value = savedData.email;
        message.value = savedData.message;
    };
};
