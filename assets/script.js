const resultElement = document.getElementById("rating");
const stars = document.querySelectorAll(".rating input");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    resultElement.textContent = `You Rated This ${star.value} Stars!`;
  });
});

let i = 2;
function increment() {
  i++;
  if (i >= 3) {
    const element = document.getElementById('numberOfPeople');
    if (element.style.display === 'none') {
      element.style.display = 'flex';
    } else {
      element.style.display = 'flex';
    }
  }
  if (i >= 4) {
    const element = document.getElementById('rate');
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'block';
    }
    const test = document.getElementById('nextButton');
    test.style.display = 'none'
  }
  console.log(i);
};



function readUserInput() {
  const userInputBill = document.getElementById('bill').value;
  alert(userInputBill);
  const userInputPeople = document.getElementById('people').value;
  alert(userInputPeople);
  alert(resultElement.textContent);
}


function total() {
  var peopleValue = document.getElementById('people').value;

  if (peopleValue <= 3) {
    tipPerc = 0.2;
  } else if (peopleValue >= 7 || peopleValue === '9+') {
    tipPerc = 0.3;
  } else {
    tipPerc = 0.25;
  }

  console.log(tipPerc);
  return tipPerc;
}
function total2 () {
    if (resultElement.textContent == 'You Rated This 1 Stars!') {
    var tipPerc2 = .15;
  }else if (resultElement.textContent == 'You Rated This 2 Stars!'){
    var tipPerc2 = .18;
  }else if (resultElement.textContent == 'You Rated This 3 Stars!'){
    var tipPerc2 = .2;
  }else if (resultElement.textContent == 'You Rated This 4 Stars!'){
    var tipPerc2 = .25;
  }else if (resultElement.textContent == 'You Rated This 5 Stars!'){
    var tipPerc2 = .3;
  }
  console.log(tipPerc2);
  return tipPerc2;
}

function test() {
  var perc1 = total();
  var perc2 = total2();
  const userInputBill = document.getElementById('bill').value;

  var averageTipPerc = (userInputBill) * ((1) + (perc1 + perc2) / 2);
  console.log(averageTipPerc)
  var roundedNumber = averageTipPerc.toFixed(2);
  console.log(roundedNumber)
  console.log(userInputBill)
  var totalTip = (roundedNumber - userInputBill).toFixed(2);
  alert("You Should Tip " + (totalTip) + ", Your Total Bill is $" + roundedNumber + "!")
  location.reload();
}