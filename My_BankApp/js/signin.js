let userName = document.getElementById('username');
let passWord = document.getElementById('password');

function saveData() {
    const user = {
        userName: userName.value,
        password: passWord.value
    }
    const formData = JSON.parse(localStorage.getItem('user')) || []

    let matchedUser = formData.filter(user => {
        return userName.value === user.username && password.value === user.password;
    })

    // if user exit take me to dashboard
    if (matchedUser.length) {
        localStorage.setItem('loginDetails', JSON.stringify(user))
        location.href = './dashbd.html'
    } else {
        alert('Invalid credentials');
    }

    // formData.push(user)
    // localStorage.setItem('loginDetails', JSON.stringify(user))
    // form.reset();


}

//reloader section
const loginButton = document.querySelector('.submit-btn')
const reloader = document.querySelector('.reloader')
loginButton.addEventListener('click', () => {
    setInterval(() => {
        reloader.style.display = 'block';
        location.href = './dashbd.html'
    });
});