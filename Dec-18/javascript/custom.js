$(document).ready(function() {

    if ($(".plan-box").length > 0) {
        $(".plan-box").mouseover(function() {
            $(this).addClass("plan-box-active");
            $(this).children(".c-card--img-content").addClass("active");
            $(".plan-box").not(this).addClass("sm-box");
        }).mouseout(function() {
            $(this).removeClass("plan-box-active");
            $(this).children(".c-card--img-content").removeClass("active");
            $(".plan-box").not(this).removeClass("sm-box");
        });
    }

    if ($('.kw #wrapper .c-mainheader .c-navigation-container .dropdown.dropdown-hoverable').length > 0) {
        $('.kw #wrapper .c-mainheader .c-navigation-container .dropdown.dropdown-hoverable').hover(function() {
            $(this).children('[data-toggle="dropdown"]').click();
            $(".kw #wrapper .c-bodyoverlay").show();
        }, function() {
            $(this).children('[data-toggle="dropdown"]').click();
            $(".kw #wrapper .c-bodyoverlay").hide();
        });
    }


    /* slick hero slider start */
    if ($(".hero-carousel .swiper-container").length > 0) {
        var mySwiper = new Swiper('.hero-carousel .swiper-container', {
            loop: true,
            grabCursor: false,
            //autoplay: 2500,
            autoplay: {
                delay: 2500,
            },
            //autoplay: 50000,
            touchEventsTarget: 'container',
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoplayDisableOnInteraction: false,
            slidesPerView: 1,
            paginationClickable: true,
            calculateHeight: false,
            autoHeight: true, //enable auto height
            mousewheelControl: false,
            pagination: {
                el: '.hero-carousel .swiper-pagination',
                clickable: true,
            },
        })
    }
    /* slick hero slider end */

    /* zain-life slider start */
    if ($(".zain-life-carousel .swiper-container").length > 0) {
        var swiper = new Swiper('.zain-life-carousel .swiper-container', {
            slidesPerView: 1,
            paginationClickable: true,
            touchEventsTarget: 'container',
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            pagination: {
                el: '.zain-life-carousel .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.zain-life-carousel .swiper-button-next',
                prevEl: '.zain-life-carousel .swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
            }
        });
    }
    /* zain-life slider end */

    // custom-number-input
    if ($('.custom-number-input').length > 0) {
        $('.custom-number-input').on('click', '.btn', function() {
            var current_target = this;
            var cur_wrap = $(current_target).closest('.custom-number-input');
            var curr_input = cur_wrap.find('input');
            var curr_input_val = parseInt(curr_input.val());

            var max_val = curr_input.attr('maxlength');
            var min_val = curr_input.attr('minlength');

            if (this.classList.contains('btn-plus')) {
                if (curr_input_val < max_val) {
                    curr_input_val++;
                    $(curr_input).val(curr_input_val++);
                }
            } else if (this.classList.contains('btn-minus')) {
                if (curr_input_val > min_val) {
                    curr_input_val--;
                    $(curr_input).val(curr_input_val);
                }
            }
        });
    }

    if ($(".product-listing .product .options").length > 0) {
        $(".product-listing .product .options").click(function() {
            $(this).toggleClass("active");
        })
    }

    // CartDropdown
    $('a[data-target]').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr('data-target');
        $('.c-bodyoverlay').toggleClass('show');
        $(target).toggleClass('open');
    })

    // Slick Initilaton
    if ($('.slider-single').length > 0) {
        $('.slider-single').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            adaptiveHeight: true,
            infinite: true,
            useTransform: true,
            speed: 400,
            cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        });
    }

    if ($('.product-slider-nav.slider-nav').length > 0) {
        $('.product-slider-nav.slider-nav')
            .on('init', function(event, slick) {
                $('.product-slider-nav.slider-nav .slick-slide.slick-current').addClass('is-active');
            })
            .slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                vertical: true,
                focusOnSelect: true,
                infinite: false,
                prevArrow: '<span class="icon-arrow-pointing-to-right-1 up"></span>',
                nextArrow: '<span class="icon-arrow-pointing-to-right-1"></span>',
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                }, {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                }, {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                }]
            });
    }

    if ($('.product-slider.slider-single').length > 0) {
        $('.product-slider.slider-single').on('afterChange', function(event, slick, currentSlide) {
            $('.product-slider-nav.slider-nav').slick('slickGoTo', currentSlide);
            var currrentNavSlideElem = '.product-slider-nav.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
            $('.product-slider-nav.slider-nav .slick-slide.is-active').removeClass('is-active');
            $(currrentNavSlideElem).addClass('is-active');
        });
    }

    if ($('.product-slider-nav.slider-nav').length > 0) {
        $('.product-slider-nav.slider-nav').on('click', '.slick-slide', function(event) {
            event.preventDefault();
            var goToSingleSlide = $(this).data('slick-index');

            $('.product-slider.slider-single').slick('slickGoTo', goToSingleSlide);
        });
    }

    if ($('.slick-plan-carousel').length > 0) {
        $('.slick-plan-carousel').slick({
            slidesToShow: 4,
            dots: false,
            centerMode: false,
            infinite: false,
            prevArrow: '<span class="icon-arrow-pointing-to-right left"></span>',
            nextArrow: '<span class="icon-arrow-pointing-to-right right"></span>',
        });
    }

    if ($('.memory-specification .btn-group').length > 0) {
        $(".memory-specification .btn-group > button.btn").on("click", function() {
            val = $(this).find('input[type="radio"]').val();
            $('.memory-specification .size-val').html(val);
        });
    }

    if ($('.color-specification .btn-group').length > 0) {
        $(".color-specification .btn-group > button.btn").on("click", function() {
            val = $(this).find('input[type="radio"]').val();
            $('.color-specification .color-val').html(val);
        });
    }

    if ($('.payment-specification .btn-group').length > 0) {
        $(".payment-specification .btn-group > button.btn").on("click", function() {
            val = $(this).find('input[type="radio"]').val();
            $('.payment-specification .payment-option-val').html(val);
        });
    }

    $('.c-footer__list--title a i').on('click', function(e) {
        e.preventDefault();
        var target = $(this).closest('.c-footer__list').find('.mobile-collapse');
        if (target.hasClass('expand')) {
            target.removeClass('expand');
        } else {
            $('.mobile-collapse').removeClass('expand');
            target.addClass('expand');
        }
    })

    // Defining the local dataset
    var cars = ['iPhone', 'iPhone 3G', 'iPhone 3GS', 'iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5C', 'iPhone 5S', 'iPhone 6 / 6 Plus', 'iPhone 6S / 6S Plus', 'iPhone SE', 'iPhone 7 / 7 Plus', 'iPhone 8 / 8 Plus', 'iPhone X', 'iPhone XS / XS Max', 'iPhone XR', 'iPhone 11', 'iPhone 11 Pro/11 Pro Max'];

    // Constructing the suggestion engine
    var cars = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: cars
    });

    // Initializing the typeahead
    $('.typeahead').typeahead({
        hint: true,
        highlight: true,
        /* Enable substring highlighting */
        minLength: 1 /* Specify minimum characters required for showing result */
    }, {
        name: 'cars',
        source: cars
    });

    $("#c-mainsearch-click").on("click", function () {
        $(this).toggleClass("js-mainsearchclick active");
        if ($(this).hasClass("js-mainsearchclick")) {
            $(this).find("i").removeClass("icon-magnifying-glass").addClass("icon-add-1");
            $(".kw #wrapper .c-bodyoverlay").show();
        } else {
            $(this).find("i").html("").addClass("icon-magnifying-glass");
            $(".kw #wrapper .c-bodyoverlay").hide();
        }
        $(".c-bs-autocomplete").toggle();
    });

    // Sliders in Mobile
    $(window).on('load resize', function() {
        var responsive_sliders = $('.top-selected__slider, .plans__slider, .product__slider, .offers__slider');

        if (responsive_sliders.length) {
            if (window.innerWidth < 768) {
                /* slick hero slider start */
                responsive_sliders.slick({
                    slidesToShow: 1,
                    dots: true,
                    centerMode: false,
                    infinite: false,
                    arrows: false
                });

            } else {
                // Distroy Slider
                responsive_sliders.slick('unslick');
            }
        }
    });

    var extras_sliders = $('.accessories-slider, .entertainment-slider, .ecard-slider');
    if (extras_sliders.length) {
        extras_sliders.slick({
            slidesToShow: 3,
            dots: false,
            centerMode: false,
            infinite: false,
            arrows: true,
            prevArrow:"<button class='slick-prev slick-arrow slick-disabled' aria-disabled='true' aria-label='Previous' type='button'></button>",
            nextArrow:"<button class='slick-next slick-arrow slick-disabled' aria-disabled='true' aria-label='Next' type='button'></button>"
        });
    }

    // Show and Hide Tabs
    $('.dilivery-type-tab-wrapper').on('click', '.delivery_tab_title a', function(e) {
        e.preventDefault();
        var target = $(this);
        var targetWrapper = target.closest('.dilivery-type-tab-wrapper');
        var targetedTab = target.attr('data-tab-target');

        $('.delivery_tab_title a').removeClass('active');
        target.addClass('active');
        targetWrapper.find('.tab-contents').hide().removeClass('show');
        targetWrapper.find(targetedTab).show().addClass('show');
    });


});