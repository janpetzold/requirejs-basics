/**
 * This is a simple module to determine the client-side environment.
 * It is just used on the stats page but could be used anywhere.
 */
define([], function() {
    console.log("Determining client configuration");
    return {
        getUserAgent : function() {
            return {
                userAgent : navigator.userAgent,
                browserName : navigator.appName,
                browserVersion : navigator.appVersion,
                os : navigator.platform
            };
        },
        getLoadTime : function() {
            if(window.performance && window.performance.timing) {
                return window.performance.timing.domComplete - window.performance.timing.connectStart;
            } else {
                return null;
            }
        }
    }
});
