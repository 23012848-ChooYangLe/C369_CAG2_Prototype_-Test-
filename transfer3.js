document.getElementById('back-button').addEventListener('click', function() {
    window.location.href = 'transfer2.html';
});

document.getElementById('verify-button').addEventListener('click', function() {
    const transferAmount = parseFloat(localStorage.getItem('transferAmount')) || 0;
    const currentBalance = parseFloat(localStorage.getItem('currentBalance')) || 28856.20;
    const newBalance = currentBalance - transferAmount;
    localStorage.setItem('currentBalance', newBalance.toFixed(2));
    window.location.href = 'account.html';
});