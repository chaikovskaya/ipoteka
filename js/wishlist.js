

function initSliderWishlist() {
    $(".js-slider-wishlist").each(function(){
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
    });
}
function reInitSliderWishlist() {
    $(".js-slider-wishlist .js-slider-list").trigger('destroy.owl.carousel');
}

function initAjaxMoreWishlist() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        success: function () {
            if ( GLOBAL.widthWindow == 'isMobile') {
                reInitSliderWishlist();
                initSliderWishlist();
            }
        }
    };

    $('.JS-AjaxMore-Wishlist').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initResizeWindowWishlist() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        initSliderWishlist();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        reInitSliderWishlist();
    } else {
        reInitSliderWishlist();
    }
}

$(document).ready(function () {
    initResizeWindowWishlist();
    $(window).resize(function(){
        initResizeWindowWishlist();
    });

    initAjaxMoreWishlist();
});