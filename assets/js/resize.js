// $(document).ready(function() {
var win = $(window),
    winSize = win.width();

if (winSize <= 768) {
    console.log(winSize);
    // $('main').html('<div id="mobile"><img src="http://placehold.it/640x1230" style="width:100%"></div>');
    location.href = 'http://mybook.taiwanmobile.com/ebook/store_front/activities/2016PC/Nov01/mobile.html';
}

win.resize(function() {
    var winNewSize = win.width();
    if (winNewSize != winSize) {
        location.reload();
    }

});


// });
