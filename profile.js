window.addEventListener('DOMContentLoaded', function() {
    var welcomeBanner = document.querySelector('.welcome-banner');
    
    setTimeout(function() {
      welcomeBanner.classList.add('hidden');
    }, 3000); // Adjust the delay (in milliseconds) to control how long the banner is displayed
  });
  