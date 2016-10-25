$(document).ready(function() {

    // ScrollMagic 
    var controller = new ScrollMagic.Controller();

    var girlPath = {
        curviness: 1.25,
        // autoRotate: true,
        values: [
            { top: '9vh', left: '15vw' },
            { top: '6vh', left: '30vw' },
            { top: '8vh', left: '50vw' },
            { top: '-100%', left: '85vw' }
        ]
    }

    var birdsPath = {
        curviness: 0.8,
        // autoRotate: true,
        values: [
            { top: '6%', left: '59vw' },
            { top: '-100%', left: '150vw' }
        ]
    }



    //Section
    var sectionTl = new TimelineMax();
    sectionTl
    //0
        .to('.door', 1, { rotationY: '-45deg' })
        .to('.pencilMan', 0.6, { left: '16vw', autoAlpha: 1, ease: Power2.easeIn }, 0.3)
        .staggerTo('.text', 1.5, { marginLeft: '-100px', autoAlpha: 0, ease: Power2.easeIn }, -0.15)
        .to('.gift', 0.8, { left: '59vw', autoAlpha: 0, ease: Power2.easeIn }, '-=0.9')
        .to('.blur', 1, { left: '30vw', autoAlpha: 0, ease: Power2.easeIn }, '-=0.6')
        .to('.pencilMan', 0.6, { left: '9vw', autoAlpha: 0, ease: Power2.easeIn }, '-=0.3')
        .to('.door', 1, { rotationY: '0' })
        .to('.main', 3, { bezier: girlPath }, '-=0.3')
        //1
        .fromTo('.bg.two', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone }, '-=2.3')
        .staggerFromTo('.two .textGroup', 1, { autoAlpha: 0 }, { autoAlpha: 1, left: '16vw', ease: Linear.easeNone }, 0.25, '-=2')
        .fromTo('.two .btn', 0.5, { autoAlpha: 0 }, { autoAlpha: 1, left: '16vw', ease: Linear.easeNone }, '-=1')
        .to('.window', 1, { top: '0', ease: Power2.easeInOut }, '-=2')
        .to('.sky', 1, { top: '0', ease: Power2.easeInOut }, '-=2')
        .to('.tablet', 1, { top: '42vh', left: '57vw', ease: Power2.easeInOut }, '-=2.1')
        .to('.sky', 5, { left: '55vw', ease: Linear.easeNone }, '-=2')
        //2
        .fromTo('.bg.three', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone })
        .to('.sky2', 4, { left: '-3vw', ease: Linear.easeNone })
        .to('.mountain', 4, { left: '10vw', ease: Linear.easeNone }, '-=4')
        .to('.sun', 2, { rotation: '10deg', left: '28vw', ease: Linear.easeNone }, '-=4')
        .to('.sailboat', 5, { left: '75vw', ease: Linear.easeNone }, '-=4')
        .to('.birds', 5, { width: '7vw', bezier: birdsPath, ease: Linear.easeNone }, '-=4')
        .staggerTo('.three .textGroup', 1, { left: '50vw', autoAlpha: 1, ease: Linear.easeNone }, 0.25, '-=5.5')
        .to('.three .btn', 0.5, { left: '50vw', autoAlpha: 1, ease: Linear.easeNone }, '-=4.5')
        .to('.tablet2', 1, { left: '1vw', top: '22vh', autoAlpha: 1, ease: Power2.easeInOut }, '-=5.5')
        .to('.tree', 1, { left: 0, ease: Power2.easeInOut }, '-=5.5')
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
