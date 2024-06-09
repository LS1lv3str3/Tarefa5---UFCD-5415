// jquery scrolling
// select all anchor elements with href starting with a # (but not href = #)
$('a[href*=#]:not([href=#])').click(function () {
    // scroll to element instantly on click
    $('html,body').animate(
        {
            scrollTop: $(this.hash).offset().top,
        },
        0
    );
});
