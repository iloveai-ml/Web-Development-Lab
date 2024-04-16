import React, { useState } from 'react';
function CurrencyConverter() {
const [amount, setAmount] = useState(0);
const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState('EUR');
const [convertedAmount, setConvertedAmount] = useState(0);
// Hard-coded exchange rate
const exchangeRate = 0.85; // 1 USD = 0.85 EUR
const handleAmountChange = (e) => {
const value = parseFloat(e.target.value);
setAmount(value);
};
const handleFromCurrencyChange = (e) => {
setFromCurrency(e.target.value);
};
const handleToCurrencyChange = (e) => {
setToCurrency(e.target.value);
};
const convertCurrency = () => {
const result = amount * exchangeRate;
setConvertedAmount(result.toFixed(2)); // Round to 2 decimal places
};
return (
<div>
<h2>Currency Converter</h2>
<div>
<label>
Amount:
<input type="number" value={amount} onChange={handleAmountChange} />
</label>
</div>
<div>
<label>
From Currency:
<select value={fromCurrency} onChange={handleFromCurrencyChange}>
<option value="USD">USD</option>
<option value="EUR">EUR</option>
</select>
</label>

</div>
<div>
<label>
To Currency:
<select value={toCurrency} onChange={handleToCurrencyChange}>
<option value="USD">USD</option>
<option value="EUR">EUR</option>
</select>
</label>
</div>
<button onClick={convertCurrency}>Convert</button>
<div>
{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
</div>
</div>
);
}
export default CurrencyConverter;
