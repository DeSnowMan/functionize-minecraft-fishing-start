// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === 'steve') {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    let randNum = Math.random();
    if (randNum < 0.7) {
      numCod++;
      FishyFish(numCod, numCodSpan,'Raw-Cod');
    } else if (randNum < 0.9) {
      numSalmon++;
      FishyFish(numSalmon, numSalmonSpan,'Raw-Salmon');
    } else if (randNum < 0.95) {
      numTropical++;
      FishyFish(numTropical, numTropicalSpan,'Tropical-Fish');
    } else {
      numPuffer++;
      FishyFish(numPuffer, numPufferSpan,'Pufferfish');
    }
  } else if (character === 'alex') {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    let randNum = Math.random();
    if (randNum < 0.1) {
      FishyFish(numCod, numCodSpan,'Raw-Cod');
    } else if (randNum < 0.2) {
      FishyFish(numSalmon, numSalmonSpan,'Raw-Salmon');
    } else if (randNum < 0.5) {
      FishyFish(numTropical, numTropicalSpan,'Tropical-Fish');
    } else {
      FishyFish(numPuffer, numPufferSpan,'Pufferfish');
    }
  }
}



function FishyFish(Fish, Span, img) {
  Fish++
  Span.innerHTML = Fish;
  resultImg.src = `img/${img}.png`;
  console.log(Fish)
}
