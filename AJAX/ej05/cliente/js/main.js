$(function(){
    'use strict';

    var $municipio = $('#municipio');
    var $lista = $('<div/>').insertAfter($municipio);

    $municipio.data('resultados', $lista);

    var obtenerMunicipios = function() {
        var $this = $(this),
            val = $this.val();

        if(val.trim().length > 0) {
            $.ajax({
                url : '../servidor/autocompletaMunicipios.php',
                type : 'POST',
                data : { municipio : $this.val() },
                dataType : 'json',
                cache : false,
                success : mostrarMunicipios,
                error : mostrarError
            });
        }
    };

    var mostrarMunicipios = function(municipios) {

        if(municipios.length > 0) {
            var $ul = $('<ul/>');

            var lis = [];
            for(var i in municipios) {
                var $li = $('<li/>', {
                    html : municipios[i].replace(new RegExp("(" + $municipio.val() + ")", "gi"), '<strong>$1</strong>')
                });
                lis.push($li[0]);
            }

            $ul.append(lis);
            $lista.addClass('resultados');
            $lista.html($ul);
            $lista.show();
        } else {
            $lista.hide();
        }

    };

    var mostrarError = function(jqXHR, status, error) {
        console.log(error);
    };

    $(document).on('click', ':not(#municipio, .resultados)', function(){
        $lista.hide();
    });

    $municipio.on('keyup', obtenerMunicipios);
});