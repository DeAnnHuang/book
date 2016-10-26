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
        //cloud
        .to('.cloud.one', 3, { left: '100%', top: '100%', ease: Power2.easeInOut }, '9')
        .to('.cloud.two', 3, { left: '100%', top: '-100%', ease: Power2.easeInOut }, '9')
        .to('.cloud.three', 3, { left: '-100%', top: '100%', ease: Power2.easeInOut }, '9')
        .to('.cloud.four', 3, { left: '-100%', top: '-100%', ease: Power2.easeInOut }, '9')
        //2
        .fromTo('.bg.three', 0.1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Linear.easeNone }, '-=1.5')
        .to('.sky2', 4, { left: '-3vw', ease: Linear.easeNone }, '-=1.5')
        .to('.mountain', 4, { left: '10vw', ease: Linear.easeNone }, '-=4')
        .to('.sun', 2, { rotation: '10deg', left: '28vw', ease: Linear.easeNone }, '-=4')
        .to('.sailboat', 5, { left: '75vw', ease: Linear.easeNone }, '-=4')
        .to('.birds', 5, { width: '7vw', bezier: birdsPath, ease: Linear.easeNone }, '-=4')
        .staggerTo('.three .textGroup', 1, { left: '50vw', autoAlpha: 1, ease: Linear.easeNone }, 0.25, '-=5')
        .to('.three .btn', 0.5, { left: '50vw', autoAlpha: 1, ease: Linear.easeNone }, '-=4')
        .to('.tablet2', 2, { left: '1vw', top: '22vh', autoAlpha: 1, ease: Power2.easeInOut }, '-=5')
        .to('.tree', 2, { left: 0, ease: Power2.easeInOut }, '-=5')
        .to('.dialog2', 1, { top: '29vh', autoAlpha: 1, ease: Power2.easeInOut }, '-=3')
        //3
        .fromTo('.bg.four', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone }, '-=1.5')
        .to('.rock', 5, { left: '5%', ease: Linear.easeNone }, '-=1')
        .to('.tree3', 5, { left: '-5vw', ease: Linear.easeNone }, '-=5')
        .to('.desertLeft', 5, { left: '-2vw', ease: Linear.easeNone }, '-=5')
        .to('.desertRight', 5, { left: '39vw', ease: Linear.easeNone }, '-=5')
        .to('.star', 2, { top: '0', autoAlpha: 1, ease: Power2.easeInOut }, '-=4')
        .to('.four .hr', 1, { top: '10vh', autoAlpha: 1, ease: Power2.easeInOut }, '-=3.5')
        .to('.four .title', 1, { top: '14vh', autoAlpha: 1, ease: Power2.easeInOut }, '-=3.5')
        .to('.four .content', 1, { top: '26vh', autoAlpha: 1, ease: Power2.easeInOut }, '-=3.5')
        .to(['.four .btn.one', '.four .btn.two'], 1, { top: '14vh', ease: Power2.easeInOut }, '-=3')
        .to(['.four .btn.three', '.four .btn.four'], 1, { top: '23vh', ease: Power2.easeInOut }, '-=3')
        .to('.compass', 4, { top: '42vh', left: '58vw', autoAlpha: 1, ease: Linear.easeNone }, '-=3.5')
        //4
        .fromTo('.bg.five', 1, { y: "100%" }, { y: "0%", ease: Linear.easeNone });

    var sectionScene = new ScrollMagic.Scene({
            triggerElement: '#section-wrap',
            triggerHook: 0,
            duration: '500%'
        })
        .setPin('#section-wrap')
        .setTween(sectionTl)
        .addTo(controller);

});
