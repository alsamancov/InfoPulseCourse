function showText() {
    $(".content").html($(".editorContent").val());
}

function decorText(event) {
    event.preventDefault();
    console.log($(this).attr("class").replace("btn", ""));
}

$(".okBtn").click(showText);
$(".btn").click(decorText);


