$(".el-header").click(function () {

    $header = $(this);
    $content = $header.next();
    $content.slideToggle(500, function () {});
});
