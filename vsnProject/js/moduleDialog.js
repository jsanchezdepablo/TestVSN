define("moduleDialog", ["jquery_ui"], function () {
    var load = {
        start: function () {
            console.log("Carga librería jQuery");
        },
    }

    $('.new_element').click(function () {
        $("#dialog").dialog();
        $(".ui-dialog").appendTo("div.middle-page");
    });

    $('.save_element').click(function () {
        var title = $(".title").val();
        var descr = $(".description").val();
    });





    return load;
});