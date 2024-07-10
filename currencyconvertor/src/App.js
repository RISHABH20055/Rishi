import React,{useEffect,useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';


const BASE_URL ='https://api.exchangeratesapi.io/latest'


function App() {


  const [currencyOption,setCurrencyOption]= useState([])
  const[fromCurrency,setFromCurrency] =  useState()
  const[toCurrency,setToCurrency] =  useState()
  const[exchangeRate,setExchangeRate]= useState()
  const[amount,setAmount] = useState(1)
  const[amountInFromCurrency,setAmountInFromCurrency] = useState(true)
 
let toAmount ,fromAmount
if(amountInFromCurrency){
  fromAmount = amount
  toAmount = amount*exchangeRate
}else{
  toAmount = amount
  fromAmount = amount/exchangeRate
}


  useEffect(()=>{
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data =>{
      const Firstcurrency = Object.keys(data.rates)[0]
      setCurrencyOption([data.base,...Object.keys(data.rates)])
    setFromCurrency(data.base)
    setToCurrency(Firstcurrency)
    setExchangeRate(data.rates[Firstcurrency])
    })
   },[])

   useEffect(()=>{
    if(fromCurrency != null, toCurrency !=null)
      {fetch(`${BASE_URL}?base=${fromCurrency}& symbols=${toCurrency}`)
      .then(res =>res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
} 
         },[fromCurrency,toCurrency])


   function handelFromAmountChange(e){
   setAmount(e.target.value)
   setAmountInFromCurrency(true)
   }

   
   function handelToAmountChange(e){
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
    }

  return (
    <>
    <h1>Convert</h1>
    <CurrencyRow
    currencyOption={currencyOption}
    selectedCurrency={fromCurrency}
    onChangeCurrency={e =>setFromCurrency(e.target.value)}
    onChangeAmount={handelFromAmountChange}
    amount ={fromAmount}
    />
    <div  className='equals'>=</div>
    <CurrencyRow
    currencyOption={currencyOption}
    selectedCurrency ={toCurrency}
    onChangeCurrency={e =>setToCurrency(e.target.value)}
    onChangeAmount={handelToAmountChange}
    amount ={toAmount}
    />
    </>
  );
}

export default App;
