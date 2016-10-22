$(document).ready(function() {

    // ScrollMagic 
    var controller = new ScrollMagic.Controller();


    //Section
    var sectionTl = new TimelineMax();
    sectionTl
        .to('.door', 1, { rotationY: '-45deg' })
        .to('.pencilMan', 0.6, { left: '16vw', autoAlpha: 1, ease: Power2.easeIn }, 0.3)
        .staggerTo('.text', 1.5, { marginLeft: '-100px', autoAlpha: 0, ease: Power2.easeIn }, -0.15)
        .to('.gift', 0.8, { left: '59vw', autoAlpha: 0, ease: Power2.easeIn }, '-=0.9')
        .to('.blur', 1, { left: '30vw', autoAlpha: 0, ease: Power2.easeIn }, '-=0.6')
        .to('.pencilMan', 0.6, { left: '9vw', autoAlpha: 0, ease: Power2.easeIn }, '-=0.3')
        .to('.door', 1, { rotationY: '0' })
        .to('.main', 2, { left: '40vw' }, '-=1')
        .fromTo('.bg.two', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone }, '-=0.8')
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
