// This is no module, therefore we have to define the imports explicitly (?)
require(['common', 'modules/today'], function(common, today){
    console.log("Moment-Script active");

    // Click listener
    $("button").on("click", function() {
        // tricky here - alertify is just loaded once it is needed!
        require(['alertify/alertify'], function(alertify) {
            alertify.alert(today.getFrenchDayOneWeekAhead());
        });
    });

    $("h1").after("<p>The current day is " + today.getToday() + "</p>");
});
