var scheneText = document.getElementById("scheneText");
while (scheneText.firstChild) {
    scheneText.removeChild(scheneText.firstChild);
    scheneText.appendChild(document.createTextNode(message));
}
