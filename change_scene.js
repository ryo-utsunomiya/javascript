function changeScene(decision) {
    var history = document.getElementById("history");
    if (curScene != 0) {
        var decisionElem = document.createElement("p");
        decisionElem.appendChild(document.createTextNode("決定" + decision + "-> シーン" + "curScene" + ":" + message));
        history.appendChild(decisionElem);
    }
    else {
        while (history.firstChild) {
            history.removeChild(history.firstChild);
        }
    }
}
