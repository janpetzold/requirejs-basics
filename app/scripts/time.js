// This is no module, therefore we have to define the imports explicitly (?)
require({
    paths: {
        'today': 'modules/today'
    }
}, ['common', 'today'], function(common, today){
    console.log("Moment-Script active");

    $("h1").after("<p>The current day is " + today.getToday() + "</p>");
});
