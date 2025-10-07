const currency1El=document.getElementById("currency1");
const worth1El=document.getElementById("worth1");
const currency2El=document.getElementById("currency2");
const worth2El=document.getElementById("worth2");
const exchangeEl=document.getElementById("exchange");

updateRate()

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/0e44d0d49c7a765b7c1a4de8/latest/${currency1El.value}`)
    .then((res)=>res.json())
    .then((data)=>{
        const rate=data.conversion_rates[currency2El.value];
        console.log(rate);
        exchangeEl.innerText=`1 ${currency1El.value}=${rate+" " +currency2El.value}`;

        worth2El.value=(worth1El.value * rate).toFixed(3)
    });

}
currency1El.addEventListener("change",updateRate);
currency2El.addEventListener("change",updateRate);
worth1El.addEventListener("input",updateRate);