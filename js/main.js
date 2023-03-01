$(() => {
    // геолокация - список локаций показать-свернуть
    $('#selected-location-elem').click(() => {
        $('.navbar-all-locations').toggle();
    });
    // гамбургер
    $('.navbar-hamburger').click(() => {
        $('.navbar-elements').toggle();
    });

    $('.navbar-fine-type').hover((e) => {
        // in
        $('.navbar-fine-type-list').css('visibility', 'visible');
        recalcNavbarFineTypeListLinksBlockHeight();
    }, () => {
        // out
    });

    $('.navbar-fine-type-list').hover(() => {
        // in
    }, () => {
        // out
        $('.navbar-fine-type-list').css('visibility', 'hidden');
    })

    // слайдер
    $('.slider-controller-dash').click((e)=> {
        $('.slider-controller-dash').removeClass('active')
        $(e.target).addClass('active')
    })

    // кнопки с плюсиками в промо-секции
    $('.promo-section-content-image-popup__btn').click((e) => {
        const isCurVisible = $(e.target).siblings('p').is(':visible')
        $('.promo-section-content-image-popup__btn').siblings('p').hide()
        if (!isCurVisible)
            $(e.target).siblings('p').show()
    })
});

const recalcNavbarFineTypeListLinksBlockHeight = () => {
    // каталог из хедера - надо брать самый высокий и для элементов navbar-fine-type-list-column-links установить
    // одну и ту же высоту,
    // чтоб потом нижняя черта шла по одной линии
    const heights = [];
    $('.navbar-fine-type-list-column-links').each((index, elem) => {
        heights.push($(elem).height());
    })
    const maxHeight = Math.max(...heights);
    $('.navbar-fine-type-list-column-links').each((index, elem) => {
        $(elem).css('height', maxHeight + 'px');
    });
}