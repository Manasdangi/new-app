const weatherform = document.querySelector('form');
const input = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
const messageThree = document.querySelector('#message-3');
const messageFour = document.querySelector('#message-4');

weatherform.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value);
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  var city = input.value;
  input.value = '';
  fetch('http://localhost:3000/weather?address=' + city).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.update.country;
        messageTwo.textContent =
          'There is ' + data.update.temperature + ' degree celsuis';
        messageThree.textContent = 'There is ' + data.update.weather_condition;
        messageFour.textContent =
          'There is ' + data.update.temperature + ' percentage rain possible';
      }
    });
  });
});
