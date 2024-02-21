const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;
  const result = document.querySelector('#results');

  if(isNaN(height) || height <= 0 || height === " "){
      result.innerHTML = "Please input a valid number"
  } else if(isNaN(weight) || weight <= 0 || weight === " "){
    result.innerHTML = "Please input a valid number"
} else {
  const bmi = ((weight * 10000) / (height * height)).toFixed(2);
  result.innerHTML = `The Calculated BMI is : ${bmi}`
}

})
