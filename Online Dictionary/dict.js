$(document).ready(function () {

    $("#lookUp").click(function () {
        var word = $("input[name='word']").val();
        $.ajax({
            headers: { "Accept": "application/json" },
            url: "http://localhost:8080/dictionary",
            type: "POST",
            data: { "word": word },
            beforeSend: function (xhr) {
                xhr.withCredentials = true;
            },
            success: ajaxSuccess,
            error: ajaxFailure
        });
    });
});

function ajaxSuccess(data) {
    $('#content').empty();
    var resultHTML = "";
    for (let i = 0; i < data.length; i++) {
        resultHTML = resultHTML +
            "<div><p>" + (i + 1) + "(" + data[i].wordtype + ") " + data[i].definition + "</p></div>";
    }
    if (resultHTML === "") {
        resultHTML = "<div><p>Word not found</p></div>";
    }
    $("#content").append(resultHTML);
}

function ajaxFailure(xhr, status, exception) {
    console.log(xhr, status, exception);
}