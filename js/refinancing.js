
function initSliderRuler() {
    jQuery('.js-slider-ruler').each(function() {
        var $element = $(this),
            $track = $element.find('.js-slider-rating-track'),
            $amount = $element.find('.js-slider-rating-value'),
            $handle = $element.find('.js-ui-slider-handle'),
            $text = $element.find('.js-slider-rating-text'),
            min = $element.data('range-min') || 0,
            max = $element.data('range-max') || 0,
            step = $element.data('range-step') || 0,
            start = $element.data('range-start') || 0,
            classActive = $element.data('range-active') || 'active',
            units = $element.data('range-units') || '';

        $track.slider({
            range: "min",
            value: start,
            min: min,
            max: max,
            step: step,
            classes: {
                "ui-slider-handle": "slider-range-button",
                "ui-slider-range": "slider-range-quantity"
            },
            create: function() {
                var str = String($(this).slider("value")),
                    parsedStr = str.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
                $text.text(parsedStr + units);

                $amount.val( $track.slider("value") );
            },
            slide: function( event, ui ) {
                var str = String(ui.value),
                    parsedStr = str.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
                $text.text(parsedStr + units);

                $amount.val( ui.value );
            },
            start: function( event, ui ) {
                if (!($element.hasClass(classActive))) {
                    $element.addClass(classActive);
                }
            }
        });
    });
}


$(document).ready(function () {
    initSliderRuler();
});