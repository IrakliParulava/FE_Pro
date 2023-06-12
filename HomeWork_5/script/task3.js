let currentId = null;

function getRandomAddress() {
  fetch('https://random-data-api.com/api/address/random_address')
    .then(response => response.json())
    .then(data => {
      let idElement = document.getElementById("id");
      let cityElement = document.getElementById("city");
      let countryElement = document.getElementById("country");
      
      if (currentId !== data.id) {
        currentId = data.id;
        updateHTML(idElement, data.id);
        updateHTML(cityElement, data.city);
        updateHTML(countryElement, data.country);
      }
    });
}

function updateHTML(element, value) {
  element.textContent = value;
}

setInterval(getRandomAddress, 1500);
