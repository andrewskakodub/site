function showCard(planet) {
  var card = document.getElementById(planet + '-card');
  
  if (card.style.display === 'none') {
    card.style.display = 'block';
  } else {
    card.style.display = 'none';
  }
}