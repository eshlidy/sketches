const myForm = document.querySelector('.myForm')
myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("Вы успешно вошли в аккаунт, добро пожаловать ");
});