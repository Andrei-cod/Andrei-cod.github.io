var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.jpg') {
      myImage.setAttribute ('src','images/images.png');
    } else {
      myImage.setAttribute ('src','images/logo.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать на мой первый сайт, ' + myName + 'HTML это круто!';
  }


if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать на мой первый сайт, ' + myName + 'HTML это круто!';
}

myButton.onclick = function() {
    setUserName();
  }
  