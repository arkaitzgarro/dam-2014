window.$ = Element.prototype.$ = function(selector) {
    var that = (this instanceof Element) ? this : document;
    var elems = that.querySelectorAll(selector);

    return (elems.length === 1) ? elems[0] : elems;
};

var anade = (function(){
    "use strict";

    var lista = $('#lista'),
        count = lista.children.length;

    var anade = function() {
        var li = document.createElement('li');
        li.innerText = "Elemento " + (++count);

        lista.appendChild(li);
    };

    return anade;

})();