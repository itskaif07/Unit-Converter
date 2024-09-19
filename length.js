
document.querySelector("button").addEventListener('click', convertUnits);

document.querySelector("#inputValue").addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    convertUnits();
  }
})

function convertUnits() {
  document.querySelector('#resultDiv').classList.remove('hidden')

  const fromUnit = document.querySelector('#fromUnit').value
  const toUnit = document.querySelector('#toUnit').value

  const inputValue = parseFloat(document.querySelector('#inputValue').value)

  if (inputValue === '' || isNaN(inputValue)) {
    document.querySelector('#result').innerHTML =
      'Please enter a number to convert!'
    return
  }

  const result = lengthConverter(fromUnit, toUnit, inputValue)

  document.querySelector('#result').innerHTML = result  + " " + toUnit;
}

function lengthConverter(fromUnit, toUnit, inputValue) {
  const rates = {
    Nanometres: 1,
    Micrometres: 1000,
    Milimetres: 1000000,
    Centimetres: 10000000,
    Decimetres: 100000000,
    Metres: 1000000000,
    Kilometres: 1000000000000,
    Miles: 1609344000000,
    'Nautical Miles' : 1852000000000,
  }

  const baseValue = inputValue * rates[fromUnit]
  return baseValue / rates[toUnit]
}
