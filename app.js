const apiURL = "https://api.adviceslip.com/advice";
const adviceText = document.getElementById('advice');
const adviceId = document.getElementById('adviceId');

async function refresh(){
  const response = await fetch(apiURL);
  const data = await response.json();
  
  adviceText.innerText = `"${data.slip.advice}"`:
  adviceId.innerText = `${data.slip.id}`;
}

refresh();
