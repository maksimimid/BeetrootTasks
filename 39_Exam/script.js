// Slick slider first
$(document).ready(function () {
    $('.slider__track').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots slick-dots-header'
    });
});
// Slow to anker
$(document).ready(function () {
    $("div.to-link").click(function () {
        let aLink = $(this).find('a')
        $("html, body").animate({
            scrollTop: $(aLink.attr("href")).offset().top + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });

});

// Slick slider second
$(document).ready(function () {
    $('.slider__standart').slick({
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: 'slick-dots slick-dots-news'
    });
});