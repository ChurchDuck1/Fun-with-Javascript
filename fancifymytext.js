function makeBigger() {
    document.getElementById("textArea").style.fontSize = "24pt";
}
function styleText() {
    var textArea = document.getElementById("textArea");
    
    if (document.getElementById("fancy").checked) {
        //FancyShmancy styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
        //BoringBetty styles
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
function mooText() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    text = text.toUpperCase();
    var sentences = text.split(".");
    
    //add "-Moo" to the last word of each sentence
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        sentences[i] = " " + words.join(" ");
    }
    text = sentences.join(".");
    textArea.value = text;
}