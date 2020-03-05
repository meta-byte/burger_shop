$(function () {
    $(".order").on("click", function (event) {

        var id = $(this).data("id");
        console.log(id)

        $.ajax("/api/burgers/" + id, {
            type: "PUT"
        }).then(
            function () {
                location.reload();
            }
        );
    });

});