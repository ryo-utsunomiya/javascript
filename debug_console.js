function DebugConsole() {
    var conloseElem = document.createElement.("div");

    conloseElem.id = "debug";
    conloseElem.style.fontFamily = "monospace";
    conloseElem.style.color = "#333333";

    document.body.appendChild(consoleElem);

    consoleElem.appendChild(document.createElement(hr));

    this.shaded = false;

}

DebugConsole.prototype.displayMsg = function(msg) {
    var msgElement = document.createElement("div");

    msgElement.appendChild(document.createTextNode(msg));

    msgElement.style.backgroundColor = this.shaded ? "#EEEEEE" : "#FFFFFF";

    var consoleElem = document.getElementById("debug");

    consoleElem.appendChild(msgElement);

    this.shaded = !this.shaded;
}