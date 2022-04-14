'use strict';

/*

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

console.log(btnsOpenModel);

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});



////// REFINE THE CLOSE FUNCTION WITH A NAMED FUNCTION //////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

*/

////// CHECKING IF A CLASS IS PRESENT AND HANDLING A KEY PRESS EVENT //////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Key press events are global so they normally happen on the whole document. KeyUp, KeyDown, KeyPress.
// Keydown is when we strike a key
// keyUp is when we lift off a key
// KeyPress - Depreciated - event is fired when a key that produces a character value is pressed down
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
