window.onload = function() {
  let coins = localStorage.getItem('coins') || 0;
  document.getElementById('coinCount').textContent = coins;
}

function addCoin() {
  let coins = parseInt(localStorage.getItem('coins') || 0);
  coins++;
  localStorage.setItem('coins', coins); // Save it
  document.getElementById('coinCount').textContent = coins;
}
function playMusic() {
    audio.play();
    const audio = document.getElementById("bg-music");
}
