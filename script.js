(function () {
    "use strict";
    var pomodoro = 0;
    var pomoTime = 25 * 60;
    var breakTime = 5 * 60;
    function startTimer(count) {
        $("#toggle").html("przerwij")
            .on('click', function () {
                clearInterval(interval);
            });
        var interval = setInterval(function () {
                $("#toggle").click(function () {
                    // console.log("pomodoro stopped");
                    clearInterval(interval);
                    $(this).html("zacznij od nowa")
                       .click(function() {
                            startTimer(pomoTime);
                       });
                });
           --count;
           //loguje czas
            var minutes = Math.floor(count / 60);
            var secd = count % 60;
            //zwraca najmniejszą liczbę całkowitą większą lub równą
            var seconds = Math.ceil(secd);
            $("#display").html("<p>" + minutes + " : " + seconds);
            document.title = count;
            if (count === 0) {
                pomodoro++;
                $("#count").html(pomodoro);
                clearInterval(interval);
                $("#toggle").off("click")
                    .html("Zacznij przerwę")
                    .on('click', function () {
                        breakTimer(breakTime);
                    });
            }
        }, 1000);
    }
    //timer w czasie przerwy
    function breakTimer(count) {
        $("#toggle").html("Przerwij przerwę");
        var interval = setInterval(function () {
                $("#toggle").off("click")
                .click(function () {
                    clearInterval(interval);
                    //przerwa 5 minut
                    startTimer(breakTime);
                });
            count = count - 1;
            $("#display").html("<p>" + count + " s</p>");
            console.log(count);
            document.title = count;
            if (count === 0) {
                clearInterval(interval);
                console.log("koniec przerwy");
                $("#display").html("<p> Koniec przerwy </p>");
                $("#toggle").html(" Zacznij pomodoro");
            }
        }, 1000);
    }
    $("#toggle").on('click', function () {
        startTimer(pomoTime);
        $("#toggle").off('click');
    });
}());