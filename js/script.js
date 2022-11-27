      require('es6-promise').polyfill();
      import 'nodelist-foreach-polyfill';
      
      import tabs from './modules/tabs';
      import modalWindow from './modules/modalWindow';
      import timer from './modules/timer';
      import carts from './modules/carts';
      import calc from './modules/calc';
      import form from './modules/form';
      import slider from './modules/slider';

window.addEventListener("DOMContentLoaded", () => {
   // const tabs = require('./modules/tabs'); es5


   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modalWindow('[data-modal]','.modal');
   timer('.timer', '2022.12.01');
   carts();
   calc();
   form('form');
   slider();
   
});

