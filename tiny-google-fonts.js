var tinyGoogleFontsScript = document.querySelector('script[src*="tiny-google-fonts"]');
var googleFontClass = tinyGoogleFontsScript.getAttribute('data-font-class');
var googleFonts= tinyGoogleFontsScript.getAttribute('data-fonts');
var usedCharacters = document.body.innerText.replace(/\n| |(.)(?=.*\1)/g, '');

findUsedCharacters = function() {
    if (googleFontClass) {
        usedCharacters = document.querySelector('.' + googleFontClass).innerText.replace(/(.)(?=.*\1)|\n| /g, '');
    }
}

findUsedCharacters();

var googleFontsLink = '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=' + googleFonts + '&text=' + usedCharacters + '%20">';

document.head.innerHTML += googleFontsLink;
document.body.parentNode.classList.add('tiny-google-fonts');
