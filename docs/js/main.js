! function (e) {
    "use strict";
    e(window).on("scroll", function () {
        e(window).scrollTop() > 70 ? e(".backtop").addClass("reveal") : e(".backtop").removeClass(
            "reveal")
    }), e(".portfolio-single-slider").slick({
        infinite: !0,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 2e3
    }), e(".clients-logo").slick({
        infinite: !0,
        arrows: !1,
        autoplay: !0,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplaySpeed: 6e3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    }), e(".testimonial-wrap").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        dots: !0,
        arrows: !1,
        autoplay: !0,
        vertical: !0,
        verticalSwiping: !0,
        autoplaySpeed: 6e3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), e(".testimonial-wrap-2").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: !0,
        dots: !0,
        arrows: !1,
        autoplay: !0,
        autoplaySpeed: 6e3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    var s = window.Shuffle,
        o = window.jQuery,
        i = new s(document.querySelector(".shuffle-wrapper"), {
            itemSelector: ".shuffle-item",
            buffer: 1
        });
    o('input[name="shuffle-filter"]').on("change", function (e) {
        var s = e.currentTarget;
        s.checked && i.filter(s.value)
    })
}(jQuery);
