const apiURL = "https://api.adviceslip.com/advice";
const adviceText = document.getElementById('advice');
const adviceId = document.getElementById('adviceId');

fetch(apiURL).then((response) => {
  return response.json();
}).then((data) => {
  adviceText.innerText = data['slip']['advice']
  adviceId.innerText = data['slip']['id']
})