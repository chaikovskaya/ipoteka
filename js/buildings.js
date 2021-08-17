
function initAjaxMore() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        success: function () {
            ymaps.ready(initMap);
            if ( GLOBAL.widthWindow == 'isMobile') {
                reInitSliderBuildings();
                initSliderBuildings();
            }
        }
    };

    $('.JS-AjaxMore').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initSelectSort() {
    $('.js-select-sort').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '',
        labelBuilder: function(itemData) {
            return '<span class="' +
                itemData.className +
                '">' +
                itemData.text +
                '</span>';
        },
    });
}

function initShowMoreFilter(showmoreExtra) {
    if (typeof(ShowMore) === 'undefined' || !jQuery.isFunction(ShowMore)) {
        return false;
    }
    var common = { },
        showmoreExtra = showmoreExtra || {};

    $('.JS-ShowMore-Filter').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('showmore'));
        new ShowMore(this, jQuery.extend({}, common, local, showmoreExtra));
    });
}

function initSliderBuildings() {
    $(".js-slider-buildings").each(function(){
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
            items: 1,
            margin: 20,
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
function reInitSliderBuildings() {
    $(".js-slider-buildings .js-slider-list").trigger('destroy.owl.carousel');
}

function initSliderUsefulLinks() {
    $(".js-slider-useful-links").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
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
                    mergeFit:true,
                },
                992: {
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
function reInitSliderUsefulLinks() {
    $(".js-slider-useful-links .js-slider-list").trigger('destroy.owl.carousel');
}

function initResizeWindowBuilding() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        var localExtraProps = GLOBAL.parseData(jQuery('.JS-ShowMore-Filter').data('showmore-extra'));
        initShowMoreFilter(localExtraProps);

        initSliderBuildings();
        initSliderUsefulLinks();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        var localExtraProps = GLOBAL.parseData(jQuery('.JS-ShowMore-Filter').data('showmore-extra'));
        initShowMoreFilter(localExtraProps);

        reInitSliderBuildings();
        initSliderUsefulLinks();
    } else {
        initShowMoreFilter();
        reInitSliderBuildings();
        reInitSliderUsefulLinks();
    }
}


$(document).ready(function () {
    initResizeWindowBuilding();
    $(window).resize(function(){
        initResizeWindowBuilding();
    });

    initSelectSort();
    ymaps.ready(initMap);
    initAjaxMore();
});