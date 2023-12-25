const validusername = ["raihan561", "putra857"]
const validpasswords = ['ean123', 'syarif55'];

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (validpasswords.includes(password)) {
    alert('Login berhasil!');
    window.location.href = "loginsukses.html"
  } else {
    alert('Login gagal. Password salah.');
  }
}

