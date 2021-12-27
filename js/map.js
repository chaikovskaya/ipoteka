
function initMap() {
    var centerCoord = $('.js-map').data('objectcoord') || [59.93914514163674,30.33349282507063];

    var myMap = new ymaps.Map('buildings-map', {
        center: centerCoord,
        zoom: 10,
        controls: ['zoomControl', 'fullscreenControl'],
    }, {
            autoFitToViewport: 'always'
        }),
    objectManager = new ymaps.ObjectManager(),
    masObjects =[];

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(objectManager);

    $('.js-map-item').each(function () {
        var objectId = $(this).data('objectid'),
            objectCoord = $(this).data('objectcoord'),
            objectText =  $(this).find('.js-map-item-value').text(),
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
                        '<a class="map-popup-button button button_dark" href="' + objectHref + '">выбрать</a>' +
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
