document.addEventListener('DOMContentLoaded', function () {
    var salaryAdvance = document.querySelector('.salary-advance');
    var cashLoans = document.querySelector('.cash-loans');

    function updateColor() {
      salaryAdvance.style.setProperty('color', '300383', 'important');
      cashLoans.style.setProperty('color', '300383', 'important');
    }

    setInterval(updateColor, 2000); // Update color every 2000 milliseconds (2 seconds)
  });
