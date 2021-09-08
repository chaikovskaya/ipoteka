
function initSliderCardGallery() {
    $(".js-slider-card-gallery").each(function(){
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
            margin: 20,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    dots: false,
                },
                720: {
                    items: 1,
                },
                992: {
                    items: 1,
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

function initSliderCardBanks() {
    $(".js-slider-card-banks").each(function(){
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
            margin: 30,
            responsive: {
                0: {
                    items: 2,
                },
                720: {
                    items: 3,
                },
                992: {
                    items: 4,
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

function initSliderQuarters() {
    $(".js-slider-quarters").each(function(){
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
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                },
                720: {
                    items: 2,
                },
                992: {
                    items: 3,
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

function initSliderCardPlan() {
    $(".js-slider-card-plan").each(function(){
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
            margin: 20,
            dots: true,
            responsive: {
                0: {
                    items: 1,
                },
                720: {
                    items: 1,
                    dots: true,
                },
                992: {
                    items: 1,
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

function initSliderHousesNearby() {
    $(".js-slider-housesNearby").each(function(){
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
function reInitSliderHousesNearby() {
    $(".js-slider-housesNearby .js-slider-list").trigger('destroy.owl.carousel');
}

function initResizeCard() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        GLOBAL.widthWindow = 'isMobile';
        initSliderHousesNearby();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        GLOBAL.widthWindow = 'isTablet';
        reInitSliderHousesNearby();
    } else {
        GLOBAL.widthWindow = '';
        reInitSliderHousesNearby();
    }
}

$(document).ready(function () {
    initResizeCard();
    $(window).resize(function(){
        initResizeCard();
    });

    initSliderCardGallery();
    initSliderCardBanks();
    initSliderQuarters();
    initSliderCardPlan();
    ymaps.ready(initMap);
});