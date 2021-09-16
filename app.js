var primaryButton = document.querySelector("#btn-primary");
var txtArea = document.querySelector('[id="paragraph"]');
var outputDiv = document.querySelector("#outputDiv");
// var serverURL = "https://api.funtranslations.com/translate/klingon.json";
// var serverURL = "https://api.funtranslations.com/translate/romulan.json";
var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
function constructURL(text) {
  return serverURL + "?text=" + text;
}

primaryButton.addEventListener("click", function handler() {
  let inputText = txtArea.value;
  fetch(constructURL(inputText))
    .then((res) => res.json())
    .then((json) => (outputDiv.innerText = json.contents.translation))
    .catch((error) => console.log("hellooooo"));
});
