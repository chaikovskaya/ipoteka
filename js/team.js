
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

function initSliderTeamMore() {
    $(".js-slider-team-more").each(function(){
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
                    items: 3,
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
    });
}
function reInitSliderTeamMore() {
    $(".js-slider-team-more .js-slider-list").trigger('destroy.owl.carousel');
}

function initResizeWindowTeam() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        initSliderTeam();
        initSliderTeamMore();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        reInitSliderTeam();
        initSliderTeamMore();
    } else {
        reInitSliderTeam();
        reInitSliderTeamMore();
    }
}

$(document).ready(function () {
    initResizeWindowTeam();
    $(window).resize(function(){
        initResizeWindowTeam();
    });

    initAjaxMoreTeam();
});