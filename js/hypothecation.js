
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

$(document).ready(function () {
    initSelectIcons();
});