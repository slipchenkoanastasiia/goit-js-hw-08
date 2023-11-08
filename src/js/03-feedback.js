import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = "feedback-form-state";

function saveFormState() {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function loadFormState() {
  const savedState = localStorage.getItem(storageKey);
  if (savedState) {
    const state = JSON.parse(savedState);
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  if (!emailInput.value || !messageInput.value) {
    alert('Будь ласка, заповніть всі поля форми');
    return;
  }

  localStorage.removeItem(storageKey);
  console.log("Form submitted with data:", {
    email: emailInput.value,
    message: messageInput.value,
  });
  form.reset();
}

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);

loadFormState();