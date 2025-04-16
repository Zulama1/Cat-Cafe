 // Load coins when page opens
  window.onload = function() {
      let coins = localStorage.getItem('coins') || 0;
      document.getElementById('coinCount').textContent = coins;
    }
    function buyItem(cost) {
      let coins = parseInt(localStorage.getItem('coins') || 0);
      if (coins >= cost) {
        coins -= cost;
        localStorage.setItem('coins', coins);
        document.getElementById('coinCount').textContent = coins;
        alert("Item bought! 🐾");
      } else {
        alert("Not enough coins! 😿");
      }
    }
    function goBack(){
      window.history.back();
    }
    function addCoin() {
      let coins = parseInt(localStorage.getItem('coins') || 0);
      coins++;
      localStorage.setItem('coins', coins); // Save it
      document.getElementById('coinCount').textContent = coins;
    }
  
  