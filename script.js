const input = document.querySelector('input');
const text = document.querySelector('h1');

input.addEventListener('input', function (e) {
    var value = e.target.value;

    // Shitty regex to check if the input is a valid hex color
    // This is not a good way to do this, but if it works, it works :D
    // The same goes for hexToRgb()
    if (value.match(/^[0-9a-f]{6}$/i)) {
        text.style.color = '#' + value;
        text.style.backgroundColor = '#' + value;
        text.style.borderColor = '#' + value;
        text.style.color = getContrastingColor(value);
        text.innerText = hexToRgb(`#` + value).r + `, ` + hexToRgb(`#` + value).g + `, ` + hexToRgb(`#` + value).b;

    } else {
        text.innerText = `Please enter a valid hex code`;
        text.style.backgroundColor = `transparent`;
        text.style.color = `black`;
    }
});


// Functions
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) 
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
};

function getContrastingColor(color) {
    var rgb = hexToRgb(color)
    var isLight = rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186
    return isLight ? "black" : "white"
};

