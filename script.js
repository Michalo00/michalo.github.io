document.addEventListener("DOMContentLoaded", function() {
    // Set countdown date
    var countdownDate = new Date("2024-04-20T22:30:00").getTime();

    // Update date and time
    function updateTime() {
        var now = new Date();
        var datetime = now.toLocaleString();
        document.getElementById("datetime").innerText = datetime;
    }
    updateTime();
    setInterval(updateTime, 1000);

    // Countdown to specific date
    function updateCountdown() {
        var now = new Date().getTime();
        var distance = countdownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerText = "Countdown: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Task completion handling
    var tasks = document.querySelectorAll("#tasks li input[type='checkbox']");
    tasks.forEach(function(task) {
        task.addEventListener("change", function() {
            if (this.checked) {
                this.parentElement.style.textDecoration = "line-through";
            } else {
                this.parentElement.style.textDecoration = "none";
            }
        });
    });
});
