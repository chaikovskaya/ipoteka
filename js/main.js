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
        new SimpleBar(this, {
            autoHide: false
        });
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

function initSelect() {
    $('.js-select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '<b class="selectric-button"><i class="selectric-icon"></i></b>',
    });
}

function initTab() {
    if (typeof(Tab) === 'undefined' || !jQuery.isFunction(Tab)) {
        return false;
    }

    var common = {};

    jQuery('.JS-Tab').not('.JS-Tab-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('tab'));
        new Tab(this, jQuery.extend({}, common, local));
    });
}

function initTabSimple() {
    if (typeof(Tab) === 'undefined' || !jQuery.isFunction(Tab)) {
        return false;
    }

    var common = {
        onToggle: function (elem) {
            var positionX = elem.offsetLeft || 0,
                paddingLeft = 15;

            $(elem).parents('.JS-Tab-Simple-Nav').scrollLeft(positionX - paddingLeft);
        }
    };

    jQuery('.JS-Tab-Simple').not('.JS-Tab-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('tab'));
        new Tab(this, jQuery.extend({}, common, local));
    });
}

function initSliderNew() {
    $(".js-slider-new").each(function(){
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
                    mouseDrag: true,
                    margin: 20,
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

function initSliderAbout() {
    $(".js-slider-about").each(function(){
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
            dots: isStart,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                720: {
                    items: 2,
                    mouseDrag: true,
                    margin: 20,
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

function initSliderViewed() {
	$(".js-slider-viewed").each(function(){
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
            dots: isStart,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                720: {
                    items: 2,
                    mouseDrag: true,
                    margin: 20,
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

function initSliderHouse() {
    $(".js-slider-house").each(function(){
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
            dots: isStart,
            responsive: {
                0: {
                },
                720: {
                },
                992: {
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

function initSliderAction() {
    $(".js-slider-action").each(function(){
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
            dots: isStart,
            responsive: {
                0: {
                },
                720: {
                },
                992: {
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

function initSliderVisited() {
    $(".js-slider-visited").each(function(){
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
        $prev.click(function(){
            $list.trigger("prev.owl.carousel");
        });
        $next.click(function(){
            $list.trigger("next.owl.carousel");
        });
    });
}

function initSelectMore() {
    $(".js-select-more").each(function(){
        var $element = $(this),
            $link = $element.find('.js-select-more-link'),
            classActive = $element.data('select-more');

        $link.click(function(){
            $element.addClass(classActive);
        });
    });
}

function initExpand() {
    jQuery('.js-expand').each(function() {
        var $element = $(this),
            $block = $element.find('.js-expand-block'),
            $link = $element.find('.js-expand-link'),
            local = GLOBAL.parseData(jQuery(this).data('expand')),
            classActive = local.classActive || 'active',
            classShow = local.classShow || 'show',
            heightParent = parseInt($block.css('min-height'),10) || 26,
            heightChild = $block.height();

        if (heightChild > heightParent) {
            $element.addClass(classActive);

            $link.on("click", function() {
                $element.addClass(classShow);
            });
        }
    });
}

function initMobileMenu() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-MobileMenu').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('mobilemenu'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initShowMore(showmoreExtra) {
    if (typeof(ShowMore) === 'undefined' || !jQuery.isFunction(ShowMore)) {
        return false;
    }
    var common = { },
        showmoreExtra = showmoreExtra || {};

    $('.JS-ShowMore').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('showmore'));
        new ShowMore(this, jQuery.extend({}, common, local, showmoreExtra));
    });
}

function initAjaxMoreSimple() {
    if (typeof(AjaxMore) === 'undefined' || !jQuery.isFunction(AjaxMore)) {
        return false;
    }

    var common = {
        success: function () {
        }
    };

    $('.JS-AjaxMore-Simple').not('.JS-AjaxMore-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('ajaxmore'));
        new AjaxMore(this, jQuery.extend({}, common, local));
    });
}

function initValidate($element) {
    if (typeof($element) == 'undefined') {
        $element = $('.js-form-validate');
    }

    $element.each(function() {
        var $element = jQuery(this),
            validator;

        validator = $element.validate({
            errorClass: 'form-error',
            validClass: 'form-success',
        });

        $.validator.messages.required = GLOBAL.FORMERROR.REQUIRED;
        $.validator.messages.email = GLOBAL.FORMERROR.EMAIL;
    });
}

function initMask() {
    $('.js-phone').mask('+7 (999) 999-99-99');
}

function initFieldText() {
    if (typeof(FieldText) === 'undefined' || !jQuery.isFunction(FieldText)) {
        return false;
    }

    var common = {};

    jQuery('.JS-FieldText').not('.JS-FieldText-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('fieldtext'));
        new FieldText(this, jQuery.extend({}, common, local));
    });
}

function initPopupForm() {
    if (typeof(MobileMenu) === 'undefined' || !jQuery.isFunction(MobileMenu)) {
        return false;
    }

    var common = {};

    jQuery('.JS-PopupForm').not('.JS-MobileMenu-ready').each(function() {
        var local = GLOBAL.parseData(jQuery(this).data('popupform'));
        new MobileMenu(this, jQuery.extend({}, common, local));
    });
}

function initPopupProfile() {
    $('.js-popup-profile').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initFieldText();
                    initValidate();
                    initMask();
                    initPopupRegistration();
                    initPopupForgot();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupForgot() {
    $('.js-forgot-password').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initFieldText();
                    initValidate();
                    initMask();
                    initPopupProfile();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initPopupRegistration() {
    $('.js-popup-reg').each(function() {
        $(this).on('click',function(e) {
            e.preventDefault();
            var url = $(this).data('src');

            $('.js-preloader').removeClass('g-hidden');

            $.ajax({
                url: url,
                type: "get",
                dataType: "html",
                success: function (data) {
                    $('.js-form-popup').html(data);
                    initFieldText();
                    initValidate();
                    initMask();
                    initPopupProfile();
                    initPopupForm();

                    function initSetDelay() {
                        var local = GLOBAL.parseData(jQuery('.JS-PopupForm').data('popupform'));
                        new MobileMenu('.JS-PopupForm', local)._open();
                    }
                    setTimeout(initSetDelay, 10);

                    $('.js-preloader').addClass('g-hidden');
                },
                error: function(data) {
                }
            });
        });
    });
}

function initAccordion() {
    if (typeof(Accordion) === 'undefined' || !jQuery.isFunction(Accordion)) {
        return false;
    }

    var common = {};

    $('.JS-Accordion').not('.JS-Accordion-ready').each(function(){
        var local = GLOBAL.parseData(jQuery(this).data('accordion'));
        new Accordion(this, jQuery.extend({}, common, local));
    });
}

function initSliderBankOffers() {
    $(".js-slider-bank-offers").each(function(){
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
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    margin: 20,
                },
                720: {
                    items: 1,
                },
                992: {
                    items: 1,
                },
            },
        }));
    });
}
function reInitSliderBankOffers() {
    $(".js-slider-bank-offers .js-slider-list").trigger('destroy.owl.carousel');
}

function initSelectIcons() {
    $('.js-select-icons').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '<b class="selectric-button"><i class="selectric-icon"></i></b>',
        labelBuilder: function(itemData) {
            var ind = itemData.index,
                image = $('.js-select-icons option').eq(ind).data('calc-icon');

            return '<img src="' +
                image +
                '" class="' +
                itemData.className +
                '" />';
        },
        optionsItemBuilder: function(itemData, element, index) {
            var ind = itemData.index,
                image = $('.js-select-icons option').eq(ind).data('calc-icon');

            return '<img src="' +
                image +
                '" class="' +
                itemData.className +
                '" />';
        }
    });
}

function initSliderBanksActual() {
    $(".js-slider-banks-actual").each(function(){
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
                    margin: 20,
                },
                720: {
                    items: 1,
                },
                992: {
                    items: 2,
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

function initFixSticky() {
    var sticky = new Sticky('.js-fix-sticky');
}

function initResizeWindow() {
    if (window.matchMedia('(max-width: ' + GLOBAL.mobile + 'px)').matches) {
        GLOBAL.widthWindow = 'isMobile';
        initSliderBankOffers();
        initSliderUsefulLinks();
    } else if (window.matchMedia('(max-width: ' + GLOBAL.tablet + 'px)').matches) {
        GLOBAL.widthWindow = 'isTablet';
        initAdaptiveMenu();
        initSliderBankOffers();
        initSliderUsefulLinks();
    } else {
        GLOBAL.widthWindow = '';
        initAdaptiveMenu();
        reInitSliderBankOffers();
        reInitSliderUsefulLinks();
    }
}

$(document).ready(function () {
    initResizeWindow();
    $(window).resize(function(){
        initResizeWindow();
    });

    initDropdown();
    initSelect();
    initTab();
    initTabSimple();
    initSelectMore();
    initScroll();

    initSliderNew();
    initSliderHouse();
    initSliderAction();
    initSliderAbout();
    initSliderViewed();
    initSliderVisited();

    initExpand();
    initMobileMenu();
    initShowMore();
    initAjaxMoreSimple();
    initValidate();
    initMask();
    initFieldText();
    initPopupForm();
    initPopupProfile();
    initAccordion();
    initSelectIcons();
    initSliderBanksActual();
    initFixSticky();
});
