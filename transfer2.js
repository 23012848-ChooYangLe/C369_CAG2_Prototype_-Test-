document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'transfer1.html';
});

const countryRate = {"US": 0.75, "UK": 0.59, "CA": 1.05, "JP": 110.44};
const countryCurrency = {"US": "USD", "UK": "GBP", "CA": "CAD", "JP": "JPY"};

function updateConvertedAmount() {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    const selectedCountry = document.getElementById('country').value;
    const exchangeRate = countryRate[selectedCountry];
    const selectedCurrency = countryCurrency[selectedCountry];

    document.getElementById('exrate').textContent = `Exchange Rate: $1 = ${selectedCurrency} ${exchangeRate}`
    document.getElementById('conversion').textContent = `SGD TO ${selectedCurrency}`;

    const convertedAmount = amount * exchangeRate;
    document.getElementById('convertedAmount').textContent = `Amount sending after conversion: ${convertedAmount.toFixed(2)} ${selectedCurrency}`;
}

document.getElementById('amount').addEventListener('input', updateConvertedAmount);
document.getElementById('country').addEventListener('change', updateConvertedAmount);

// Initial call to set the correct currency when the page loads
updateConvertedAmount();

document.getElementById('send-button').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
    localStorage.setItem('transferAmount', amount);
    window.location.href = 'transfer3.html';
});