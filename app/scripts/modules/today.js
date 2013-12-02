/**
 * This just gives us the current day. Module with defined dependencies. Dependencies beside the standard ones have
 * to be in the path of common.js.
 */
define(['moment'], function(moment) {
    return {
        getToday : function() {
            return moment().format('dddd');
        }
    }
});
