
function initSliderBuilders() {
    $(".js-slider-builders").each(function(){
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
function reInitSliderBuilders() {
    $(".js-slider-builders .js-slider-list").trigger('destroy.owl.carousel');
}

function initAjaxMoreBuilders() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        success: function () {
            if ( GLOBAL.widthWindow == 'isMobile') {
                reInitSliderBuilders();
                initSliderBuilders();
            }
        }
    };

    $('.JS-AjaxMore-Builders').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initSliderBuildersPlus() {
    $(".js-slider-builders-plus").each(function(){
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
function reInitSliderBuildersPlus() {
    $(".js-slider-builders-plus .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderBuildersMore() {
    $(".js-slider-builders-more").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
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
                992: {
                    items: 3,
                    margin: 30,
                },
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
    });
}

function initResizeWindowBuilders() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        initSliderBuilders();
        initSliderBuildersPlus();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        reInitSliderBuilders();
        reInitSliderBuildersPlus();
    } else {
        reInitSliderBuilders();
        reInitSliderBuildersPlus();
    }
}


$(document).ready(function () {
    initResizeWindowBuilders();
    $(window).resize(function(){
        initResizeWindowBuilders();
    });

    initAjaxMoreBuilders();
    initSliderBuildersMore();
});