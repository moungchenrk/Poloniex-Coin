
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

connectWalletBtn.addEventListener('click', () => {
    statusMessage.textContent = 'Connecting to your TON wallet...';


        const tonConnectUI = new Ton_CONNECT_UI_TonConnectUI({
            //Define the menifast
            manifestUrl: "https://moungchenrk.github.io/Poloniex-Coin/tonconnect-manifest.json",
            buttonRootId: "ton-connect"
            
            }
            );
            async function connectToWallet() {
                    const connectedWallet = await tonConnectUI.connectWallet();
                    // Do something with connectedWallet if needed
                    console.log(connectedWallet);
                }
            
                // Call the function
                connectToWallet().catch(error => {
                    console.error("Error connecting to wallet:", error);
                });
            






    setTimeout(() => {
        statusMessage.textContent = 'oops try again something wents wrong!';
    }, 2000);
});


cancelWalletBtn.addEventListener('click', () => {
    walletModal.style.display = 'none';
    statusMessage.textContent = '';
});
