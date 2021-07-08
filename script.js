'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// btnsOpenModal[0].addEventListener('click', function () {
//   console.log('Button 1 clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// });

// btnsOpenModal[1].addEventListener('click', function () {
//   console.log('Button 2 clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// });
// btnsOpenModal[2].addEventListener('click', function () {
//   console.log('Button 3 clicked');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// });

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
