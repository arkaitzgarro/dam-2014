$(document).ready(function(){
    'use strict';

    // var $input = $("#main form .input_text");
    var $label = $("#main label[for=q]");
    var $input = $label.closest('form').find('input[name=q]');
    var $text = $label.text();

    $input.val($label.text()).addClass('hint');
    $label.remove();

    $input.on('focus', function(e) {
        var $this = $(this);
        var that = this;

        if($this.val() === $text) {
            setTimeout(function() {
                that.setSelectionRange(0, 0);
            }, 1);
        }
    });

    $input.on('blur', function(e) {
        var $this = $(this);

        if($this.val().length === 0) {
            $this.val($text).addClass('hint');
        }
    });

    $input.on('keydown', function(e) {
        var $this = $(this);

        if($this.val() === $text) {
            $this.val('').removeClass('hint');
        } else if($this.val().length === 0) {
            $this.val($text).addClass('hint');
            this.setSelectionRange(0, 0);
        }
    });

    $input.on('mousedown', function(e) {
        var $this = $(this);
        if($this.val() === $text) {
            this.setSelectionRange(0, 0);
            e.preventDefault();
        }
    });
});