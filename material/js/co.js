window.onload = function() {
    // Check if the bottom-nav is being found by JS
    const nav = document.querySelector(".bottom-nav");
    if (nav) {
        nav.style.display = "flex";
    } else {
        console.error("Error: .bottom-nav element not found!");
    }

    // Also check if wallet data is loading
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedAddress) {
        document.getElementById("wallet-address").textContent = savedAddress;
        document.getElementById("connect-btn").textContent = "CONNECTED";
        document.getElementById("connect-btn").disabled = true;
        document.getElementById("connect-btn").style.backgroundColor = "#808080";
    }
};
