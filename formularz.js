<script>
(
    function( $ ){
        $('body').on('click', '.platnosci label', function() {
            $('#edd-payment-mode-wrap').addClass('d-none');
            $('#edd_purchase_form_wrap').removeClass('d-none');
            $('.progress-line').addClass('progress-line-animate');
            $('.cart-kropka1').addClass('kropka1-animate');
            $('.cart-metoda-platnosci').addClass('kropka1-animate');
            $('.cart-kropka2').addClass('kropka2-animate');
            $('.cart-dane').addClass('kropka2-animate');
            $('.unactive-hr').addClass('active-hr');
            $('#edd_checkout_user_info input').each( function() {
                if ( $(this).val() !== "" ) $(this).parent().children('.payment-input').addClass('payment-input-clicked');
            });
        });
        $('body').on('click', '.edd-cancel a', function(e) {
            e.preventDefault();
            $('#edd-payment-mode-wrap').removeClass('d-none');
            $('#edd_purchase_form_wrap').addClass('d-none');
            $('.progress-line').removeClass('progress-line-animate');
            $('.cart-kropka1').removeClass('kropka1-animate');
            $('.cart-metoda-platnosci').removeClass('kropka1-animate');
            $('.cart-kropka2').removeClass('kropka2-animate');
            $('.cart-dane').removeClass('kropka2-animate');
            $('.unactive-hr').removeClass('active-hr');
        });
        $('body').on('focus', '#edd_checkout_user_info input', function(e) {
            $(this).parent().children('.payment-input').addClass('payment-input-clicked');
        });
        $('body').on('focusout', '#edd_checkout_user_info input', function(e) {
            if( $(this).parent().children('input').val() == "" ) $(this).parent().children('.payment-input').removeClass('payment-input-clicked');
        });
        
        var regex = /^[\s\p{L}]+$/u;
        var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        
        $('body').on('focusout', '#edd-first', function(e) {
            if ( $(this).val().length < 3 || !$(this).val().match( regex ) ) {
                $(this).parent().removeClass('success-icon');
                $(this).parent().addClass('error-icon');
                $('.imie-error-message').addClass('d-block');
                $('#edd-purchase-button').removeClass('button-finish');
            } else {
                $(this).parent().removeClass('error-icon');
                $(this).parent().addClass('success-icon');
                $('.imie-error-message').removeClass('d-block');
                if ( $('#edd-first').val().length >= 3 && $('#edd-last').val().length >= 3 && $('#edd-email').val().length >= 3 && $('#edd-first').val().match( regex ) && $('#edd-last').val().match( regex ) && 
                $('#edd-email').val().match( email ) && $('#bpmj-eddcm-terms').prop('checked') && $('#bpmj-eddcm-terms2').prop('checked') ) {
                    $('#edd-purchase-button').addClass('button-finish');
                }
            }
        });
        $('body').on('focusout', '#edd-last', function(e) {
            if ( $(this).val().length < 3 || !$(this).val().match( regex ) ) {
                $(this).parent().removeClass('success-icon');
                $(this).parent().addClass('error-icon');
                $('.nazwisko-error-message').addClass('d-block');
                $('#edd-purchase-button').removeClass('button-finish');
            } else {
                $(this).parent().removeClass('error-icon');
                $(this).parent().addClass('success-icon');
                $('.nazwisko-error-message').removeClass('d-block');
                if ( $('#edd-first').val().length >= 3 && $('#edd-last').val().length >= 3 && $('#edd-email').val().length >= 3 && $('#edd-first').val().match( regex ) && $('#edd-last').val().match( regex ) && 
                $('#edd-email').val().match( email ) && $('#bpmj-eddcm-terms').prop('checked') && $('#bpmj-eddcm-terms2').prop('checked') ) {
                    $('#edd-purchase-button').addClass('button-finish');
                }
            }
        });
        $('body').on('focusout', '#edd-email', function(e) {
            if ( $(this).val().length < 3 || !$(this).val().match( email ) ) {
                $(this).parent().removeClass('success-icon');
                $(this).parent().addClass('error-icon');
                $('.email-error-message').addClass('d-block');
                $('#edd-purchase-button').removeClass('button-finish');
            } else {
                $(this).parent().removeClass('error-icon');
                $(this).parent().addClass('success-icon');
                $('.email-error-message').removeClass('d-block');
                if ( $('#edd-first').val().length >= 3 && $('#edd-last').val().length >= 3 && $('#edd-email').val().length >= 3 && $('#edd-first').val().match( regex ) && $('#edd-last').val().match( regex ) && 
                $('#edd-email').val().match( email ) && $('#bpmj-eddcm-terms').prop('checked') && $('#bpmj-eddcm-terms2').prop('checked') ) {
                    $('#edd-purchase-button').addClass('button-finish');
                }
            }
        });
        
        $('body').on('click', '#edd-purchase-button', function(e) {
            if ( $('#edd-first').val().length < 3 || !$('#edd-first').val().match( email ) ) {
                $('#edd-first').parent().removeClass('success-icon');
                $('#edd-first').parent().addClass('error-icon');
                $('.imie-error-message').addClass('d-block');
            } else {
                $(this).parent().removeClass('error-icon');
                $(this).parent().addClass('success-icon');
                $('.imie-error-message').removeClass('d-block');
            }
 
            if ( $('#edd-last').val().length < 3 || !$('#edd-last').val().match( email ) ) {
                $('#edd-last').parent().removeClass('success-icon');
                $('#edd-last').parent().addClass('error-icon');
                $('.nazwisko-error-message').addClass('d-block');
            } else {
                $(this).parent().removeClass('error-icon');
                $(this).parent().addClass('success-icon');
                $('.imie-error-message').removeClass('d-block');
            }
            
            if ( $('#edd-email').val().length < 3 || !$('#edd-email').val().match( email ) ) {
                $('#edd-email').parent().removeClass('success-icon');
                $('#edd-email').parent().addClass('error-icon');
                $('.email-error-message').addClass('d-block');
            } else {
                $('#edd-email').parent().removeClass('error-icon');
                $('#edd-email').parent().addClass('success-icon');
                $('.email-error-message').removeClass('d-block');
            }   
            
            if ( $('#bpmj-eddcm-terms').prop('checked') ) {
                $('.regulamin-error-message').removeClass('d-block');
            } else {
                $('.regulamin-error-message').addClass('d-block');
            }
            
            if ( $('#bpmj-eddcm-terms2').prop('checked') ) {
                $('.polityka-error-message').removeClass('d-block');
            } else {
                $('.polityka-error-message').addClass('d-block');
            }
        });
        
        $('body').on('change', '#bpmj-eddcm-terms', function(e) {
            if ( $(this).prop('checked') ) {
                $('.regulamin-error-message').removeClass('d-block');
                if ( $('#edd-first').val().length >= 3 && $('#edd-last').val().length >= 3 && $('#edd-email').val().length >= 3 && $('#edd-first').val().match( regex ) && $('#edd-last').val().match( regex ) && 
                $('#edd-email').val().match( email ) && $('#bpmj-eddcm-terms').prop('checked') && $('#bpmj-eddcm-terms2').prop('checked') ) {
                    $('#edd-purchase-button').addClass('button-finish');
                } else {
                    $('#edd-purchase-button').removeClass('button-finish');
                }
            } else {
                $('.regulamin-error-message').addClass('d-block');
                $('#edd-purchase-button').removeClass('button-finish');
            }
        });
        $('body').on('change', '#bpmj-eddcm-terms2', function(e) {
            if ( $(this).prop('checked') ) {
                $('.polityka-error-message').removeClass('d-block');
                if ( $('#edd-first').val().length >= 3 && $('#edd-last').val().length >= 3 && $('#edd-email').val().length >= 3 && $('#edd-first').val().match( regex ) && $('#edd-last').val().match( regex ) && 
                $('#edd-email').val().match( email ) && $('#bpmj-eddcm-terms').prop('checked') && $('#bpmj-eddcm-terms2').prop('checked') ) {
                    $('#edd-purchase-button').addClass('button-finish');
                }
            } else {
                $('.polityka-error-message').addClass('d-block');
                $('#edd-purchase-button').removeClass('button-finish');
            }
        });
    }
)( jQuery );
</script>
