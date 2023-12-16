const btn = document.getElementById('btn')
const result = document.getElementById('result')
const reset = document.getElementById('reset')
const height = document.getElementById('height')
const weight = document.getElementById('weight')

btn.addEventListener('click',()=>{
    let heightIncm = Number (height.value)

    let weightInkg = Number (weight.value)
   
    let BMI =Math.floor(weightInkg / Math.pow(heightIncm / 100, 2))

    if (BMI < 18.5) {
        result.style.backgroundColor = 'black'
        result.innerHTML = `your BMI is ${BMI} you are Under weight`
    }
    if (BMI > 18.5 && BMI < 24.9) {
        result.style.backgroundColor = 'green'
        result.innerHTML = `your BMI is ${BMI} you are Normal weight`
    }
    if (BMI > 25) {
        result.style.backgroundColor = 'red'
        result.innerHTML = `your BMI is ${BMI} you are Over weight`
    }

    // console.log(BMI);
})

reset.addEventListener('click',()=>{
   height.value = ''
   weight.value = ''

   result.innerText = ''
})