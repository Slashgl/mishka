const { eventNames } = require("gulp");

const btn = document.querySelector('.order'),
      modal = document.querySelector('.overlay'),
      close = document.querySelector('.modal__close');

btn.addEventListener('click', event =>  {
    event.preventDefault();
    modal.classList.add('active');
});

close.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', event => {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
});



