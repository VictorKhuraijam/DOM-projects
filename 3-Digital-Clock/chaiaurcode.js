
function displayTime(){
  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  hours = (hours < 10 ? "0" : "") + hours ;
  minutes = (minutes < 10 ? "0" : "") + minutes ;
  seconds = (seconds < 10 ? "0" : "") + seconds ;

  let time = hours + ":" + minutes + ":" + seconds

  document.getElementById('clock').innerText = time
}
// displayTime()

setInterval(displayTime,1000)

// const clock = document.getElementById('clock');
// // const clock = document.querySelector('#clock')
// setInterval(function () {
//   let date = new Date();
//   // console.log(date.toLocaleTimeString());
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);
