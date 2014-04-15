var tinyGoogleFontsScript = document.querySelector('script[src*="tiny-google-fonts"]'),
    googleFontClass = tinyGoogleFontsScript.getAttribute('data-font-class'), // Optional. Default is entire body text
    usedCharacters = '',
    findCharacters = function() {
        if (googleFontClass) {
            usedCharacters = googleFontClass.innerText.replace(/(.)(?=.*\1)/g, "");
        } else {
            usedCharacters = document.body.innerText.replace(/(.)(?=.*\1)/g, "");
        }
    },
    googleFontFamily = tinyGoogleFontsScript.getAttribute('data-font-family'),
    googleFontWeight = ':' + tinyGoogleFontsScript.getAttribute('data-font-weight') // Should be optional
    googleFontStyle = tinyGoogleFontsScript.getAttribute('data-font-style') // Should be optional
    googleFontsLink = '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=' + googleFontFamily + googleFontWeight + '&text=' + usedCharacters + '%20">';

console.log(tinyGoogleFontsScript);
console.log(googleFontClass);
console.log(usedCharacters);
console.log(googleFontFamily);
console.log(googleFontWeight);
console.log(googleFontStyle);
console.log(googleFontsLink);

//googleFontFamily.innerText.replace(/\s/g, '+');
//console.log(googleFontFamily);

document.head.innerHTML += googleFontsLink;
