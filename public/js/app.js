// console.log('Client side javascript file is loaded!');

// const data = document.querySelector('input');

// console.log(data);

const weatherform = document.querySelector('form');
const input = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
weatherform.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value);
  //   console.log('testing');
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
        messageTwo.textContent = data.update.temperature;
      }
    });
  });
});