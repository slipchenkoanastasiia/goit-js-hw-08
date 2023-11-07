import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const newMessage = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedback-form-state')) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  inputEmail.value = email;
  textareaMessage.value = message;
}

form.addEventListener('input', throttle(updateMessage, 500));

form.addEventListener('submit', cleanForm);

function updateMessage(event) {
  newMessage = {
    email: inputEmail.value,
    message: textareaMessage.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(newMessage));
}

function cleanForm(event) {
  event.preventDefault();
  if (newMessage.email && newMessage.message) {
    console.log(newMessage);
    localStorage.removeItem('feedback-form-state');
  }
  inputEmail.value = '';
  textareaMessage.value = '';
}
