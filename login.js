document.getElementById('login-btn').addEventListener('click', function (event) { 
  event.preventDefault();

  const accountNumber = document.getElementById("account-number").value;
  const pin = document.getElementById('pin').value;
  const convertedPin = parseInt(pin)
  if(accountNumber.length === 9){
    if (convertedPin === 1234){
      window.location.href = 'main/index.html'
    }else{
      alert('pin thick nai')
    }
  }else{
    alert('need vaild account number');
  }
})