define("moduleDialog", ["jquery_ui"], function () {
    var load = {
        start: function () {
            console.log("Carga librería jQuery");
        },
    }

    $('.new_element').click(function () {
        $(".middle-page").append(
            '<div id="dialog">' +
            '<input type="text" class="title" placeholder="Title" maxlength="15" required>' +
            '<textarea class="description" placeholder="Description" maxlength="30"></textarea>' +
            '<input type="submit" value="Save" class="save_element"></div>'
        );

        $("#dialog").dialog({
            beforeClose: function (event, ui) {
                //call functions 
                $(".title").attr("placeholder", "Title");
                $(".title").val("");
                $(".title").removeClass("required");
                $(".description").val("");
                $(".ui-dialog").remove();
                $("#dialog").remove();
            }
        });

        $(".ui-dialog").appendTo("div.middle-page");

        $('.save_element').click(function () {
            var title = $(".title").val();
            var descr = $(".description").val();
            var id = title + '-' + Math.floor(Math.random() * 1000);

            if (title != "") {
                $(".title").removeClass("required");
                $(".title").attr("placeholder", "Title");
                $("ul.table").append('<li class="body-table" id=' + id + '></li>');
                $('#' + id).append('<span><p>' + title + '</p></span>');
                $('#' + id).append('<span><p>' + descr + '</p></span>');
                $('#' + id).append('<span><i class="fas fa-trash-alt" id=erase' + id + '></i></span>');

            } else {
                $(".title").addClass("required");
                $(".title").attr("placeholder", "Title is required*");
            }


            $('#erase' + id).click(function () {
                $("#" + id).remove();
            });

        });
    });

    return load;
});