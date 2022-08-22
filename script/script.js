'use strict';

// Navbar Selector
document.querySelector('.navbar-nav').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Project showcase

const containerProject = document.querySelector('.project-container');
const containerOperation = document.querySelector('.operation__project');

containerOperation.addEventListener('click', function (e) {
  const buttonClicked = e.target;
  const siblings = buttonClicked.closest('.operation__project').querySelectorAll('.button-project');

  siblings.forEach((el) => {
    if (el === buttonClicked) el.classList.add('button-active');
    if (el !== buttonClicked) el.classList.remove('button-active');
  });

  const kontener = buttonClicked.closest('.container').querySelectorAll('.project-container');

  kontener.forEach((el) => {
    if (el.classList.contains('not-active')) {
      el.classList.remove('not-active');
    } else {
      el.classList.add('not-active');
    }
  });
});
