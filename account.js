document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const mainContent = document.getElementById('mainContent');

    menuBtn.addEventListener('click', function() {
        sideMenu.classList.toggle('open');
    });

    // Close menu when clicking outside (got chatGPT to help me here)
    mainContent.addEventListener('click', function() {
        if (sideMenu.classList.contains('open')) {
            sideMenu.classList.remove('open');
        }
    });

    // Update balance (got chatGPT to help me here)
    const balanceElement = document.querySelector('.balance-amount');
    const currentBalance = localStorage.getItem('currentBalance');
    if (currentBalance) {
        balanceElement.textContent = `$${currentBalance}`;
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'login.html';
});