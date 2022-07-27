// let menu = document.querySelector('#menu_bar');
// let navbar = document.querySelector('.navbar');
// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// };
// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

// document.querySelector('#close').onclick = () => {
//     document.querySelector('').classList.remove('active');
// }




// form function

// const firstName = document.querySelector('#first-name');
// const lastName = document.querySelector('#last-name');
// const eMail = document.querySelector('#mail');
// const userName = document.querySelector('#username');
// const password = document.querySelector('#password');
// const submitButton = document.querySelector('.submit-btn');

// const user = {
//     firstName: firstName.value,
//     lastName: lastName.value,
//     email: eMail.value,
//     username: userName.value,
//     password: password.value,
//     // amount: 0

// }

// function storeUserData() {
//     const userData = JSON.parse(localStorage.getItem('user')) || [];
//     userData.push(user);
//     localStorage.setItem('user', JSON.stringify(userData));
// }

// submitButton.addEventListener("click", () => {
//     storeUserData()
// })



// hamburger section
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('nav');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}