(function($){
    'use strict';

    $.fn.validate = function(options) {

        var opts = $.extend({}, $.fn.validate.defaults, options);

        return this.filter('form').each(function(){
            var $form = $(this);

            $form.on('submit', opts, _validateForm);
            $form.find(':input[data-validator]').on('blur', opts, _validateField);
        });
    };

    $.fn.validate.defaults = {
        'required' : {
            'error' : 'This field should not be blank.',
            'class' : 'error'
        },
        'email' : {
            'error' : 'This field is not a valid email.',
            'class' : 'error'
        },
        'password' : {
            'error' : 'This field is not a valid password',
            'class' : 'error'
        },
        'min' : {
            'error' : 'This field should be at least %1% character(s)',
            'class' : 'error'
        }
    };

    var _validateForm = function(e){
        var $form = $(this);

        var ok = true;
        $form.find(':input[data-validator]').each(function(){
            ok = _validateField.call(this, { data : e.data }) && ok;
        });

        if(!ok)
            e.preventDefault();
    };

    var _validateField = function(e){
        if(this.type === 'checkbox' && !this.checked) {
            _showError(this, e.data[this.dataset.validator]);

            return false;
        } else if(this.dataset.validator && _validator[this.dataset.validator]) {
            if(!_validator[this.dataset.validator](this.value)) {
                _showError(this, e.data[this.dataset.validator]);

                return false;
            } else {
                _hideError(this);
            }
        }

        return true;
    };

    var _showError = function(el, options){
        var $el = $(el);

        var $target = $el.data('target');
        if(!$target) {
            $target = $('<span/>', {
                'class' : options.class,
                'text' : options.error
            });

            $el.data('target', $target);
            $target.insertAfter($el);
        }
    };

    var _hideError = function(el){
        var $el = $(el);

        var $target = $el.data('target');
        if($target) {
            $target.remove();
        }
    };

    var _validator = (function(){

        var required = function(value) {
            return !(value === undefined || value === null || value.length === 0 || /^\s+$/.test(value));
        };

        var email = function(value) {
            return /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(value);
        };

        var password = function(value) {
            var may = /[A-Z]/;
            var min = /[a-z]/;
            var dig = /[0-9]/;

            return (value.length >= 6) && may.test(value) && min.test(value) && dig.test(value);
        };

        var max = function(value, top) {
            return value === undefined || value === null || value.length <= top;
        };

        var min = function(value, bottom) {
            return required(value) && value.length >= bottom;
        };

        return {
            required : required,
            email    : email,
            password : password,
            max      : max,
            min      : min
        };
    })();
})(jQuery);

// Usage
// $('form').validate();