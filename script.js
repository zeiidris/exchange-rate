const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')
const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

// Fetch exchange rates and update the DOM
function calcaulate(){
    const currency_one = currencyEl_one.value
    const currency_two = currencyEl_two.value
   /*  Currency(currency_one) */
   fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`).then(res => res.json()).then(data => {
    const rate = data.rates[currency_two]
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
    amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
   })
   
}
//get currency value
/* async function Currency(currency){
    const api = `https://open.exchangerate-api.com/v6/latest/${currency}`
    const res = await fetch(api)
    const data = await res.json()
    const rate = data.rates
    const rate2 = rate[currency]
    console.log(rate);
    console.log(rate2);
    console.log(currency);
} */


// Event listenrs
currencyEl_one.addEventListener('change',calcaulate)
amountEl_one.addEventListener('input',calcaulate)
currencyEl_two.addEventListener('change',calcaulate)
amountEl_two.addEventListener('input',calcaulate)

swap.addEventListener('click',()=>{
    const temp = currencyEl_one.value
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = temp
    calcaulate()
})

calcaulate()