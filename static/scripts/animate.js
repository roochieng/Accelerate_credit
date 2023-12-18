document.addEventListener('DOMContentLoaded', function () {
    var typedElement = document.getElementById('typed-output');
    var phrases = ["SALARY ADVANCE", "CASH LOANS"];
    var index = 0;

    function toggleText() {
        typedElement.textContent = phrases[index];
        index = (index + 1) % phrases.length;
    }

    toggleText(); // Initial display

    setInterval(toggleText, 2000); // Toggle every 2000 milliseconds (2 seconds)
});
