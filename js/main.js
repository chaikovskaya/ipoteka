/*--GLOBAL--*/
var GLOBAL = GLOBAL || {};
GLOBAL.widthWindow = GLOBAL.widthWindow || {};
GLOBAL.FORMERROR = GLOBAL.FORMERROR || {};
GLOBAL.FORMERROR.REQUIRED = GLOBAL.FORMERROR.REQUIRED || '';
GLOBAL.FORMERROR.EMAIL = GLOBAL.FORMERROR.EMAIL || '';
GLOBAL.mobile = GLOBAL.mobile || 720;
GLOBAL.tablet = GLOBAL.tablet || 992;

GLOBAL.parseData = function parseData(data) {
    try {
        data = JSON.parse(data.replace(/'/gim, '"'));
    } catch(e) {
        data = {};
    }
    return data;
};


GLOBAL.owl = GLOBAL.owl || {};
GLOBAL.owl.common = GLOBAL.owl.common || {};
GLOBAL.owl.common.loop = true;
GLOBAL.owl.common.dots = false;
GLOBAL.owl.common.margin = 0;
GLOBAL.owl.common.responsiveClass = true;
GLOBAL.owl.common.autoHeight = true;
GLOBAL.owl.common.mouseDrag = true;
GLOBAL.owl.common.nav = false;
/*--/global--*/

function isMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
}

function initDropdown() {
    if (typeof(Dropdown) === 'undefined' || !jQuery.isFunction(Dropdown)) {
        return false;
    }

    var common = {};

    $('.JS-Dropdown').not('.JS-Dropdown-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('dropdown'));
        new Dropdown(this, jQuery.extend({}, common, local));
    });
}

function initScroll() {
    $('.js-custom-scroll').each(function(){
        var customScroll = this;
        new SimpleBar(customScroll, {
            autoHide: false
        });
    });
}

function initSliderAwards() {
    $(".js-slider-awards").each(function(){
        var $element = $(this),
            $list = $element.find('.js-slider-list'),
            $buttons = $element.find('.js-slider-buttons'),
            $prev = $element.find('.js-slider-prev'),
            $next = $element.find('.js-slider-next'),
            $item = $list.find('.js-slider-item');

        if ($item.length > 1) {
            $list.owlCarousel(jQuery.extend({}, GLOBAL.owl.common, {
                autoHeight: false,
                smartSpeed: 500,
                responsive: {
                    0: {
                        items: 1,
                    },
                    720: {
                        items: 2,
                        mouseDrag: true,
                    },
                    992: {
                        items: 3,
                        autoWidth: true,
                    },
                },
            }));
            $prev.click(function(){
                $list.trigger("prev.owl.carousel");
            });
            $next.click(function(){
                $list.trigger("next.owl.carousel");
            });
        } else {
            $buttons.remove();
        }
    });
}

function initAdaptiveMenu() {
    $('.js-adaptivemenu').each(function() {
        var $navItemMore = $(this).find('.js-adaptivemenu-more'),
            $navItems = $(this).find('.js-adaptivemenu-item'),
            targetClass = '.js-adaptivemenu-target',
            navItemWidth = $navItemMore.width(),
            windowWidth = $(this).width();

        $navItemMore.before($(targetClass + ' > li'));

        $navItems.each(function () {
            navItemWidth += $(this).width();
        });

        navItemWidth > windowWidth ? $navItemMore.show() : $navItemMore.hide();

        while (navItemWidth > windowWidth) {
            navItemWidth -= $navItems.last().width();
            $navItems.last().prependTo(targetClass);
            $navItems.splice(-1, 1);
        }
    });
}


function initResizeWindow() {
    var width = $(window).width();
    if (width <= GLOBAL.mobile) {
        GLOBAL.widthWindow = 'isMobile';
    } else if (width <= GLOBAL.tablet) {
        GLOBAL.widthWindow = 'isTablet';
        initAdaptiveMenu();
    } else {
        GLOBAL.widthWindow = '';
        initAdaptiveMenu();
    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
    });

    initDropdown();
    initScroll();

    initSliderAwards();
});
