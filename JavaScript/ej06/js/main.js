window.$ = Element.prototype.$ = function(selector) {
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);

    return (elems.length === 1) ? elems[0] : elems;
};

var muestra = (function(){
    "use strict";

    var muestra = function() {
        var enlace = $('.enlace');
        enlace.classList.add('oculto');

        var parrafo = enlace.previousElementSibling;
        var spans = parrafo.$('span.oculto');

        spans.classList.remove('oculto');
    };

    return muestra;

})();