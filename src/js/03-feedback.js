const LOCAL_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';



form.addEventListener('input',throttle(inputChange, 500));
form.addEventListener('submit',onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(LOCAL_KEY))
const {email, message} = form.elements
reloadPage();
function inputChange(event) {
    dataForm={
        email: email.value, massage: message.value
    }
    localStorage.setItem(LOCAL_KEY,JSON.stringify(dataForm));
}
function reloadPage() {
    if (dataForm){
        email.value = dataForm.email || '';
        message.value = dataForm.massage || '';

    }
}
function onFormSubmit(event) {
    event.preventDefault();
      console.log({email: email.value, message: message.value})
         if (email.value === "" || message.value === "") {
          return alert('Please fill in all the fields!');
         } 
         localStorage.removeItem(LOCAL_KEY);
         event.currentTarget.reset();
         dataForm={}
        }

