function show(modalSelector) {
   const modal = document.querySelector(modalSelector);
   modal.classList.add('show');

}
function close(modalSelector) {
   const modal = document.querySelector(modalSelector);
   modal.classList.remove('show');
}
function openModal() {
   show('.modal');
   document.body.style.overflow = 'hidden';
   clearInterval(openWindow);
}
function closeModal() {
   close('.modal');
   document.body.style.overflow = '';
}

function modalWindow (openMod, modalSelector) {
   const openmodl = document.querySelectorAll(openMod),
   modal = document.querySelector(modalSelector);
   //  body = document.querySelector('body');

   openmodl.forEach((item) => {
         item.addEventListener('click', openModal);

   });

modal.addEventListener('click', (e) => {
   if(e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
   }
});

document.addEventListener('keydown', (event) => {
   if(event.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
   }
});
function showScrollModal () {
   if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showScrollModal);
   }
}

window.addEventListener('scroll', showScrollModal);

}
const openWindow = setTimeout(openModal, 50000);

export default modalWindow;
export {openModal};
export {closeModal};