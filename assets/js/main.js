
$(document).ready(function () {
    hljs.initHighlightingOnLoad();

    var sjs = SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json',
        searchResultTemplate: '<li><a class="has-text-white-bis	has-text-weight-light has-text-centered" href="{url}" >{date}-{title}</a></li>',
        noResultsText: '<li class="has-text-white-bis has-text-weight-light has-text-centered"> No results found</li>',
        limit: 10,
        fuzzy: false,
      });

      $("#search-input").change(function () {
        sjs.search($("#search").value);
    });

    $("#search").click(function () {
        $("#searchContainer").toggleClass("is-active");
    });

    $("#searchClose").click(function () {
        $("#searchContainer").toggleClass("is-active");
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
