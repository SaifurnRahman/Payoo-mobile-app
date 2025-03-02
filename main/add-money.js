document.getElementById('add-money-btn').addEventListener('click', function (event) {
event.preventDefault();
const amount = document.getElementById('amount').value;
const convertedAmount = parseInt(amount);
const pin = document.getElementById('pin').value;
const convertedPin = parseInt(pin);
const balance = document.getElementById('balance').innerText;
const convertedBalance = parseFloat(balance);

if (convertedPin ===1234){
const sum = convertedAmount + convertedBalance;
document.getElementById('balance').innerText = sum;
}else {
    alert('Pin is not currect')
}
document.getElementById('amount').value = "";
})

document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = '../index.html'
})