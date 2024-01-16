function displayUser(){
    const usercomp = document.getElementById('nameinput').value;
const namecon = document.getElementById('p1');
const usernameEl = document.createElement('p');
usernameEl.innerHTML = usercomp;
namecon.appendChild(usernameEl);
}