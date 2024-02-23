const start = document.getElementById('start')
const stop = document.getElementById('stop')

function randomColor(){
  let colorStr = '0123456789ABCDEF'

  let color = "#"
  for(let i = 0; i < 6 ; i++){
    let randColorIndex = Math.floor(Math.random()*16 );
      color += colorStr[randColorIndex]
  }
  return color
}
console.log(randomColor())

let timerId;

start.addEventListener('click', function(){
  if(!timerId){
    // The if (!timerId) condition checks whether timerId is falsy. Initially, timerId is undefined (undefined), so the condition evaluates to true, and the interval is started. When stop is clicked, clearInterval(timerId) is called to stop the interval, and timerId is set to null, which makes it falsy. This ensures that when start is clicked again, the interval is restarted.

    timerId = setInterval(() => {
      document.body.style.backgroundColor = `${randomColor()}`;
      console.log(randomColor())
    }, 1000);
  }
});

stop.addEventListener('click',function(){
  clearInterval(timerId);
  timerId = null
});

//generate a random color

// const randomColor = function () {
//   const hex = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// let intervalId;
// const startChangingColor = function () {
//   if (!intervalId) {
//     intervalId = setInterval(changeBgColor, 1000);
//   }

//   function changeBgColor() {
//     document.body.style.backgroundColor = randomColor();
//   }
// };
// const stopChangingColor = function () {
//   clearInterval(intervalId);
//   intervalId = null;
// };

// document.querySelector('#start').addEventListener('click', startChangingColor);

// document.querySelector('#stop').addEventListener('click', stopChangingColor);
