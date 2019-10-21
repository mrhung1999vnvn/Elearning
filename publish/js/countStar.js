
// Count star of member 1
$(document).ready(function ($) {
    $(document).on("submit", "#submit-form", function (event) {
        event.preventDefault();
        if ($("#star-1").is(":checked")) {
            $.session.set("Star1", "1");
        } else if ($("#star-2").is(":checked")) {
            $.session.set("Star1", "2");
        } else if ($("#star-3").is(":checked")) {
            $.session.set("Star1", "3");
        } else if ($("#star-4").is(":checked")) {
            $.session.set("Star1", "4");
        } else {
            $.session.set("Star1", "5");
        }
        alert($.session.get("Star1"));

        $("#overlay1").fadeOut(100);
    });

    $(document).on("submit", "#submit-form2", function (event) {
        event.preventDefault();
        event.preventDefault();
        if ($("#star-6").is(":checked")) {
            $.session.set("Star2", "1");
        } else if ($("#star-7").is(":checked")) {
            $.session.set("Star2", "2");
        } else if ($("#star-8").is(":checked")) {
            $.session.set("Star2", "3");
        } else if ($("#star-9").is(":checked")) {
            $.session.set("Star2", "4");
        } else {
            $.session.set("Star2", "5");
        }
        alert($.session.get("Star2"));
        $("#overlay2").fadeOut(100);
    });
    $(document).on("submit", "#submit-form3", function (event) {
        event.preventDefault();
        event.preventDefault();
        if ($("#star-12").is(":checked")) {
            $.session.set("Star3", "1");
        } else if ($("#star-13").is(":checked")) {
            $.session.set("Star3", "2");
        } else if ($("#star-14").is(":checked")) {
            $.session.set("Star3", "3");
        } else if ($("#star-15").is(":checked")) {
            $.session.set("Star3", "4");
        } else {
            $.session.set("Star3", "5");
        }
        alert($.session.get("Star3"));
        $("#overlay3").fadeOut(100);
    });
});




//Count star of member 2
$(document).ready(function ($) {
    $(document).on("submit", "#submit-form1b", function (event) {
        event.preventDefault();
        if ($("#star-1b").is(":checked")) {
            $.session.set("Star1b", "1");
        } else if ($("#star-2b").is(":checked")) {
            $.session.set("Star1b", "2");
        } else if ($("#star-3b").is(":checked")) {
            $.session.set("Star1b", "3");
        } else if ($("#star-4b").is(":checked")) {
            $.session.set("Star1b", "4");
        } else {
            $.session.set("Star1b", "5");
        }
        alert($.session.get("Star1b"));

        $("#overlay1b").fadeOut(100);
    });

    $(document).on("submit", "#submit-form2b", function (event) {
        event.preventDefault();
        if ($("#star-6b").is(":checked")) {
            $.session.set("Star2b", "1");
        } else if ($("#star-7b").is(":checked")) {
            $.session.set("Star2b", "2");
        } else if ($("#star-8b").is(":checked")) {
            $.session.set("Star2b", "3");
        } else if ($("#star-9b").is(":checked")) {
            $.session.set("Star2b", "4");
        } else {
            $.session.set("Star2b", "5");
        }
        alert($.session.get("Star2b"));
        $("#overlay2b").fadeOut(100);
    });
    $(document).on("submit", "#submit-form3b", function (event) {
        event.preventDefault();
        if ($("#star-12b").is(":checked")) {
            $.session.set("Star3b", "1");
        } else if ($("#star-13b").is(":checked")) {
            $.session.set("Star3b", "2");
        } else if ($("#star-14b").is(":checked")) {
            $.session.set("Star3b", "3");
        } else if ($("#star-15b").is(":checked")) {
            $.session.set("Star3b", "4");
        } else {
            $.session.set("Star3b", "5");
        }
        alert($.session.get("Star3b"));
        $("#overlay3b").fadeOut(100);
    });
});
