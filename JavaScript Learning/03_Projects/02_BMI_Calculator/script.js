const form = document.querySelector('form')

form.addEventListener('submit' , (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `please provide valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please provide valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height) / 10000)).toFixed(2);
        console.log(bmi)
        let mess = ""
        if(bmi < 18.6){
            mess = "Under Weight"
        }else if(bmi >= 18.6 && bmi < 24.9){
            mess = "Normal Weight"
        }else {
            mess = "Over Weight"
        }
        results.innerHTML = `<span>${bmi}</span> <span>${mess}</span>`
    }

})