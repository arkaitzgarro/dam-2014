var APP = APP || {};

APP.mayMin = (function(){
    "use strict";

    var MAY = "MAY",
        MIN = "MIN",
        MIX = "MIX";

    var validarMin = function(str) {
        return str && (str === str.toLowerCase());
    };

    var validarMay = function(str) {
        return str && (str === str.toUpperCase());
    };

    var validarMayMin = function(str) {
        var resultado;

        if(validarMay(str)) {
            return MAY;
        } else if(validarMin(str)) {
            return MIN;
        } else {
            return MIX;
        }
    };

    return validarMayMin;
})();

console.log(APP.mayMin("ARKAITZ"));
console.log(APP.mayMin("arkaitz"));
console.log(APP.mayMin("ArKaItZ"));