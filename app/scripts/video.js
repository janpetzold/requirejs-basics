define(['common', 'lib/videojs/video'], function(common, videojs) {
        var $ = common.getJquery();

        console.log("Video-Script active");

        // Test (imported) jQuery
        console.log("Headline: " + $("h1").text());

        // Set fallback Flash player
        window.videojs.options.flash.swf = "scripts/video-js.swf";
    }
);