/**
 * This collects all dependencies that exist throughout the application
 */

// main configuration
requirejs.config({
    baseUrl: 'scripts/lib',
    paths: {
        // Local fallback but the default is the Google CDN
        'jquery': [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
            'lib/jquery/jquery'
        ],
        'underscore': [
            'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
            'lib/underscore/underscore'
        ],
        'moment': 'moment/moment'
    }
});

// export global dependencies
define(['jquery', 'underscore'], function () {
    var $ = require('jquery');
    var _ = require('underscore');

    return {
        getJquery: function() {
            return $;
        },
        getUnderscore: function() {
            return _;
        }
    }
});