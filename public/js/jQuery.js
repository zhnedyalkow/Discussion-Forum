(function () {
    $("#login-modal-btn").click();

    // $("#loginForm").submit(function (e) {
    //     e.preventDefault();
    //     var loginData = {
    //         username: $("#loginUsername").val(),
    //         password: $("#loginPassword").val()
    //     };
    //     $.ajax({
    //         method: "POST",
    //         async: true,
    //         url: "/login",
    //         data: loginData,
    //         error: function (error) {
    //             var errorResponse = error.responseJSON.message;
    //             $("#loginErrorMsg")
    //                 .text(errorResponse)
    //                 .css("color", "#F00")
    //                 .css("float", "right");
    //         },
    //         success: function (resolve) {

    //             // redirecting here, because I cannot handle
    //             // the redirect in the /login route for some reason
    //             window.location.href = "/index";
    //         }
    //     });

    // })();
    // $("#answer").on("click", function () {
    //     $("#answerUl")
    //         .append("<div><input type=\"textarea\" rows=\"6\"  id=\"answerLi\"></div>");
    // });
})();