$(document).ready(function() {
    
    // Add active class to clicked link in varbar
    let links = $('.nav-link');

    for (let i = 0; i < links.length; i++) {
        let link = $(links[i]);

        $(link).on('click', function() {

            let current = $('.active');
            
            if (current.length != 0) {
                $(current[0]).removeClass('active');
            }

            $(link).addClass('active');
        })
    }

    if(window.location.href.includes("projects")) {
        let current = $('.active');

        if (current.length != 0) {
            $(current[0]).removeClass('active');
        }

        $(links[1]).addClass('active');

    }

    if (window.location.href.includes("courses")) {
        let current = $('.active');

        if(current.length != 0) {
            $(current[0]).removeClass('active');
        }

        $(links[2]).addClass('active');
    }

});

function expandMenu() {

    let status = $('#markdown-toc').hasClass('open')
    if (status) {
        $('#markdown-toc').css('display', 'none');
        $('#markdown-toc').removeClass('open');
    } else {
        $('#markdown-toc').addClass('open');
        $('#markdown-toc').css('display', 'block');
    }   
}




