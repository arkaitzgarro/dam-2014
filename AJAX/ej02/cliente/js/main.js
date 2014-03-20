$(function(){
    var noticias = [],
        intervalo = null,
        actual = 0,
        playing = false;

    var $ticker    = $("#ticker");
    var $detener   = $("#detener");
    var $anterior  = $("#anterior");
    var $siguiente = $("#siguiente");

    var guardarNoticia = function(text) {
        var fechaHora = new Date();
        var hora = fechaHora.getHours().toString() + ":" + fechaHora.getMinutes().toString() + ":" + fechaHora.getSeconds().toString();

        noticias.push({
            hora: hora,
            titular: text
        });

        actual = noticias.length - 1;

        mostrarNoticia(noticias[actual]);
    };

    var mostrarNoticia = function(noticia){
        var $noticia = $('<span/>', {
            html : "<strong>" + noticia.hora + "</strong> " + noticia.titular
        });

        $ticker.html($noticia);
        $ticker.css('background-color', '#FFFF99');

        setTimeout(limpiaTicker, 300);
    };

    var limpiaTicker = function(){
        $ticker.css('background-color', '#FAFAFA');
    };

    var iniciarIntervalo = function() {
        $anterior.attr('disabled', true);
        $siguiente.attr('disabled', true);

        intervalo = setInterval(function() {
            $.ajax({
                url : '../servidor/generaContenidos.php',
                cache : false,
                success : guardarNoticia,
                error : function(jqXHR, status, error) {
                    console.log(error);
                }
            });
        }, 3000);
    };

    var detenerIntervalo = function() {
        clearInterval(intervalo);

        $anterior.attr('disabled', false);
        $siguiente.attr('disabled', false);
    };

    var toggleIntervalo = function() {
        if(playing) {
            playing = false;
            detenerIntervalo();
        } else {
            iniciarIntervalo();
            playing = true;
        }
    };

    var anteriorNoticia = function() {
        actual = (actual === 0) ? noticias.length - 1 : --actual;

        mostrarNoticia(noticias[actual]);
    };

    var siguienteNoticia = function() {
        actual = (actual === noticias.length -1 ) ? 0 : ++actual;

        mostrarNoticia(noticias[actual]);
    };

    toggleIntervalo();
    $detener.on('click', toggleIntervalo);
    $anterior.on('click', anteriorNoticia);
    $siguiente.on('click', siguienteNoticia);

});