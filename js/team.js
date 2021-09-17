
function initSliderTeam() {
    $(".js-slider-team").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $item = $list.find('.js-slider-item');

        var isStart = $item.length > 1 ? true : false;

        $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
            loop: isStart,
            mouseDrag: isStart,
            touchDrag: isStart,
            autoHeight: false,
            smartSpeed: 500,
            items: 1,
            margin: 20,
        }));
        if (!isStart) {
            $buttons.remove();
        }
    });
}
function reInitSliderTeam() {
    $(".js-slider-team .js-slider-list").trigger('destroy.owl.carousel');
}

function initAjaxMoreTeam() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        success: function () {
            if ( GLOBAL.widthWindow == 'isMobile') {
                reInitSliderTeam();
                initSliderTeam();
            }
        }
    };

    $('.JS-AjaxMore-Team').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initResizeWindowTeam() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        initSliderTeam();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        reInitSliderTeam();
    } else {
        reInitSliderTeam();
    }
}

$(document).ready(function () {
    initResizeWindowTeam();
    $(window).resize(function(){
        initResizeWindowTeam();
    });

    initAjaxMoreTeam();
});