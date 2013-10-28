requirejs-basics
================

This is a general web project structure for multi-page sites that use different libraries across their sites. The idea is to manage the dependencies on a site-level while still having some "global" dependencies. It is pretty similar to the [example-multipage](https://github.com/requirejs/example-multipage) project on GitHub and also follows the [AMD](http://en.wikipedia.org/wiki/Asynchronous_module_definition) principle by using [require.js](http://requirejs.org/) to define dependencies and responsibilities in dedicated modules.

The project consists of three sites: the main site (index) that has no dependencies, a statistics site (stats) that shows a graph and makes use of the [d3](http://d3js.org/)-library and a video site (video) showing a simple video (uses [video.js](http://www.videojs.com/)-library). All sites use jQuery. There is a global common.js file that lists all major settings. That one is imported on all sub-pages.

I configured a build at tools/build.js that will automatically optimize all JS files and create a single .js script for any page, no matter how many libraries/modules where used there.

For details, see the blog post at XXX.
