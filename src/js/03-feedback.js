import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
let newMessage = {
  email: '',
  message: '',
};

if (localStorage.getItem('feedbackFormState')) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedbackFormState')
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
  localStorage.setItem('feedbackFormState', JSON.stringify(newMessage));
}

function cleanForm(event) {
  event.preventDefault();
  if (newMessage.email && newMessage.message) {
    console.log(newMessage);
    localStorage.removeItem('feedbackFormState');
    form.reset(); 
    newMessage = { email: '', message: '' };
  } else {
    alert('Будь ласка, заповніть всі поля перед відправленням форми.');
  }
}
