var APP = APP || {};

APP.palindromo = (function(){
    "use strict";

    var palindromo = function(str) {
        str = str.trim().replace(/ /gi, "").toLowerCase();
        var pal = str.split("").reverse().join("");

        return pal === str;
    };

    return palindromo;
})();

console.log(APP.palindromo("radar"));
console.log(APP.palindromo("RADAR"));
console.log(APP.palindromo("La ruta nos aporto otro paso natural"));
console.log(APP.palindromo("Arkaitz"));