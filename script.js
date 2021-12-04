// Create and display the div
var div = document.createElement("div");
div.innerHTML = '<h1>Hello World!</h1><input type="text" value="#" />';
document.body.appendChild(div);

// Listen to the input box
div.querySelector("input").addEventListener("input", function(e) {
    var value = e.target.value
    if (value.match(/^#[0-9a-f]{6}$/i)) {
        document.body.style.backgroundColor = value
        div.querySelector("h1").style.color = getContrastingColor(value)
    } else {
        document.body.style.backgroundColor = "white"
        div.querySelector("h1").style.color = "black"
    }
});

// Functions
function getContrastingColor(color) {
    var rgb = hexToRgb(color)
    var isLight = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186
    return isLight ? "black" : "white"
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16) 
    } : null
};

