function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        effect: 'fade',
        slidesPerView: 1,
        fadeEffect: { crossFade: true },
        speed: 3200,
        navigation: {
            nextEl: ' .main .swiper-button-next',
            prevEl: ' .main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

    })
}


$(document).ready(function() {
    sliderMain()

    $(".select").niceSelect()
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    $(".nav__item").hover(onIn, onOut);
    $(".nav__item-show").click(function() {
        $(".nav__item-hidden").slideToggle()
    })


    $(".header__burger-block").click(function() {
        $(this).toggleClass("header__burger-block--active")
        $("body").toggleClass("fixed-body")
        $(".nav").toggleClass("nav--active")
    })


    $(".autopark-info__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".autopark-info__tab").removeClass("autopark-info__tab--active")
        $(`.autopark-info__tab[data-tab-path="${path}"]`).addClass("autopark-info__tab--active")
        $(".autopark-table__content").removeClass("autopark-table__content--active")
        $(`.autopark-table__content[data-tab-content="${path}"]`).addClass("autopark-table__content--active")
    })

    $(".autopark__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".autopark__tab").removeClass("autopark__tab--active")
        $(`.autopark__tab[data-tab-path="${path}"]`).addClass("autopark__tab--active")
        $(".autopark__content").removeClass("autopark__content--active")
        $(`.autopark__content[data-tab-content="${path}"]`).addClass("autopark__content--active")
    })

    $('.form-group input').change(function() {
        let val = $(this).val()
        console.log(val)
        if (val) {
            $(this).addClass("input-filled")
        } else {
            $(this).removeClass("input-filled")
        }
    })

    $(".service-item__all").click(function() {
        $(this).hide()
        $(".service-item__card").removeClass("service-item__card--hidden")
    })

    $(".tarifs__item").click(function() {
        if (window.innerWidth < 992) {
            $(this).toggleClass("tarifs__item--active")
        }
    })

    $(".select-tarif__show").click(function() {
        if (!$(this).hasClass("select-tarif__show--active")) {
            $(this).addClass("select-tarif__show--active")
        } else {
            $(this).removeClass("select-tarif__show--active")
        }
    })

    $(".select-tarif__hidden-item").click(function() {
        let path = $(this).attr("data-tarif-show")
        $(".select-tarif__show-item").removeClass("select-tarif__show-item--active")
        $(`.select-tarif__show-item[data-tarif-show="${path}"]`).addClass("select-tarif__show-item--active")
        $(".select-tarif__hidden-item").removeClass("select-tarif__hidden-item--active")
        $(`.select-tarif__hidden-item[data-tarif-show="${path}"]`).addClass("select-tarif__hidden-item--active")
        $(".select-tarif__show").removeClass("select-tarif__show--active")
    })



    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".select-tarif");
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            if ($(".select-tarif__show").hasClass("select-tarif__show--active")) {
                $(".select-tarif__show").removeClass("select-tarif__show--active")
            }
        }
    });

    $(".modal__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".modal__tab").removeClass("modal__tab--active")
        $(`.modal__tab[data-tab-path="${path}"]`).addClass("modal__tab--active")
        $(".modal__form-tab").removeClass("modal__form-tab--active")
        $(`.modal__form-tab[data-tab-path="${path}"]`).addClass("modal__form-tab--active")
    })

    $(".information__item-show").click(function() {
        $(this).parents(".information__right-item").toggleClass("information__right-item--active")
    })

    $(".certificate__data-close").click(function() {
        $(".certificate__data").hide()
    })

})


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                console.log(el)
                el.children(".nav__item-show").addClass("nav__item-show--active")
            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
    }
}