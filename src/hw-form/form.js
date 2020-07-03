const user = {};
const users = localStorage.users ? JSON.parse(localStorage.users) : [];
const userLogin = {};

const email = document.getElementById('email');
email.addEventListener('change', checkedValidEmail);
email.addEventListener('click', () => {
    document.getElementById('emailWarn').hidden = true;
});

function checkedValidEmail({ target }) {
    const regexp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const str = target.value;
    if (regexp.test(str)) {
        if (target.id === 'email') {
            user.email = target.value;
        } else {
            userLogin.email = target.value;
        }
    } else {
        if (target.id === 'email') {
            target.value = '';
            document.getElementById('emailWarn').hidden = false;
        } else {
            target.value = '';
            document.getElementById('emailWarnLogin').hidden = false;
        }

    }
};

const firstPassword = document.getElementById('firstPassword');
firstPassword.addEventListener('change', checkedValidPassword);
firstPassword.addEventListener('click', warn);

const arrSymbles = ['/', '*', '-', '+', '#', '$', '&', '(', ')', '!', '?', '_', '='];

function checkedValidPassword({ target }) {

    const password = target.value;
    const regexp =  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;   

    if (regexp.test(password)) {
        if (target.id === 'passwordLogin') {
            userLogin.password = target.value;
        }
    } else {
        if (target.id === 'passwordLogin') {
            target.value = '';
            document.getElementById('passwordWarnLogin').hidden = false;
        } else {
            target.value = '';
            document.getElementById('firstPasswordWarn').hidden = false;
        }
    }

};

function warn({ target }) {
    if (user.email || userLogin.email) {
        alert(`ваш пароль должен содержать не менее 6 символов, 
    включая ${arrSymbles.join(' ')}   и хотя бы одну заглавную, строчную буквы и цифру`);
    };
    if (target.id === 'passwordLogin') {
        document.getElementById('passwordWarnLogin').hidden = true;
    } else {
        document.getElementById('firstPasswordWarn').hidden = true;
    };

};

const secondPassword = document.getElementById('secondPassword');
secondPassword.addEventListener('change', checkPassword);
secondPassword.addEventListener('click', () => {
    document.getElementById('secondPasswordWarn').hidden = true;
});

function checkPassword({ target }) {
    if (target.value === firstPassword.value) {
        user.password = target.value;
    } else {
        document.getElementById('secondPasswordWarn').hidden = false;
    }
};

const buttonRegistr = document.getElementById('registr');
buttonRegistr.addEventListener('click', registr);

function registr({ target }) {
    if (user.password) {
        users.push(user);
        localStorage.users = JSON.stringify(users);
        email.value = '';
        firstPassword.value = '';
        secondPassword.value = '';
    }
};

const emailLogin = document.getElementById('emailLogin');
emailLogin.addEventListener('change', checkedValidEmail);
emailLogin.addEventListener('click', () => {
    document.getElementById('emailWarnLogin').hidden = true;
});

const passwordLogin = document.getElementById('passwordLogin');
passwordLogin.addEventListener('change', checkedValidPassword);
passwordLogin.addEventListener('click', warn);

const buttonLogin = document.getElementById('login');
buttonLogin.addEventListener('click', login);

function login() {
    if (userLogin.email && userLogin.password) {
       
    if (users.find(elem => JSON.stringify(elem) === JSON.stringify(userLogin))){
        alert("вход выполнен успешно");
    } else {
        alert('неправильно введен логин или пароль, попробуйте еще раз')
    };
        emailLogin.value = '';
        passwordLogin.value = '';
        delete userLogin.email;
        delete userLogin.password;
    }
}

//{"email":"smahito89@gmail.com","password":"Hello123$$"} {"email":"preivet@gmail.com","password":"Privet123$$"} 

// /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g