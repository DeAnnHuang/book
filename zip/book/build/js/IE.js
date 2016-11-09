(function($) {
    "use strict";

    // Detecting IE
    var oldIE;
    if ($('html').is('.lt-ie7, .lt-ie8, .lt-ie9')) {
        oldIE = true;
    }

    if (oldIE) {
        // Here's your JS for IE..
        console.log('old IE');
        $("body,html").html("<h1>抱歉，此網站最低支援至<a href='https://support.microsoft.com/zh-tw/help/18520/download-internet-explorer-11-offline-installer'>IE11</a>, 請更新您的ＩＥ版本！</h1>");
    }

}(jQuery));
