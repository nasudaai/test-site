//const myHeading = document.querySelector('h1');
//myHeading.textContent = "hello world!";

/* document.querySelector('html').addEventListener('click', function () {
  alert('you poked!');
}); */


const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');

  if (mySrc === 'images/image-big.png') {
    myImage.setAttribute('src', 'images/image2.png');
  } else {
    myImage.setAttribute('src', 'images/image-big.png');
  }
};

let myButton = document.querySelector('button');
console.log(myButton);

let myHeading = document.querySelector('h1');
console.log(myHeading);


function setUserName() {
  const myName = prompt('What your name?');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome ${myName}.`;
  }
}

//setUserName();

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `welcome ${storedName}`;
}

myButton.addEventListener('click', () => {
  setUserName();
})
