function sendRequest() {
    console.log("sending request");
    $.ajax({
        type: "POST",
        url: "http://localhost:3000",
        data: { "d": "shekhar" },
        success: function(data) {
            console.log(data);
        }
    });
}