document.addEventListener("DOMContentLoaded", function() {
    let savedBalance = localStorage.getItem("coinBalance") || 0;
    document.getElementById("balance").innerText = savedBalance;

    // টাস্ক হাইড হওয়া সংক্রান্ত ডাটা লোড করা
    let hiddenTasks = JSON.parse(localStorage.getItem("hiddenTasks")) || {};
    let currentTime = new Date().getTime();

    document.querySelectorAll(".task").forEach((task, index) => {
        let taskId = `task_${index}`;
        
        if (hiddenTasks[taskId] && currentTime < hiddenTasks[taskId]) {
            task.style.display = "none"; // ৬ ঘণ্টার মধ্যে থাকলে হাইড করো
        }
    });
});

function completeTask(amount, url, taskElement) {
    let currentBalance = localStorage.getItem("coinBalance");
    currentBalance = currentBalance ? parseInt(currentBalance) : 0;

    let newBalance = currentBalance + amount;
    localStorage.setItem("coinBalance", newBalance);

    document.getElementById("balance").innerText = newBalance;

    // টাস্ক হাইড করা
    let taskId = taskElement.getAttribute("data-id");
    taskElement.style.display = "none";

    // ৬ ঘণ্টা পর আবার দেখানোর জন্য সময় সেট করা
    let hiddenTasks = JSON.parse(localStorage.getItem("hiddenTasks")) || {};
    hiddenTasks[taskId] = new Date().getTime() + (6 * 60 * 60 * 1000); // ৬ ঘণ্টা পর
    localStorage.setItem("hiddenTasks", JSON.stringify(hiddenTasks));

    // নতুন ট্যাবে লিংক ওপেন করা
    window.open(url, "_blank");

    
}
