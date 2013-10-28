({
    appDir: "../app",
    baseUrl: "scripts",
    dir : "../build",

    // Use jQuery CDN path since we don't want to include jQuery in every page-specific file
    paths: {
        jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        d3: 'lib/d3/d3'
    },

    optimize: "uglify2",

    modules : [
        {
            name: "index"
        },
        {
            name: "stats"
        },
        {
            name: "video"
        }
    ]
})