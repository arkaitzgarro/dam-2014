$(function(){
    $(document).on('change', 'select[name=day]', function(e){
        var $this = $(this);

        $.ajax({
            url : 'data/specials.json',
            data : { data : $this.val() },
            dataType : 'json',
            cache : false,
            success : function(data, textStatus, jqXHR) {
                console.log(data);
            },
            error : function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    });
});