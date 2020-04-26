(function() {
    var tinyGoogleFontsScript = document.querySelector('script[src*="tiny-google-fonts"]'),
        googleFontClass = tinyGoogleFontsScript.getAttribute('data-font-class'),
        googleFonts = tinyGoogleFontsScript.getAttribute('data-fonts'),
        googleFontClassText = document.querySelector('.' + googleFontClass).innerText.replace(/(.)(?=.*\1)|\n| /g, ''),
        allText = document.body.innerText.replace(/(.)(?=.*\1)|\n| /g, ''),
        usedCharacters = (googleFontClass) ? googleFontClassText : allText;

    document.head.innerHTML += '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=' + googleFonts + '&text=' + usedCharacters + '%20">';
    document.body.parentNode.classList.add('tiny-google-fonts');
})();
