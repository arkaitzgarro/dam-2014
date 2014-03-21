$(function(){
    'use strict';

    var $provincia = $('#provincia');
    var $municipio = $('#municipio');

    var mostrarProvincias = function(provincias) {
        var prov = $provincia.get(0);
        var mun = $municipio.get(0);

        prov.options[0].text = 'Seleccione...';
        mun.options[0].text = 'Seleccione una provincia';
        for(var cp in provincias) {
            prov.options.add(new Option(provincias[cp], cp));
        }

        $provincia.attr('disabled', false);
    };

    $provincia.on('change', function(e) {
        var $this = $(this),
            val = $this.val();

        if(val.trim().length > 0) {
            $.ajax({
                url : '../servidor/cargaMunicipiosJSON.php',
                type : 'POST',
                data : { provincia : $this.val() },
                dataType : 'json',
                cache : false,
                success : mostrarMunicipios,
                error : mostrarError
            });
        }
    });

    var mostrarMunicipios = function(municipios) {
        var el = $municipio.get(0);

        el.options.length = 0;
        el.options.add(new Option('Seleccione un municipio', null));
        for(var cp in municipios) {
            el.options.add(new Option(municipios[cp], cp));
        }

        $municipio.attr('disabled', false);
    };

    var mostrarError = function(jqXHR, status, error) {
        console.log(error);
    };

    $.ajax({
        url : '../servidor/cargaProvinciasJSON.php',
        dataType : 'json',
        cache : false,
        success : mostrarProvincias,
        error : mostrarError
    });
});