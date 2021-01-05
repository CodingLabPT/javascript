function upper() {
    var upper = document.getElementById("textarea").value;
    var output = document.getElementById("output");
    var upperCase = upper.toUpperCase();
    output.innerHTML = upperCase;
}

function lower() {
    var lower = document.getElementById("textarea").value;
    var output = document.getElementById("output");
    var lowerCase = lower.toLowerCase();
    output.innerHTML = lowerCase;
}

function capitalize(str) {
    var str = document.getElementById("textarea").value;
    let words = str.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    output.innerHTML = words.join(" ");
}