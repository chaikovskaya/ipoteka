function initPopup() {
    $(".js-popup").fancybox({
        toolbar  : false,
        smallBtn : true,
        animationDuration: 0,
        type : 'ajax',
        afterShow : function( instance, current ) {
	        initValidate();
			initMask();
			initFieldText();
    
	        if ($(this)[0].opts.name) {
		    	var programm_name = $(this)[0].opts.name;
				var programm_id = $(this)[0].opts.id;
				
				$('.js-form-programm').val(programm_name + " (" + programm_id + ")");
		    }
        }
    });
}

function initMapContacts() {
    var centerCoord = $('.js-map-contacts').data('objectcoord') || [59.93914514163674,30.33349282507063];

    var myMap = new ymaps.Map('contacts-map', {
        center: centerCoord,
        zoom: 1,
        controls: ['zoomControl', 'fullscreenControl'],
    }),
    objectManager = new ymaps.ObjectManager(),
    masObjects =[];

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(objectManager);

    $('.js-map-item').each(function () {
	    var objectId = $(this).data('objectid'),
            objectCoord = $(this).data('objectcoord'),
            objectText =  $(this).parents('li').find('.js-map-item-value').html(),
            objectHref =  $(this).find('.js-map-item-value').attr('href');

        var elementsObjects =
            {
                "type": "Feature",
                "id": objectId,
                "options": {
                    "preset": "islands#darkGreenIcon",
                },
                "geometry":{
                    "type": "Point",
                    "coordinates": objectCoord
                },
                "properties":{
                    "balloonContentBody": '<div class="map-popup">' +
                        '<div class="map-popup-body"><i class="map-popup-icon las la-map-marker"></i>' + objectText + '</div>' +
                        '</div>',
                }
            };

        masObjects.push(elementsObjects);
    });

    objectManager.add({
            "type": "FeatureCollection",
            "features": masObjects
    });

    objectManager.objects.events.add('click', function (e) {
        var objectId=e.get('objectId');
        viewObject(objectId);
    });

    [].forEach.call(document.querySelectorAll('[data-objectId]'), function(el) {
        el.addEventListener('click', function() {
            var objectId=el.getAttribute("data-objectId");
            viewObject(objectId);
        });
    });

    function viewObject(objectId){
        $('.js-map-item').removeClass('active');

        document.querySelector('[data-objectId="'+objectId+'"]').classList.add('active');

        objectManager.objects.each(function (item) {
                objectManager.objects.setObjectOptions(item.id, {
                preset: 'islands#darkGreenIcon'
            });
        });
        objectManager.objects.setObjectOptions(objectId, {
            preset: 'islands#darkGreenIcon'
        });
    }

    if (masObjects.length > 1) {
        myMap.setBounds(objectManager.getBounds());
    }
}


/*=====================================================
	Переключатель radio в таблице
=====================================================*/
$(document).on('change', '.js-switch-input', function(){
	$('.js-switch-list li').removeClass('is-active');
	
	if ($(this).is(':checked')){
		$('.js-switch-list li:nth-child(2)').addClass('is-active');
		var id = $('.js-switch-list li:nth-child(2)').data('id');
	} else {
		$('.js-switch-list li:nth-child(1)').addClass('is-active');
		var id = $('.js-switch-list li:nth-child(1)').data('id');
	}
	
	filter_offer(id);
});

/*=====================================================
	Выравнивание блоков по высоте
=====================================================*/
$(document).ready(function(){
	$('.js-articles-matchheight').matchHeight({
		byRow: true,
	});
	$('.refinancing-home__info').matchHeight({
		byRow: true,
	});
	$('.js-calc-height').matchHeight({
		byRow: true,
	});
	$('.js-about-item').matchHeight({
		byRow: true,
	});
});

/*=====================================================
	Подписка на новости
=====================================================*/
$(document).on("submit", "#subscribe", function(e) {
	e.preventDefault();
	var formsubscrube = $(this).serialize();
	
	$.ajax({
    	type: "POST",
		url: "/local/ajax/subscribe.php",
		data: formsubscrube,
		success: function(result) {
			$('#subscribe-popup .popup-text').html(result);
			
			$.fancybox.open({
				src: '/local/ajax/subscribe-ok.php?text=' + result,
				type: 'ajax'
			});
		}
	})
});

/*=====================================================
	Маска для поля E-mail
=====================================================*/
$(function() {
    $(".js-email").each(function() {
        $(this).inputmask({
            alias: "email",
            showMaskOnHover: false,
            showMaskOnFocus: true
        });
    });
});

/*=====================================================
	Инициализация валидация форм
=====================================================*/
$(function () {
	window.validation.init({
		container: '.js-form',
		submitHandler: function () {
		}
	});
});

/*=====================================================
	Добавление/Удаление в избранное
=====================================================*/
$(document).on('click', '.js-favorites', function(e){
	e.preventDefault();
	
	var __this = $(this);
	var type = __this.hasClass('is-active') ? 'remove' : 'add';
	
	$.ajax({
    	type: "POST",
		url: "/local/ajax/favorites.php",
		data: {
			type: type,
			id: __this.data('id')
		},
		success: function(data) {
			var result = $.parseJSON(data);
			
			if (__this.hasClass('is-active')) {
				__this.removeClass('is-active');
				var type = 'remove';
			} else {
				__this.addClass('is-active');
				var type = 'add';
			}
			
			$('.js-panel-favorites').html(result.COUNT);	
		}
	})
});

/*=====================================================
	Отметить товары которые в избранном
=====================================================*/
function list_product_favorite() {
	if ($('.js_list_pruduct_favorite').length > 0) {
		var ArElement = $('.js_list_pruduct_favorite').val();
		ArElement = ArElement.split('|');
		
		$.each(ArElement, function(index, item) {
			$('.js-favorites[data-id="' + item + '"]').addClass('is-active');
		});
	}
}

$(document).ready(function(){
	list_product_favorite();
});

/*=====================================================
	Ajax Показать еще
=====================================================*/
$(document).on('click','.js_ajax_more_link', function (e) {
	e.preventDefault();
	
	var ajaxurl = $('.ajax_load_box').find('.pager li.pager-item_right a').attr('href');
	var thatTxt = $(this).html();
	
	$('.js-ajax-more-content').css('opacity', '0.5');
	
	var that = this;
	$(this).html('...');
	
	if (typeof ajaxurl !== "undefined") {
		$.ajax({
        	type: "POST",
        	url: ajaxurl,
        	data: {'ajax_get_page': 'y'},
        	dataType: "html",
        	success: function (data) {
	        	var AppendLi = $(data).find('.js-ajax-more-content').html();
	        	var Pagination = $(data).find('.js-ajaxmore-pager').html();
	        	
	        	console.log( AppendLi );
	        	$('.ajax_load_box').find('.js-ajax-more-content').append(AppendLi);
				$('.ajax_load_box').find('.js-ajaxmore-pager').html(Pagination);
	        	
	        	$(that).html(thatTxt);
	        	
	        	$('.js-ajax-more-content').css('opacity', '1');
        	}
    	});
	} else {
		$('.js_ajax_more_link').hide();
		$('.js-ajax-more-content').css('opacity', '1');
	}
});

/*=====================================================
	ajax показать еще без пагинации
=====================================================*/
function filter_offer(id) {
	var ajaxurl = window.location.pathname;
	$('.js-ajax-more-content').css('opacity', '0.5');
	
	$.ajax({
        type: "POST",
        url: ajaxurl,
        data: {'ajax_get_page': 'y', section_id: id},
        dataType: "html",
        success: function (data) {
	    	var AppendLi = $(data).find('.js-ajax-more-content .approval__list').html();
	        var Pagination = $(data).find('.js-ajaxmore-pager').html();
	        	
	        $('.ajax_load_box').find('.js-ajax-more-content .approval__list').html(AppendLi);
			$('.ajax_load_box').find('.js-ajaxmore-pager').html(Pagination);
	        	
	        $('.js-ajax-more-content').css('opacity', '1');
        }
    });
}

/*=====================================================
	ajax показать еще с пагинацией
=====================================================*/
$(document).on('click','.JS-AjaxMore-Link', function (e) {
	e.preventDefault();
	var ajaxurl = $('.ajax_load_box').find('.pager .pager-link_last').attr('href');
	var thatTxt = $(this).find('.load-more-label').html();
	
	$('.JS-AjaxMore-Simple').css('opacity', '0.5');
	
	var that = this;
	$(this).find('.load-more-label').html('...');

	if (typeof ajaxurl !== "undefined" && ajaxurl != 'javascript:;') {
		$.ajax({
        	type: "POST",
        	url: ajaxurl,
        	data: {'ajax_get_page': 'y'},
        	dataType: "html",
        	success: function (data) {
	        	
	        	var AppendLi = $(data).find('.JS-AjaxMore-Content').html();
	        	var Pagination = $(data).find('.JS-AjaxMore-Pager').html();
	        	
	        	$('.ajax_load_box').find('.JS-AjaxMore-Content').append(AppendLi);
				$('.ajax_load_box').find('.JS-AjaxMore-Pager').html(Pagination);
	        	
	        	history.pushState('', '', ajaxurl);
	        	$(that).find('.load-more-label').html(thatTxt);
	        	
	        	$('.JS-AjaxMore-Simple').css('opacity', '1');
	        	
	        	var ajaxurl_end = $('.ajax_load_box').find('.pager .pager-link_last').attr('href');
	        	if (typeof ajaxurl_end === "undefined" || ajaxurl_end == 'javascript:;') {
		        	$('.JS-AjaxMore-Link').hide();
	        	}
        	}
    	});
	} else {
		$('.JS-AjaxMore-Link').hide();
		$('.JS-AjaxMore-Simple').css('opacity', '1');
	}
});

$(document).ready(function(){
	initPopup();
});

$(document).on('click', '.js-more-link', function(e){
	e.preventDefault();
	
	$('.articles-list-item').removeClass('articles-list-item_hide');
	$(this).hide();
});

$(document).ready(function () {
    if ($('.contacts-main').length > 0) {
    	ymaps.ready(initMapContacts);
    }
});

$(document).on('click', '.js-filter-cur', function(e){
	e.preventDefault();
	$(this).parents('li').remove();
	
	setTimeout(function(){
		if ($('.js-filter-list li').length > 0) {
			$('.js-form-filter').submit();
		} else {
			window.location.href = $('.js-filter-list').data('url');
		}
	}, 500);
});