
function initSliderCompanyImportant() {
    $(".js-slider-company-important").each(function(){
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
            responsive: {
                0: {
                    margin: 20,
                },
                720: {
                    margin: 30,
                },
            },
        }));
        if (!isStart) {
            $buttons.remove();
        }
    });
}
function reInitSliderCompanyImportant() {
    $(".js-slider-company-important .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderCompanyActivity() {
    $(".js-slider-company-activity").each(function(){
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
        if (!isStart) {
            $buttons.remove();
        }
    });
}
function reInitSliderCompanyActivity() {
    $(".js-slider-company-activity .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderClients() {
    $(".js-slider-clients").each(function(){
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
            merge:true,
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
                    items: 4,
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

function initSliderCompanyProgress() {
    $(".js-slider-company-progress").each(function(){
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
            merge:true,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                720: {
                    items: 1,
                    margin: 30,
                },
                992: {
                    items: 4,
                    margin: 30,
                },
            },
        }));
    });
}
function reInitSliderCompanyProgress() {
    $(".js-slider-company-progress .js-slider-list").trigger('destroy.owl.carousel');
}

function initResizeWindowCompany() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        initSliderCompanyImportant();
        initSliderCompanyActivity();
        initSliderCompanyProgress();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        initSliderCompanyImportant();
        initSliderCompanyActivity();
        initSliderCompanyProgress();
    } else {
        reInitSliderCompanyImportant();
        reInitSliderCompanyActivity();
        reInitSliderCompanyProgress();
    }
}

$(document).ready(function () {
    initResizeWindowCompany();
    $(window).resize(function(){
        initResizeWindowCompany();
    });

    initSliderClients();
});