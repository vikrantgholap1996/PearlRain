window.addEventListener('DOMContentLoaded', () => {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary div element
            const tempDiv = document.createElement('div');
            // Set the HTML content of the temporary div with fetched HTML
            tempDiv.innerHTML = html;
            // Get the header content from the temporary div
            const headerContent = tempDiv.querySelector('header').innerHTML;
            // Insert the header content into the #header element
            document.getElementById('header').innerHTML = headerContent;
        });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
    // home banner slider
    $('.banner-slider-module').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false
    });

    // $('.nav.nav-tabs').slick({
    //     dots: false,
    //     slidesToShow: 1,
    //     arrows: true
    // });

    $('.team-slider-module').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        arrows: true,
        prevArrow: '<img class="custom-arrow custom-prev" src="../images/prev-icon.png">',
        nextArrow: '<img class="custom-arrow custom-next" src="../images/nex-icon.png">',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    });


    // Counter Section
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});




$('.panel .nav-tabs').on('click', '.tab-title', function (e) {
    var tab = $(this).parent(),
        tabIndex = tab.index(),
        tabPanel = $(this).closest('.panel'),
        tabPane = tabPanel.find('.tab-pane').eq(tabIndex);
    tabPanel.find('.active').removeClass('active');
    tab.addClass('active');
    tabPane.addClass('active');
});



$(document).ready(function () {
    // Activate the first tab and accordion by default
    $(".nav-tabs a:first").tab("show");
    $(".accordion .accordion-item:first").addClass("active");

    // Tab click event
    $(".nav-tabs a").click(function () {
        $(this).tab("show");
    });

    // Accordion click event
    $(".accordion-header").click(function () {
        var accordionItem = $(this).closest('.accordion-item');
        var isItemActive = accordionItem.hasClass("active");

        // Remove active class from all accordion items
        $(".accordion-item").removeClass("active");
        $(".accordion-content").slideUp("fast");
        $(".accordion-header").removeClass("active").find("::after").text("+");

        // Toggle active class for the clicked accordion item
        if (!isItemActive) {
            accordionItem.addClass("active");
            accordionItem.find(".accordion-content").slideDown("fast");
            $(this).addClass("active").find("::after").text("-");
        }
    });
});


