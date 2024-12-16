const platesSection = document.querySelector('.plates');
const addPlateBtn = document.querySelector('button');
const posText = document.querySelector('p');
const inputValue = document.getElementById("num").value;


addPlateBtn.addEventListener('click', addPlateNGuess );

function addPlateNGuess() {
  const newPlateElement = document.createElement('div');
  newPlateElement.id = 'newplate';
  const randomPos = generateRandomNumber();

  const marks = {
    accurate: "Hurray you have guessed the position ",
    partialllyAccurate: "You have guessed the position partially, The position is at "+" "+ (randomPos+1),
    notAccurate: "Oops! You have guessed the wrong position,The position is at "+" "+ (randomPos+1)
}
  
  //platesSection.insertBefore(newPlateElement, platesSection[randomPos]);
  //alert('New plate added at position ' + (randomPos+1));
  
  platesSection.insertBefore(newPlateElement, platesSection.children[randomPos]);
  //posText.textContent = 'The position is at '+" "+ (randomPos+1);//posText.textContent +" "+ (randomPos+1);
  if(document.getElementById("num").value === randomPos) {
    posText.textContent = marks.accurate;
  } else if((document.getElementById("num").value === (randomPos+1)) ||(document.getElementById("num").value === (randomPos-1))) {
    posText.textContent = marks.partialllyAccurate;
  } else {
    posText.textContent = marks.notAccurate;
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * platesSection.children.length);
}
