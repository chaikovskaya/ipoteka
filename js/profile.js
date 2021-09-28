
function initItemCheck() {
    $('.js-item-check').each(function() {
        var $element = $(this),
            $input = $(this).find('.js-item-check-input');

        if ($input.is(':checked') && !$element.hasClass('profile-list-item_selected')) {
            $element.addClass('profile-list-item_selected');
        }

        $input.on('change', function(e, data) {
            if ($input.is(':checked') && !$element.hasClass('profile-list-item_selected')) {
                $element.addClass('profile-list-item_selected');
            } else {
                $element.removeClass('profile-list-item_selected');
            }
        });
    });
}

$(document).ready(function () {
    initItemCheck();
});