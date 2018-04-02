/* globals event window alert location*/
(function () {
    $("#login-modal-btn").click();

    function formatData($form) {
        var arr = $form.serializeArray();
        var obj = {};
        for (var i = 0; i < arr.length; i += 1) {
            var key = arr[i].name;
            var value = arr[i].value;
            obj[key] = value;
        }

        return obj;
    }

    $("#createCategory-btn").on("click", function () {
        event.preventDefault();
        var $form = $("form");
        var data = formatData($form);
        var nameLen = data.catName.length;
        var descLen = data.description.length;

        var isValid = 0;

        console.log($("#catName-input").siblings().next());
        if (nameLen < 4 || nameLen > 25) {
            if (!$("#catName-input").siblings().next().is("p")) {
                var nameErr =
                    $("<p class='error-message'>Name must be between 4 and 25 characters!</p>");
                nameErr.insertAfter($("#catName-input"));
            }
        } else {
            isValid += 1;
        }

        if (descLen < 4 || descLen > 25) {
            if (!$("#catDesc-input").siblings().next().is("p")) {
                var descErr =
                    $("<p class='error-message'>Description must be between 4 and 25 characters!</p>");
                descErr.insertAfter($("#catDesc-input"));
            }
        } else {
            isValid += 1;
        }
        if (isValid === 2) {
            $.ajax({
                method: $form.attr("method"),
                async: true,
                url: $form.attr("action"),
                data: $form.serialize(),
                error: function (error) {
                    alert(error);
                },
                success: function () {
                    window.location.href = "/home";
                }
            });
        }
    });

    $("#createTheme-btn").on("click", function () {
        event.preventDefault();
        var $form = $("#cr");
        var data = formatData($form);
        var threadTitleLen = data.threadTitle.length;
        var postTitleLen = data.postTitle.length;
        var postContentLen = data.postContent.length;

        var isValid = 0;
        console.log($("#threadTitle-input").siblings().next());
        if (threadTitleLen < 4 || threadTitleLen > 25) {
            if (!$("#threadTitle-input").siblings().next().is("p")) {
                var nameErr =
                    $("<p class='error-message'>Thread title must be between 4 and 25 characters!</p>");
                nameErr.insertAfter($("#threadTitle-input"));
            }
        } else {
            isValid += 1;
        }
        console.log($("#postTitle-input").siblings().next());
        if (postTitleLen < 4 || postTitleLen > 25) {
            if (!$("#postTitle-input").siblings().next().is("p")) {
                var titleErr =
                    $("<p class='error-message'>Post title must be between 4 and 25 characters!</p>");
                titleErr.insertAfter($("#postTitle-input"));
            }
        } else {
            isValid += 1;
        }
        if (postContentLen < 4 || postContentLen > 100) {
            if (!$("#postContent-input").siblings().next().is("p")) {
                var contentErr =
                    $("<p class='error-message'>Post content must be between 4 and 100 characters!</p>");
                contentErr.insertAfter($("#postContent-input"));
            }
        } else {
            isValid += 1;
        }
        if (isValid === 3) {
            $.ajax({
                method: $form.attr("method"),
                async: true,
                url: $form.attr("action"),
                data: $form.serialize(),
                error: function (error) {
                    alert(error);
                },
                success: function () {
                    location.reload(true);
                }
            });
        }
    });

    $("#createPost-btn").on("click", function () {
        event.preventDefault();
        var $form = $("#comment");
        var data = formatData($form);
        var titleLen = data.title.length;
        var contentLen = data.content.length;

        var isValid = 0;

        if (titleLen < 4 || titleLen > 25) {
            if (!$("#postTitle").siblings().next().is("p")) {
                var nameErr =
                    $("<p class='error-message'>Post title must be between 4 and 25 characters!</p>");
                nameErr.insertAfter($("#postTitle"));
            }
        } else {
            isValid += 1;
        }
        if (contentLen < 4 || contentLen > 25) {
            if (!$("#postContent").siblings().next().is("p")) {
                var titleErr =
                    $("<p class='error-message'>Post content must be between 4 and 25 characters!</p>");
                titleErr.insertAfter($("#postContent"));
            }
        } else {
            isValid += 1;
        }
        if (isValid === 2) {
            $.ajax({
                method: $form.attr("method"),
                async: true,
                url: $form.attr("action"),
                data: $form.serialize(),
                error: function (error) {
                    alert(error);
                },
                success: function () {
                    location.reload(true);
                }
            });
        }
    });

    $("#addAnswer-btn").on("click", function () {
        event.preventDefault();
        var $form = $("#answer");
        var data = formatData($form);
        var answerLen = data.answerContent.length;

        var isValid = 0;
        if (answerLen < 4 || answerLen > 100) {
            if (!$("#answerContent-input").siblings().next().is("p")) {
                var contentErr =
                    $("<p class='error-message'>Post content must be between 4 and 100 characters!</p>");
                contentErr.insertAfter($("#answerContent-input"));
            }
        } else {
            isValid += 1;
        }
        if (isValid === 1) {
            $.ajax({
                method: $form.attr("method"),
                async: true,
                url: $form.attr("action"),
                data: $form.serialize(),
                error: function (error) {
                    alert(error);
                },
                success: function () {
                    location.reload(true);
                }
            });
        }
    });

})();