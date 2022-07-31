window.addEventListener("DOMContentLoaded", () => {


   // Tabs
const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');

function hideTabContent () {
   tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
   });

   tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
   });
}

function showTabContent (i = 0) {
   tabsContent[i].classList.add('show', 'fade');
   tabsContent[i].classList.remove('hide');
   tabs[i].classList.add('tabheader__item_active');
}
   hideTabContent();
   showTabContent();



   tabsParent.addEventListener("click", (event) => {
      const target = event.target;
      if (target && target.classList.contains('tabheader__item')) {
         tabs.forEach((tab,i) => {
            if (target == tab) {
               hideTabContent();
               showTabContent(i);
            }
         })
      }
   }); 

   //Timer

   const time = '2022-10-08';
      function getTimeRemaining (endtime) {
         const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hourse = Math.floor( (t / (1000 * 60 * 60) % 24)),
            minuts = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

            return {
               'total': t,
               'days': days,
               'hourse': hourse,
               'minuts': minuts,
               'seconds': seconds
            };
      }

      function zetClock (num) {
         if(num >= 0 && num < 10) {
            return `0${num}`;
         } else {
            return num;
         }
      }

      function setClock (selector, endtime) {
         const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

         updateClock();  //запускаем в ручную чтобы страница сразу показала нужные значения

         function updateClock () {
         const  newTime = getTimeRemaining(endtime);
            days.innerHTML = zetClock(newTime.days);
            hours.innerHTML = zetClock(newTime.hourse);
            minutes.innerHTML = zetClock(newTime.minuts);
            seconds.innerHTML = zetClock(newTime.seconds);
            if( time.total <= 0) {
               clearInterval(timeInterval);
            }
         }
      }
      getTimeRemaining(time);
      setClock('.timer', time);
});