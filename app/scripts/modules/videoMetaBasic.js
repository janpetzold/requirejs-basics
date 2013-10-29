/**
 * This just defines a very simple mode that contains two methods.
 * This model will be extended (Mixin) further on.
 */
define(['common'], function(common) {
        var $ = common.getJquery();
        return {
            getModel : function() {
                // Return a basic model for video metadata that just has some methods
                return {
                    type: "HTML5",
                    getMp4Url: function() {
                        return $('video:last').find('source[type="video/mp4"]').attr("src");
                    },
                    getScreenshot: function() {
                        return $("video:last").attr("poster");
                    }
                };
            }
        }
    }
);
