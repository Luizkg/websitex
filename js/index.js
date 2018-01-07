//顶部效果
{
    let flag = true;
    $(".course").click(function () {
        if (flag) {
            $(".course").css({height: 85, background: "#ff986a"});
            $(".top-sec-nav").show();
            $(".top-sec-nav li").each(function (index) {
                $(this).css({
                    opacity: 0,
                    transform: "rotateX(90deg)",
                    animation: "slideDown .3s ease-in " + index * 0.2 + "s forwards"
                })
            })
        } else {
            $(".top-sec-nav li").each(function (index) {
                $(this).css({
                    opacity: 1,
                    transform: "rotate(0)",
                    animation: "slideUp .3s ease-in " + (0.4 - index * 0.2) + "s forwards"
                });
                setTimeout(function () {
                    $(".course").css({height: 80, background: ""});
                    $(".top-sec-nav").hide();
                }, 400)
            })
        }
        flag = !flag;
    })
}
