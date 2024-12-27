
const openModalBtn = document.getElementById('openModalBtn');
const walletModal = document.getElementById('walletModal');
const closeBtn = document.querySelector('.close-btn');
const connectWalletBtn = document.getElementById('connectWallet');
const cancelWalletBtn = document.getElementById('cancelWallet');
const statusMessage = document.getElementById('statusMessage');


openModalBtn.addEventListener('click', () => {
    walletModal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
    walletModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === walletModal) {
        walletModal.style.display = 'none';
    }
});




cancelWalletBtn.addEventListener('click', () => {
    walletModal.style.display = 'none';
    statusMessage.textContent = '';
});
