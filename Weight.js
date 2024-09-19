
document.querySelector("button").addEventListener('click', convertUnits)

document.querySelector("#inputValue").addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        convertUnits();
    }
})

function convertUnits() {
    
    document.querySelector("#resultDiv").classList.remove('hidden')
    
    const fromUnit = document.querySelector("#fromUnit").value
    const toUnit = document.querySelector("#toUnit").value
    
    const inputValue = parseFloat(document.querySelector("#inputValue").value)

    
  if (inputValue === '' || isNaN(inputValue)) {
    document.querySelector('#result').innerHTML =
      'Please enter a number to convert!'
    return
  }
    
    const result = weightConverter(fromUnit, toUnit, inputValue);
    
    document.querySelector("#result").innerHTML = result  + " " + toUnit;  
}

function weightConverter(fromUnit, toUnit, inputValue) {
    
    rates = {
        Picogram: 1,
        Nanogram: 1e3,
        Microgram: 1e6,
        Milligram: 1e9,
        Gram: 1e12,
        Kilogram: 1e15,
        Pound: 4.53592e11,
        Ounce: 2.83495e10,
        Stone: 2.83495e10,
        Ton: 1e24
    }

    const baseValue = inputValue * rates[fromUnit];
    return baseValue / rates[toUnit];
}