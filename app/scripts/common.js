/**
 * This collects all dependencies that exist throughout the application
 */

// main configuration
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
            'lib/jquery/jquery'
        ]
    }
});

// export global dependencies
define(['jquery'], function ($) {
    var $ = require('jquery');
    return {
        getJquery : function() {
            return $;
        }
    }
});