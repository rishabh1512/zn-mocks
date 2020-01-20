$(document).ready(function () {

    //Home- Banner Slider
    if ($('.banner-slider-wrapper').length) {
        $('.banner-slider-wrapper').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2500,
            infinite: true,
        });
    }

    // home - Top selected slider after 768px
    if ($('.top-selected_slider').length) {
        $('.top-selected_slider').slick({
            responsive: [{
                breakpoint: 4000,
                settings: 'unslick'
            }, {
                breakpoint: 768.98,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    centerMode: false,
                    infinite: false,
                    arrows: false
                }
            }]
        });
    }

    //Home - plans Slider
    if ($('.plans_slider, .product_slider').length) {
        $('.plans_slider, .product_slider').slick({
            arrows: false,
            slidesToShow: 4,
            infinite: false,
            dots: false,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    dots: true
                }
            }, {
                breakpoint: 768.98,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                }
            }, {
                breakpoint: 460.98,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }]
        });
    }

    // Home - Zain life slider
    if ($('.zainlife-slider, .offers-slider').length) {
        $('.zainlife-slider, .offers-slider').slick({
            arrows: true,
            dots: true,
            slidesToShow: 2,
            infinite: false,
            prevArrow: '<button class="btn prev"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next"><i class="icon-arrow-pointing-to-right"></i></button>',
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    }

    // Product Detail - Product slider
    if ($('.product-detail-slider').length) {
        $('.product-detail-slider .slider_nav').slick({
            arrows: true,
            slidesToShow: 4,
            infinite: false,
            vertical: true,
            dots: false,
            focusOnSelect: true,
            centerMode: false,
            asNavFor: '.product-detail-slider .slider_main',
            prevArrow: '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
        });
        $('.product-detail-slider .slider_main').slick({
            arrows: true,
            slidesToShow: 1,
            infinite: false,
            dots: false,
            asNavFor: '.product-detail-slider .slider_nav',
            prevArrow: '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
        });
    }


    // Product detail - plans Carousal
    if ($('.slick-plan-carousel').length) {
        $('.slick-plan-carousel').slick({
            slidesToShow: 4,
            arrows: true,
            dots: false,
            infinite: false,
            prevArrow: '<button class="btn prev dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            nextArrow: '<button class="btn next dark"><i class="icon-arrow-pointing-to-right"></i></button>',
            responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3
                }
            }]
        });
    }


    // Plans Hover Effact
    $('.plans-wrapper .slide').hover(function () {
        if ($(this).hasClass('active')) {
            // $(this).removeClass('active');
            // $('.plans-wrapper .slide').removeClass('hover-collapse');
        } else {
            $('.plans-wrapper .slide').addClass('hover-collapse');
            $('.plans-wrapper .slide').removeClass('active');
            $(this).addClass('active').removeClass('hover-collapse');
        }
    })


    initJsComponents();
    $(window).on('load resize', function () {
        initJsComponents();
    });

    if ($(".product-thumbnail .product-image .fav").length > 0) {
        $(".product-thumbnail .product-image .fav").click(function () {
            $(this).toggleClass("active");
            if ($(this).hasClass('active')) {
                $(this).find('i').removeClass('icon-heart-feel-grey');
                $(this).find('i').addClass('icon-favorite-heart-button1');
            }else{
                $(this).find('i').addClass('icon-heart-feel-grey');
                $(this).find('i').removeClass('icon-favorite-heart-button1');
            }
        })
    }


    // On tab click change plus and minus icon
    $('.features_accordian .btn-link').on('click', function () {
        if ($(this).find('i').hasClass('icon-add-1')) {
            $('.features_accordian .btn-link i').removeClass('icon-minus').addClass('icon-add-1');
            $(this).find('i').removeClass('icon-add-1').addClass('icon-minus');
        } else {
            $(this).find('i').removeClass('icon-minus').addClass('icon-add-1');
        }
    });


    // btn-group active
    $('.radio-wraper .btn input').on('click', function () {
        $(this).closest('.radio-wraper').find('.btn.active').removeClass('active');
        $(this).closest('.btn').addClass('active');
        var lableVal = $(this).val();
        $(this).closest('.radio-wraper').prev().find('.auto-lbl').html(lableVal);
    })

    // Megamenu toggle
    $('[data-target-menu]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('data-target-menu');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(target).removeClass('show');
            $('.bodyoverlay').removeClass('show');
            // $('body').css({
            //     'overflow': 'auto',
            //     'padding-right': '0px'
            // });
        } else {
            $(this).addClass('active');
            $(target).addClass('show');
            $('.bodyoverlay').addClass('show');
            // $('body').css({
            //     'overflow': 'hidden',
            //     'padding-right': '17px'
            // });
        }
    });

    // Outside click close
    $('.bodyoverlay').on('click', function () {
        $('.cart-summary-dropdown, .search-autocomplete').removeClass('show');
        $('.bodyoverlay').removeClass('show');
        $('[data-target-menu]').removeClass('active');
        $('a[data-target-menu="#search"]').find('i').addClass('icon-magnifying-glass').removeClass('icon-add-1');
    });

    $('.right-nav a[data-target-menu="#search"]').on('click', function () {
        // Changeing icon on click
        var crossIcon = $(this).find('i');
        if (crossIcon.hasClass('icon-magnifying-glass')) {
            crossIcon.removeClass('icon-magnifying-glass').addClass('icon-add-1');
        } else {
            crossIcon.addClass('icon-magnifying-glass').removeClass('icon-add-1');
        }
    })

    // Defining the local dataset
    var devices = ['iPhone', 'iPhone 3G', 'iPhone 3GS', 'iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5C', 'iPhone 5S', 'iPhone 6 / 6 Plus', 'iPhone 6S / 6S Plus', 'iPhone SE', 'iPhone 7 / 7 Plus', 'iPhone 8 / 8 Plus', 'iPhone X', 'iPhone XS / XS Max', 'iPhone XR', 'iPhone 11', 'iPhone 11 Pro/11 Pro Max'];

    // Constructing the suggestion engine
    var devices = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: devices
    });

    // Initializing the typeahead
    $('.typeahead').typeahead({
        hint: true,
        highlight: true,
        /* Enable substring highlighting */
        minLength: 1 /* Specify minimum characters required for showing result */
    }, {
        name: 'devices',
        source: devices
    });


    // custom-number-input
    if ($('.custom-number-input').length > 0) {
        $('.custom-number-input').on('click', '.btn', function () {
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



    // no-commitment
    $('.pay-options').on('click', function () {
        if ($(this).find('#nc').closest('.custom-radio').hasClass('active')) {
            $('.no_commitment-sect').show();
        } else {
            $('.no_commitment-sect').hide();
        }
    })

});



// $(window).on('load resize', function () {


// });


function initJsComponents() {
    // Customs select Init
    if ($('.custom-select').length) {
        $('.custom-select').select2({
            minimumResultsForSearch: -1
        });
    }


    if ($('.custom-scroll').length) {
        $(".custom-scroll").mCustomScrollbar({
            theme: "dark-3",
            autoHideScrollbar: false,
            alwaysShowScrollbar: 2,
        });
    }

    // Set Height of left content for filter section (Profuct Listing Page)
    // add this after-portlat-load function() in liferay  
    height = $('.filters').height();
    $('.filters').closest('[class*=layout-]').css('min-height', height);

}