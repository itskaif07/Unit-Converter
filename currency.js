// Api

document.querySelector('button').addEventListener('click', currencyConverter);

async function currencyConverter() {
  
  document.querySelector("#resultDiv").classList.remove('hidden');

  const fromUnit = document.querySelector("#fromUnit").value;
  const toUnit = document.querySelector("#toUnit").value;

  const inputValue = parseFloat(document.querySelector("#inputValue").value);

  if(inputValue == "" || isNaN(inputValue)){
    document.querySelector("#result").innerHTML = "Please enter a value to convert";
    return;
    }
 

  try{
   const response = await  fetch(`https://v6.exchangerate-api.com/v6/57043b7e69b6ed27c6759e55/latest/${fromUnit}`);
   const data = await response.json();

   const conversionRate = data.conversion_rates[toUnit];
   const result = (conversionRate * inputValue).toFixed(2);

   if(!data.conversion_rates || !data.conversion_rates[toUnit]){
    document.querySelector("#result").innerHTML = `Exchange rate for ${toUnit} not available`
   }

   document.querySelector("#result").innerHTML = result + ` ${toUnit}`;
   
  }
  catch(e){
    document.querySelector("#result").innerHTML = "There was an error retrieving exchange rates"
  }
}

document.querySelector("#inputValue").addEventListener('keydown', (event)=>{
  if(event.key === 'Enter'){
    currencyConverter();
  }
})

// Hard coded

// document.querySelector('button').addEventListener('click', convertUnits)

// function convertUnits() {
//   document.querySelector('#resultDiv').classList.remove('hidden')

//   const fromUnit = document.querySelector('#fromUnit').value
//   const toUnit = document.querySelector('#toUnit').value

//   const inputValue = parseFloat(document.querySelector('#inputValue').value)

//   document.querySelector('#inputValue').addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') {
//       convertUnits()
//     }
//   })

//   if (inputValue === '' || isNaN(inputValue)) {
//     document.querySelector('#result').innerHTML =
//       'Please enter a number to convert!'
//     return
//   }

//   const currency = currencyConverter(fromUnit, toUnit, inputValue)
//   document.getElementById('result').textContent = currency + ' ' + toUnit
// }

// function currencyConverter(fromUnit, toUnit, inputValue) {
//   const exchangeRates = {
//     USD: 1, // United States Dollar
//     EUR: 0.85, // Euro
//     JPY: 110.45, // Japanese Yen
//     GBP: 0.75, // British Pound Sterling
//     AUD: 1.35, // Australian Dollar
//     CAD: 1.25, // Canadian Dollar
//     CHF: 0.92, // Swiss Franc
//     CNY: 6.45, // Chinese Yuan Renminbi
//     SEK: 9.55, // Swedish Krona
//     NZD: 1.5, // New Zealand Dollar
//     MXN: 18.25, // Mexican Peso
//     SGD: 1.35, // Singapore Dollar
//     HKD: 7.85, // Hong Kong Dollar
//     NOK: 9.1, // Norwegian Krone
//     KRW: 1350.0, // South Korean Won
//     TRY: 27.5, // Turkish Lira
//     INR: 82.75, // Indian Rupee
//     BRL: 5.2, // Brazilian Real
//     ZAR: 18.2, // South African Rand
//     RUB: 82.0, // Russian Ruble
//     IDR: 15450.0, // Indonesian Rupiah
//     SAR: 3.75, // Saudi Riyal
//     MYR: 4.55, // Malaysian Ringgit
//     PHP: 56.75, // Philippine Peso
//     THB: 34.25, // Thai Baht
//     AED: 3.67, // UAE Dirham
//     PKR: 280.0, // Pakistani Rupee
//     BDT: 106.0, // Bangladeshi Taka
//     VND: 23800.0, // Vietnamese Dong
//     EGP: 31.0, // Egyptian Pound
//     ILS: 3.7, // Israeli New Shekel
//     ARS: 365.0, // Argentine Peso
//     CLP: 790.0, // Chilean Peso
//     PLN: 4.0, // Polish Zloty
//     CZK: 21.5, // Czech Koruna
//     HUF: 320.0, // Hungarian Forint
//     RON: 4.6, // Romanian Leu
//     NGN: 460.0, // Nigerian Naira
//     KES: 130.0, // Kenyan Shilling
//     GHS: 12.0, // Ghanaian Cedi
//   }

//   const USD = inputValue / exchangeRates[fromUnit]
//   const convertedAmount = USD * exchangeRates[toUnit]

//   return convertedAmount
// }


