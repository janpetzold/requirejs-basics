define(['common', 'lib/videojs/video', 'modules/videoMetaBasic'], function(common, videojs, videoMetaBasic) {
        console.log("Video-Script active");

        // Test (imported) jQuery
        console.log("Headline: " + $("h1").text());

        // Display video metadata
        assets.displayUrls(videoMetaBasic.getModel());

        // Set fallback Flash player
        window.videojs.options.flash.swf = "scripts/video-js.swf";
    }
);

// Just an object to gather video details
var assets = {};

// Define a custom model with a method to display the WebM URL
assets.videoMetaWebM = {
    getWebMUrl: function(){
        return $('video:last').find('source[type="video/webm"]').attr("src");
    }
};

assets.displayUrls = function(baseModel) {
    // Extends the baseModel with all new methods defined in assets.videoMetaWebM
    _.extend(assets.videoMetaWebM, baseModel);

    // Call all methods now
    console.log("Video type: " + assets.videoMetaWebM.type);
    console.log("URL Screenshot: " + assets.videoMetaWebM.getScreenshot());
    console.log("URL MP4: " + assets.videoMetaWebM.getMp4Url());
    console.log("URL WebM: " + assets.videoMetaWebM.getWebMUrl());
};