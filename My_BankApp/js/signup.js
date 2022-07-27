let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let eMail = document.getElementById('mail');
let userName = document.getElementById('username');
let password = document.getElementById('password');
let signupButton = document.querySelector('.submit-btn')

// accNum generation
function generateAccNum() {
    return Math.floor(Math.random() * 10000000000);
}

function saveData() {
    if (!validate) {
        alert('enter all fields')
        return;
    }
    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: eMail.value,
        username: userName.value,
        password: password.value,
        amount: 0,
        accNum: generateAccNum()
    }

    const formData = JSON.parse(localStorage.getItem('user')) || []
    formData.push(user)
    localStorage.setItem('user', JSON.stringify(formData))
    alert('Registration completed')
    location.href = './signin.html';
    firstName.value = '';
    lastName.value = '';
    eMail.value = '';
    userName.value = '';
    password.value = '';
    firstNameError.innerHTML = '';
}
// saveData()
signupButton.addEventListener('click', saveData)



function validate() {
    firstName.addEventListener('keyup', () => {
        if (firstName.value.length == 0) {
            alert('Please fill out the field')
        }
    })
}
validate()


lastName.addEventListener('keyup', () => {
    if (firstName.value.length == 0) {
        alert('Please fill out the field')
    }
})

eMail.addEventListener('keyup', () => {
    if (eMail.value.length == 0) {
        alert('Please fill out the field')
    }
})
userName.addEventListener('keyup', () => {
    if (userName.value.length == 0) {
        alert('Please fill out the field')
    }
})
password.addEventListener('keyup', () => {
    if (password.value.length == 0) {
        alert('Please fill out the field')
    }
})



// validation section
let firstNameError = document.getElementById('firstn-error');
let lastNameError = document.getElementById('lastn-error');
let emailError = document.getElementById('email-error');
let usernameError = document.getElementById('username-error');
let passwordError = document.getElementById('password-error');
let buttonError = document.getElementById('submit-error');

function validateName() {
    const fName = document.getElementById('firstname').value;

    if (fName.length == 0) {
        firstNameError.innerHTML = 'Name is required';
        return false;
    } else {
        firstNameError.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';
        return true;
    }
}

//reloader section
const reloader = document.querySelector('.reloader')
signupButton.addEventListener('click', () => {
    setInterval(() => {
        reloader.style.display = 'block';
        location.href = '../signin.html'
    }, );
})