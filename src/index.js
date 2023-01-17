import './style.css';
import teaRoomPage from './tea-room.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import logo from './images/tea-house-green-logo.png';

const contentDiv = document.querySelector('#content');

const navbar = document.querySelector('.navbar');
const logoImg = document.createElement('img');
logoImg.classList.add('logo');
logoImg.src = logo;
navbar.appendChild(logoImg);
const navLinks = document.createElement('ul');
navLinks.classList.add('navLinks');

const homeLi = document.createElement('li');
const homeLink = document.createElement('a');
homeLi.appendChild(homeLink);
homeLink.textContent = 'Tea House Home';
homeLink.addEventListener('click', teaRoomPage);

const menuLi = document.createElement('li');
const menuLink = document.createElement('a');
menuLi.appendChild(menuLink);
menuLink.textContent = 'Our Menu';
menuLink.addEventListener('click', menuPage);

const contactLi = document.createElement('li');
const contactLink = document.createElement('a');
contactLi.appendChild(contactLink);
contactLink.textContent = 'Contact Us';
contactLink.addEventListener('click', contactPage);

navLinks.appendChild(homeLi);
navLinks.appendChild(menuLi);
navLinks.appendChild(contactLi);

navbar.appendChild(navLinks);

contentDiv.appendChild(teaRoomPage());