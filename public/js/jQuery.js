/* globals event window alert location*/
(function () {
    $("#login-modal-btn").click();

    function formatData($form) {
        var arr = $form.serializeArray();
        var obj = {};
        for (var i = 0; i < arr.length; i += 1) {
            var key = arr[ i ].name;
            var value = arr[ i ].value;
            obj[ key ] = value;
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

        if (nameLen < 4 || nameLen > 50) {
            if (!$(".catName-wrapper").children(":last").is("p")) {
                var nameErr = $("<p class='error-message'></p>")
                    .append("Name must be between 4 and 50 characters!");
                $(".catName-wrapper").append(nameErr);
            }
        } else {
            isValid += 1;
        }

        if (descLen < 4 || descLen > 50) {

            if (!$(".catDesc-wrapper").children(":last").is("p")) {
                var descErr = $("<p class='error-message'></p>")
                    .append("Description must be between 4 and 50 characters!");
                $(".catDesc-wrapper").append(descErr);
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
        if (threadTitleLen < 4 || threadTitleLen > 50) {
            if (!$(".threadTitle-wrapper").children(":last").is("p")) {
                var nameErr = $("<p class='error-message'></p>")
                    .append("Thread title must be between 4 and 50 characters!");
                $(".threadTitle-wrapper").append(nameErr);
            }
        } else {
            isValid += 1;
        }
        if (postTitleLen < 4 || postTitleLen > 50) {
            if (!$(".postTitle-wrapper").children(":last").is("p")) {
                var titleErr = $("<p class='error-message'></p>")
                    .append("Post title must be between 4 and 50 characters!");
                $(".postTitle-wrapper").append(titleErr);
            }
        } else {
            isValid += 1;
        }
        if (postContentLen < 4 || postContentLen > 100) {
            if (!$(".postContent-wrapper").children(":last").is("p")) {
                var contentErr = $("<p class='error-message'></p>")
                    .append("Post content must be between 4 and 100 characters!");
                $(".postContent-wrapper").append(contentErr);
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
            if (!$(".postTitle-wrapper").children(":last").is("p")) {
                var titleErr = $("<p class='error-message'></p>")
                        .append("Post title must be between 4 and 25 characters!");
                $(".postTitle-wrapper").append(titleErr);
            }
        } else {
            isValid += 1;
        }
        if (contentLen < 4 || contentLen > 100) {
            if (!$(".postContent-wrapper").children(":last").is("p")) {
                var contentErr = $("<p class='error-message'></p>")
                        .append("Post content must be between 4 and 100 characters!");
                $(".postContent-wrapper").append(contentErr);
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

        if (answerLen < 4 || answerLen > 100) {
            if (!$(".answerContent-wrapper").children(":last").is("p")) {
                var contentErr = $("<p class='error-message'></p>")
                        .append("Post content must be between 4 and 100 characters!");
                $(".answerContent-wrapper").append(contentErr);
            }
        } else {
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
