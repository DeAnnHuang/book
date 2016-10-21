(function($) {
    $('body').prepend('<div id="loader"><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>');



    // =====Animate======

    var all = $("#All"),
        dot = $('.dot'),
        header = $('header'),
        footer = $('footer'),
        loader = $('#loader'),
        tlLoader = new TimelineMax({ repeat: -1 });


    //Loader1(infinite) Timeline
    tlLoader
        .staggerFromTo(dot, 0.3, { y: 0, autoAlpha: 0 }, { y: 20, autoAlpha: 0.7, ease: Back.easeInOut }, 0.05)
        .fromTo(loader, 0.3, { autoAlpha: 1, scale: 1.3 }, { autoAlpha: 0, scale: 1, ease: Power0.easenone }, 0.9);


    $(window).load(function() {
        loadContent();

        // console.log("window loaded");
    });



    function loadContent() {
        tlLoader.progress(1).pause();
        var tlLoaderOut = new TimelineMax({ onComplete: contentIn });


        tlLoaderOut
            .set(dot, { autoAlpha: 1 })
            .to(loader, 0.3, { autoAlpha: 1, scale: 1.3, ease: Power0.easeNone })
            .staggerFromTo(dot, 0.3, { y: 0, autoAlpha: 0 }, { y: 20, autoAlpha: 1, ease: Back.easeInOut }, 0.05, 0)
            .to(loader, 0.3, { y: -150, autoAlpha: 0, ease: Back.easeIn }, '+=0.3');
    }

    function contentIn() {
        $(document).scrollTop(0); //從頭開始

        var tlContentIn = new TimelineMax();

        tlContentIn
            .fromTo(header, 1.2, { top: '-100%' }, { top: '0%', ease: Power0.easeNone, autoAlpha: 1 }, 0)
            .fromTo(footer, 1.2, { bottom: '-100%' }, { bottom: '0%', ease: Power0.easeNone, autoAlpha: 1 }, 0)
            .to(all, 1, { autoAlpha: 1 });
    }

})(jQuery);
