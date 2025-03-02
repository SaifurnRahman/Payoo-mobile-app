document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('cashout-amount').value;
    const convertedAmount = parseInt(amount);
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const balance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(balance);
    
    if (convertedPin ===1234){
    const substract = convertedBalance - convertedAmount;
    document.getElementById('balance').innerText = substract;
    }else {
        alert('Pin is not currect')
    }
    document.getElementById('amount').value = "";
    })
    