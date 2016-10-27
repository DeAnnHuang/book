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




    //=============scrollDown=============


    var scrollDown = {
        init: function() {
            this.cacheDom();
            this.setInterval(3);
        },
        cacheDom: function() {
            this.$img = $('#scrollDown img');
            this.$scrollDown = $('#scrollDown');
        },
        changeIcon: function() {
            this.$img.hasClass("on") ? this.$img.removeClass("on") : this.$img.addClass("on");
        },
        setInterval: function(n) {
            setInterval(this.changeIcon.bind(this), n * 1000);
        }
        /**
         * [ShowWhenStop description]Show scroll down image like a tips when user stop scroll.
         */
        // ShowWhenStop: function() {

        //     $(window).scroll(function() {
        //         this.$scrollDown.css('display', 'none').fadeIn("slow");
        //     });
        // }

    };

    scrollDown.init();


    //=============scrollDown=============



})(jQuery);
