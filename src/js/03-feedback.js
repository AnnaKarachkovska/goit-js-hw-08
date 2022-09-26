import throttle from 'lodash.throttle';

const form = document.querySelector('form')
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const feedbackForm = {
    email: '',
    message: '',
};

form.addEventListener('input', throttle(saveToLs, 500))

function saveToLs() {
    feedbackForm.email = input.value;
    feedbackForm.message = textarea.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackForm));
}

const lsForm = JSON.parse(localStorage.getItem("feedback-form-state")) || feedbackForm;

if (!!lsForm.email || !!lsForm.message) {
  input.value = lsForm.email;
  textarea.value = lsForm.message;
}

form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
    ev.preventDefault();

    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

    ev.target.reset();
    localStorage.clear();
};