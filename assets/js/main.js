
$(document).ready(function () {

    $("#search").click(function () {
        $("#searchContainer").toggleClass("is-active");
    });

    $("#searchClose").click(function () {
        $("#searchContainer").toggleClass("is-active");
    });

    $("#toc").click(function () {
        $("#tocContainer").toggleClass("is-active");
    });

    $("#tocClose").click(function () {
        $("#tocContainer").toggleClass("is-active");
    });

    $("#tocBox").click(function () {
        $("#tocContainer").toggleClass("is-active");
    });
    
    $("#toTop").click(function () {
        window.scrollTo(0, 0);

    });
    
      
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    $(".tooltip").click(function () {
        $("#qrCode").toggleClass("is-active");
    });

    $("#qrCode").click(function () {
        $("#qrCode").toggleClass("is-active");
    });

    $("#linkMenu").click(function () {
        $("#link").toggleClass("is-active");
    });

    $("#link").click(function () {
        $("#link").toggleClass("is-active");
    });
});
