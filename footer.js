$(document).ready(function () {
    // Add click event handler for footer icons
    $('.footer-icons a').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        var url = $(this).attr('href'); // Get URL from href attribute
        window.open(url, '_blank'); // Open link in a new tab
    });
});

