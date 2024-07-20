let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function getFactOfEnteredNumber(event) {
  if (event.key === "Enter") {
    let userInputVal = userInputEl.value.trim();

    if (userInputVal === "") {
      alert("Enter a Number");
      return;
    }

    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
    let options = {
      method: "GET"
    };

    spinnerEl.classList.remove("d-none");
    factEl.classList.add("d-none");

    fetch(url, options)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonData) {
        factEl.classList.remove("d-none");
        spinnerEl.classList.add("d-none");

        let { fact } = jsonData;
        factEl.textContent = fact;
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please try again.');
        spinnerEl.classList.add("d-none");
        factEl.classList.remove("d-none");
        factEl.textContent = "Failed to fetch data";
      });
  }
}

userInputEl.addEventListener("keyup", getFactOfEnteredNumber);
