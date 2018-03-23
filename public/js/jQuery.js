$(function() {
    $("#answer").on("click", function() {
        $("#answerUl")
            .append(`<div>
            <form method='post' >
            <input type="textarea" rows="6" name="msg"  id="answerLi">
            <button type="submit" id="saveButton" class="btn btn-default btn-lg" formmethod="post">Save</button>
            </form>
            </div>`);
    })

});