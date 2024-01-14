const myHeading = document.querySelector('h1');
myHeading.textContent = "hello world!";

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
