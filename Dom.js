// Follow the instructions provided in training kit and then follow along here.

const secondHeading = document.querySelector('.second-heading');
console.log(secondHeading.textContent);
secondHeading.textContent = "DOM Güncellendi!";
console.log(secondHeading.textContent);

const elementP=document.querySelector('p').style.color='red';
const mainHeader=document.querySelector('.main-header');
mainHeader.textContent="Dm Manipule Edildi";
const mainNav=document.querySelector('.main-nav a');
mainNav.setAttribute('href', 'http://www.imagsource.com')

const bottomImg=document.querySelector('.custom-img');
bottomImg.src="https://s3-spaced-learning-prod.s3.amazonaws.com/webapp/workintech/cources/sprint3/logo-light.png"