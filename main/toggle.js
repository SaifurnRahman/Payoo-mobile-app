document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('add-money').style.display = 'block';
    document.getElementById('cashout').style.display = 'none';
})
document.getElementById('cashout-box').addEventListener('click', function(){
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cashout').style.display = 'block';
})