import {getResours} from '../serveces/services';

function cart () {
    const item = document.querySelector('.item');
    class Carts {
       constructor (src , alt, subtitle , text , cost, parentSelector, ...classes) {
          this.src = src;
          this.alt = alt;
          this.subtitle = subtitle;
          this.text = text;
          this.cost = cost;
          this.parent = document.querySelector(parentSelector);
          this.classes = classes;
          this.transfer = 27;
          this.changToUAH();
       }
       changToUAH () {
         this.cost = this.cost * this.transfer;
       }
       render() {
         const element = document.createElement('div');
        if(this.classes.length === 0) {
           this.element = 'menu__item';
           element.classList.add(this.element);
        }
        else {
           this.classes.forEach(className => element.classList.add(className));
        }
         element.innerHTML = `
      <img src="${this.src}" alt="${this.alt}">
       <h3 class="menu__item-subtitle">${this.subtitle}</h3>
       <div class="menu__item-descr">${this.text}</div>
       <div class="menu__item-divider"></div>
       <div class="menu__item-price">
           <div class="menu__item-cost">Цена:</div>
           <div class="menu__item-total"><span>${this.cost}</span> грн/день</div>
      </div
         `;
      this.parent.append(element);
       }
    }


           getResours('http://localhost:3000/menu')
           .then(data => createCard(data));
           
           function createCard (data) {
              data.forEach(({img, altimg, title, descr, price,}) => {

                 const element = document.createElement('div');
                 element.classList.add('menu__item');
                 element.innerHTML = `
                 <img src="${img}" alt="${altimg}">
                 <h3 class="menu__item-subtitle">${title}</h3>
                 <div class="menu__item-descr">${descr}</div>
                 <div class="menu__item-divider"></div>
                 <div class="menu__item-price">
                     <div class="menu__item-cost">Цена:</div>
                     <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div
                 `;
                 document.querySelector('.menu .container').append(element);
              });
           }

}

export default cart;