$(document).ready(function(e) {
    e(".home-slider").slick({
        lazyLoad: "ondemand",
        autoplay: !0,
        autoplaySpeed: 6e3,
        fade: !0,
        cssEase: "linear",
        dots: !1,
        arrows: !1,
        infinite: !0
    })
}), $(document).ready(function(e) {
    awe_backtotop(), awe_category(), awe_tab(), awe_lazyloadImage(), e("#trigger-mobile").click(function() {
        e(".mobile-main-menu").toggleClass("active"), e(".backdrop__body-backdrop___1rvky").addClass("active")
    }), e(".backdrop__body-backdrop___1rvky").click(function() {
        e("body").removeClass("show-search"), e(".mobile-main-menu").removeClass("active"), e(".backdrop__body-backdrop___1rvky").removeClass("active")
    }), e(window).resize(function() {
        e(window).width() > 1023 && (e(".mobile-main-menu").removeClass("active"), e(".backdrop__body-backdrop___1rvky").removeClass("active"))
    }), e(".backdrop__body-backdrop___1rvky").removeClass("active"), e(".ng-has-child1 a .svg1").on("click", function(t) {
        return t.preventDefault(), e(this).parents(".ng-has-child1").find(".ul-has-child1").stop().slideToggle(), e(this).toggleClass("active"), !1
    }), e(".ng-has-child1 .ul-has-child1 .ng-has-child2 a .svg2").on("click", function(t) {
        return t.preventDefault(), e(this).parents(".ng-has-child1 .ul-has-child1 .ng-has-child2").find(".ul-has-child2").stop().slideToggle(), e(this).toggleClass("active"), !1
    }), e("#nav .has-mega").hover(function() {
        e(this);
        var t = e(this).find(".mega-content").height() - 10;
        e(this).find(".evo-sub-cate-1").css("height", t + "px")
    }), e(".mega-content .level0 .level1").hover(function() {
        e(".mega-content .level0 .level1").removeClass("active"), e(this).addClass("active")
    }), e(".mega-content").on("mouseleave", function(t) {
        e(".mega-content .level0 .level1").removeClass("active"), e(".mega-content .level0 .level1:first-child").addClass("active")
    })
});
var placeholderText = ["Nhập tên địa điểm hoặc thành phố bạn muốn đến", "Huế - Đà Nẵng - Hội An", "Đà Lạt", "Nha Trang", "Quy Nhơn"];

function awe_lazyloadImage() {
    new LazyLoad({
        elements_selector: ".lazy",
        load_delay: 500,
        threshold: 0
    })
}

function awe_category() {
    $(".nav-category .Collapsible__Plus").click(function(e) {
        $(this).parent().toggleClass("active")
    })
}

function awe_backtotop() {
    if ($(".back-to-top").length) {
        var e = function() {
            $(window).scrollTop() > 100 ? $(".back-to-top").addClass("show") : $(".back-to-top").removeClass("show")
        };
        e(), $(window).on("scroll", function() {
            e()
        }), $(".back-to-top").on("click", function(e) {
            e.preventDefault(), $("html,body").animate({
                scrollTop: 0
            }, 700)
        })
    }
}

function awe_tab() {
    $(".e-tabs:not(.not-dqtab)").each(function() {
        $(this).find(".tabs-title li:first-child").addClass("current"), $(this).find(".tab-content").first().addClass("current"), $(this).find(".tabs-title li").click(function() {
            var e = $(this).attr("data-tab"),
                t = $(this).attr("data-url");
            $(this).closest(".e-tabs").find(".tab-viewall").attr("href", t), $(this).closest(".e-tabs").find(".tabs-title li").removeClass("current"), $(this).closest(".e-tabs").find(".tab-content").removeClass("current"), $(this).addClass("current"), $(this).closest(".e-tabs").find("#" + e).addClass("current")
        })
    })
}
$(".search-auto").placeholderTypewriter({
    text: placeholderText
}), $(document).on("click", ".overlay, .close-popup, .btn-continue, .fancybox-close", function() {
    return hidePopup(".awe-popup"), setTimeout(function() {
        $(".loading").removeClass("loaded-content")
    }, 500), !1
}), window.awe_lazyloadImage = awe_lazyloadImage, window.awe_category = awe_category, window.awe_backtotop = awe_backtotop, window.awe_tab = awe_tab, $(".btn-close").click(function() {
    $(this).parents(".dropdown").toggleClass("open")
}), $(document).on("keydown", "#qty, #quantity-detail, .number-sidebar", function(e) {
    -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || /65|67|86|88/.test(e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) || 35 <= e.keyCode && 40 >= e.keyCode || (e.shiftKey || 48 > e.keyCode || 57 < e.keyCode) && (96 > e.keyCode || 105 < e.keyCode) && e.preventDefault()
});
$(document).ajaxComplete(function() {
    new LazyLoad({
        elements_selector: ".lazy",
        load_delay: 500,
        threshold: 0
    })
});