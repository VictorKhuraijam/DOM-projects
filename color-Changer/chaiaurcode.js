// document.getElementById('grey').addEventListener('click', function(){
//   document.body.style.backgroundColor = `grey`
// });

// document.getElementById('white').addEventListener('click', function(){
//   document.body.style.backgroundColor = `white`
// });

// document.getElementById('blue').addEventListener('click', function(){
//   document.body.style.backgroundColor = `blue`
// });

// document.getElementById('yellow').addEventListener('click', function(){
//   document.body.style.backgroundColor = `yellow`
// });


function clickHandler (color){

  return function(){
    document.body.style.backgroundColor = `${color}`
  }
}

document.getElementById('grey').addEventListener('click', clickHandler('grey'));

document.getElementById('white').addEventListener('click', clickHandler('white'));

document.getElementById('blue').addEventListener('click', clickHandler('blue'));

document.getElementById('yellow').addEventListener('click', clickHandler('yellow'));

document.getElementById('cyan').addEventListener('click', clickHandler('cyan'));

document.getElementById('pink').addEventListener('click', clickHandler('pink'));

document.getElementById('green').addEventListener('click', clickHandler('green'));

document.getElementById('goldenrod').addEventListener('click', clickHandler('goldenrod'));

document.getElementById('azure').addEventListener('click', clickHandler('azure'));

document.getElementById('red').addEventListener('click', clickHandler('red'));
