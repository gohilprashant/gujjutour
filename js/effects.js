$(document).ready(function() {
    $(".dropdown-list").click(function(){
        $(".dropdown-menu").slideToggle();
        $(".nav-bar .nav-box .dropdown-list a").toggleClass("del-effect");
        $(".arrow").toggleClass("flip");
    });
});


$(".nav-box li a").css("color","black");
$(".nav-button a").css({"color":"black","border":".2rem solid black"});
$(".nav-bar ").append("<style>.nav-box li a:hover:before{background-color: black;}</style>");
$(".nav-bar").append("<style>.nav-box li a:before{background-color: black;}</style>");


$(window).scroll(function(){
    if($(this).scrollTop() > 50){
        $(".header-bar").addClass("header-bar-fixed");
        $(".dropdown-menu").addClass("dropdown-fixed");
        $(".nav-box li a").css("color","white");
        $(".nav-button a").css({"color":"white","border":".2rem solid white"});
        $(".nav-bar ").append("<style>.nav-box li a:hover:before{background-color: white;}</style>");
        $(".nav-bar").append("<style>.nav-box li a:before{background-color: white;}</style>");
    }else{
        $(".header-bar").removeClass("header-bar-fixed");
        $(".dropdown-menu").removeClass("dropdown-fixed");
        $(".nav-box li a").css("color","black");
        $(".nav-button a").css({"color":"black","border":".2rem solid black"});
        $(".nav-bar ").append("<style>.nav-box li a:hover:before{background-color: black;}</style>");
        $(".nav-bar").append("<style>.nav-box li a:before{background-color: black;}</style>");

    }
})

$(window).on("resize",function(){
    var win = $(this);
    if(win.width() < 768){
        $(".places-banner-image").attr("src", "../images/header/pages-banner-small.png");
        $(".festivals-banner-image").attr("src", "../images/header/festivals-banner-small.png");
    }else{
        $(".places-banner-image").attr("src", "../images/header/pages-banner.png");
        $(".festivals-banner-image").attr("src", "../images/header/festivals-banner.png");
    }
})