const btnIndex = document.querySelector('#btn-index');
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const btnLogin = document.querySelector('#btn-login');
const btnHome = document.querySelector('#btn-home');

if (btnIndex) {
  btnIndex.addEventListener('click', () => (
    window.location.href = './pages/login.html'
  ));
}

if (btnLogin) {
  btnLogin.addEventListener('click', async (event) => {
    event.preventDefault();
  
    const emailValue = email.value;
    const passwordValue = password.value;
  
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
  
    const user = data.find((user) => (
      user.email === emailValue && user.password === passwordValue
    ));
  
    if (!user) return window.alert('Email e/ou senha inválidos.');
  
    window.alert('Acesso permitido.')
  
    window.location.href = './home.html';
  });
}

if (btnHome) {
  btnHome.addEventListener('click', () => (
    window.location.href = './login.html'
  ));
}
