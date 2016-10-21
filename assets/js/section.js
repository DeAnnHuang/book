$(document).ready(function() {

    // ScrollMagic 
    var controller = new ScrollMagic.Controller();


    //Section
    var sectionTl = new TimelineMax();
    sectionTl
        .fromTo('.bg.two', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone })
        .fromTo('.bg.three', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone })
        .fromTo('.bg.four', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone })
        .fromTo('.bg.five', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone });

    var sectionScene = new ScrollMagic.Scene({
            triggerElement: '#section-wrap',
            triggerHook: 0,
            duration: '500%'
        })
        .setPin('#section-wrap')
        .setTween(sectionTl)
        // .addIndicators({
        //     name: 'OBJECT',
        //     colorTrigger: 'lightseagreen',
        //     colorStart: 'darkorange',
        //     colorEnd: 'darkgreen'
        // })
        .addTo(controller);



});
