document.getElementById("calculateButton").addEventListener("click", function() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var selectedCurrency = document.getElementById("currency").value;

    var conversionRates = {
        eur: 0.85,
        gbp: 0.75,
        jpy: 110.30,
        inr: 74.28,
        aud: 1.31,
        myr: 4.12, // 1 USD to Malaysian Ringgit
        idr: 14455, // 1 USD to Indonesian Rupiah
        sgd: 1.34 // 1 USD to Singapore Dollar
    };

    var result = inputValue * conversionRates[selectedCurrency];
    document.getElementById("result").innerHTML = "Converted Amount: " + result.toFixed(2) + " " + selectedCurrency.toUpperCase();
});
