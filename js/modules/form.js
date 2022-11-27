import{closeModal,openModal} from './modalWindow';
import{postData} from '../serveces/services';

function form (formSelector) {
        //Form
       
        const forms = document.querySelectorAll(formSelector);
 
        const mess = {
              lodding: 'img/svg/spinner.svg',
              success: 'Спасибо! Скоро мы с вами свяжемся',
              failure: 'Что-то пошло не так...'
        };
     
        forms.forEach(form => {
           bindPostData(form);
        });
    
    
           function bindPostData(form) {
              form.addEventListener("submit", (e) => {
                  e.preventDefault();
                 const statusMess = document.createElement('img');
                 statusMess.src = mess.lodding;
                 statusMess.style.cssText = `
                    display: block;
                    margin: 0 auto;
                 `;
                 form.insertAdjacentElement('afterend',statusMess);
     
                 const formData = new FormData(form);
    
                   const json = JSON.stringify(Object.fromEntries(formData.entries()));
                postData('http://localhost:3000/requests', json)
                 .then(data => {
                    console.log(data);
                    showThanksModal (mess.success);
                    statusMess.remove();
                 }) .catch(() => {
                    showThanksModal (mess.failure);
                 }).finally(() => {
                    form.reset();
                 });
              });
           }
     
           function showThanksModal (mess) {
              const prevModalDialog = document.querySelector('.modal__dialog');
                 prevModalDialog.classList.add('hide');
                 openModal();
     
              const thanksModal = document.createElement('div');
              thanksModal.classList.add('modal__dialog');
              thanksModal.innerHTML = `
              <div class="modal__content">
                 <div class="modal__close" data-close>&times;</div>
                 <div class="modal__title">${mess}</div>
              </div>
              `;
     
                 document.querySelector('.modal').append(thanksModal);
     
              setTimeout(() => {
                 thanksModal.remove();
                 prevModalDialog.classList.add('show');
                 prevModalDialog.classList.remove('hide');
                 closeModal();
              }, 4000);
           }
          
           fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(response => response.json())
       .then(json => console.log(json));
     
           fetch('http://localhost:3000/menu')
           .then(data => data.json())
           .then(res => console.log(res));
    
}

export default form;