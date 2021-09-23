

function initSliderSecondary() {
    $(".js-slider-secondary").each(function(){
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
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                720: {
                    items: 2,
                    margin: 30,
                },
            },
        }));
    });
}
function reInitSliderSecondary() {
    $(".js-slider-secondary .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderSecondarySrv() {
    $(".js-slider-secondary-srv").each(function(){
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
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                720: {
                    items: 2,
                    margin: 30,
                },
            },
        }));
    });
}
function reInitSliderSecondarySrv() {
    $(".js-slider-secondary-srv .js-slider-list").trigger('destroy.owl.carousel');
}

function initResizeWindowSecondary() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        initSliderSecondary();
        initSliderSecondarySrv();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        initSliderSecondary();
        initSliderSecondarySrv();
    } else {
        reInitSliderSecondary();
        reInitSliderSecondarySrv();
    }
}

$(document).ready(function () {
    initResizeWindowSecondary();
    $(window).resize(function(){
        initResizeWindowSecondary();
    });
});