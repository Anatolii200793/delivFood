function timer (id, time) {

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
          if( newTime.total <= 0) {
             clearInterval(timeInterval);
          }
       }
    }
    getTimeRemaining(time);
    setClock(id, time);

}

export default timer;
