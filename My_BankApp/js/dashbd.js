const formData = JSON.parse(localStorage.getItem('user')) || [];
const currentAmountBal = document.querySelector('.current-amount');

// selecting from  dom
const amountNumDashbd = document.querySelector('.acctnum');

// selecting fullname from dom
const fullName = document.querySelector('.loginname');

// selecting deposit input from dom
const depositAmt = document.querySelector('#Deposit');

// selecting deposit button from dom
const depositbutton = document.querySelector('.depositbtn');


// to get login details
const formDataDashboard = JSON.parse(localStorage.getItem('loginDetails'));

// selecting withdraw input from dom
const withdrawAmt = document.querySelector('#withdraw');

const withdrawButton = document.querySelector('.withdrawbtn')


// calling username transfer amount from dom
const transferAmount = document.querySelector('#transfer-amount');

// calling transfer button from dom
const transferButton = document.querySelector('.transferbtn');

// transfer function starts here
// calling username transfer input from dom
const recipientUsername = document.querySelector('#receiver-transfer-username')

//getting the current logged in user details
const currLoggedIn = JSON.parse(localStorage.getItem("signedIn"))



// to loop through formdata
for (let i = 0; i < formData.length; i++) {
    if (formDataDashboard.userName === formData[i].username) {
        currentAmountBal.innerText = `$${formData[i].amount}`

        // display account number
        amountNumDashbd.innerText = `Account No: ${formData[i].accNum}`;

        // display full name
        fullName.innerText = `Full Name: ${formData[i].firstName + ' ' + formData[i].lastName}`;

    }

}



//deposit function
// creating an object to store user actions on the dashboard
let doTransactions = {
    username: '',
    withdraw: 0,
    deposit: 0,
    transfer: 0,
    receiverName: '',
    senderName: '',
    receiverAcc: ''
}

// creating a function for deposit
function depositMoney() {
    let unMatchedUser = [];

    let depositAmount = Number(depositAmt.value);

    // to check
    if (!depositAmount || depositAmount < 1) {
        return;
    }

    let MatchedUser = formData.find((formData) => {
        return formDataDashboard.userName === formData.username;
    })

    formData.filter((formData) => {
        if (formDataDashboard.userName !== formData.username) {
            unMatchedUser.push(formData);
        }
    })

    if (MatchedUser) {
        let doTransactions = {
            username: MatchedUser.userName,
            withdraw: 0,
            deposit: depositAmount,
            transfer: 0,
            receiverName: '',
            senderName: '',
            receiverAcc: ''
        }
        const oldTransactions = JSON.parse(localStorage.getItem('deposit')) || []
        oldTransactions.push(doTransactions);
        localStorage.setItem('deposit', JSON.stringify(oldTransactions))
        MatchedUser.amount += depositAmount
        unMatchedUser.push(MatchedUser)

        localStorage.setItem('user', JSON.stringify(unMatchedUser))

        location.reload();
    }
}
//  button function
depositbutton.addEventListener('click', depositMoney);


// withdraw function
// creating an object to store user actions on the dashboard
let Transactions = {
    username: '',
    withdraw: 0,
    deposit: 0,
    transfer: 0,
    receiverName: '',
    senderName: '',
    receiverAcc: ''
}

// creating a function for withdrawal
function withdrawMoney() {
    let unReplacedUser = [];

    let withdrawAmount = Number(withdrawAmt.value);

    let replacedUser = formData.find((formData) => {
        return formDataDashboard.userName === formData.username;
    })

    formData.filter((formData) => {
        if (formDataDashboard.userName !== formData.username) {
            unReplacedUser.push(formData);
        }
    })

    if (replacedUser) {
        let Transactions = {
            username: replacedUser.userName,
            withdraw: withdrawAmount,
            deposit: 0,
            transfer: 0,
            receiverName: '',
            senderName: '',
            receiverAcc: ''
        }
        if (withdrawAmount > replacedUser.amount) {
            alert("Insufficient Fund")
            return
        }
        const newTransactions = JSON.parse(localStorage.getItem('withdraw')) || []
        newTransactions.push(Transactions);
        localStorage.setItem('withdraw', JSON.stringify(newTransactions))
        replacedUser.amount -= withdrawAmount
        unReplacedUser.push(replacedUser)

        localStorage.setItem('user', JSON.stringify(unReplacedUser))
        location.reload();
    }
}
// withdraw button function
withdrawButton.addEventListener('click', withdrawMoney);




// creating a function to check receiver's validity
function checkIfTransferAccExist() {
    // checking the receiver of the transfer 
    recipient = recipientUsername.value
    amount = parseInt(transferAmount.value)

    validUser = formData.find((data) => data.username == recipient)
    SenderUser = formData.find((data) => data.username == formDataDashboard.userName)
    console.log(SenderUser)

    if (!validUser) {
        alert(' User not found!')
        return
    }
    if (recipient == formDataDashboard.userName) {
        alert('Cant Transfer Money to Self')
        return
    }

    if (validUser) {
        alert("Valid User, transfer successful!")
        doTransfer(validUser, amount, SenderUser)
    }

}

function doTransfer(validUser, amount, SenderUser) {
    validUser.amount += amount
    SenderUser.amount -= amount
    localStorage.setItem('user', JSON.stringify(formData))

    location.reload();
}