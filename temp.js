document.querySelector('button').addEventListener('click', convertUnits)

document.querySelector('#inputValue').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
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

  document.querySelector('#result').innerHTML = result + " " + toUnit;
}

function lengthConverter(fromUnit, toUnit, inputValue) {
  if (fromUnit == 'Celcius') {
    switch (toUnit) {
      case 'Celcius':
        return inputValue
      case 'Fahrenheit':
        return inputValue * 1.8 + 32
      case 'Kelvin':
        return inputValue + 273.15
    }
  } else if (fromUnit == 'Fahrenheit') {
    switch (toUnit) {
      case 'Celcius':
        return ((inputValue - 32) * 5) / 9
      case 'Fahrenheit':
        return inputValue
      case 'Kelvin':
        return ((inputValue - 32) * 5) / 9 + 273.15
    }
  } else if (fromUnit == 'Kelvin') {
    switch (toUnit) {
      case 'Celcius':
        return inputValue - 273.15
      case 'Fahrenheit':
        return (inputValue - 273.15) * 1.8 + 32
      case 'Kelvin':
        return inputValue
    }
  }
}
