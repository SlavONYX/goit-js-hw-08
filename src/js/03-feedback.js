import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

emailInput.addEventListener('input', throttle(updateFormState, 500));
messageInput.addEventListener('input', throttle(updateFormState, 500));

form.addEventListener('submit', handleFormSubmit);


const savedState = localStorage.getItem('feedback-form-state');
if (savedState) {
  const state = JSON.parse(savedState);
  emailInput.value = state.email;
  messageInput.value = state.message;
}

function updateFormState(event) {
  const email = emailInput.value;
  const message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

function handleFormSubmit(event) {
    event.preventDefault();
    const email = emailInput.value;
    const message = messageInput.value;
    if (!email) {
     
      return;
    }
    console.log({ email, message });
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  }






