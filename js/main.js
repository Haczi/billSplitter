const price = document.querySelector('#price')
const persons = document.querySelector('#people')
const btn = document.querySelector('button')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')

console.log(tip)

const checkValues = () => {
    let optionTip = tip.selectedIndex
    const info = document.querySelector('.cost-info')
    if(price.value == '' || persons.value == '' || optionTip == 0 ){
       error.textContent= 'Musisz uzupelnic wszystkie pola'
       info.style.display = 'none'
    }
    else{
        let cost = document.querySelector('.cost')
        let costAll = (parseInt(price.value) + (parseInt(price.value) * parseFloat(tip.value)))/ parseInt(persons.value)
        info.style.display = 'block'
        cost.textContent= costAll.toFixed(2)
        error.textContent= ''
    }
  
}





btn.addEventListener('click', checkValues)