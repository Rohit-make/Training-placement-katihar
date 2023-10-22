// animate number counter

//   let valueDisplays = document.querySelectorAll(".num");
// let interval = 5000;

// const counter= 
// {
// 2016:"300",
// 2017:"350"
// }

// valueDisplays.forEach((valueDisplay) => {

//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute ("data-val"));

//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval (function(){

//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if( startValue == endValue){

//         clearInterval(counter);
//     }

//   }, duration);


// });


const workSection = document.querySelector('.section-work-data');
const workObserver = new IntersectionObserver(
  (entries, observer) => {

    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 5000;

    valueDisplays.forEach((valueDisplay) => {

      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));

      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {

        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {

          clearInterval(counter);
        }

      }, duration);


    });
  },



  {
    root: null,
    threshold: 0,


  });

workObserver.observe(workSection);