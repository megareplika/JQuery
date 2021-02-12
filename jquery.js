function init() {
//    $("#kezd").click(betolt);
    $("#kezd").on("click", betolt);
}
function betolt() {
    $("#jatekter").empty();
    for (var i = 0; i < 9; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).append("<p>");
        $("#jatekter div p").eq(i).text("Nevek");
        $("#jatekter div img").eq(i).attr("src", "kartya/makk-hetes.png");
        $("#jatekter div img").eq(i).attr("alt", "");
    }

    $("#jatekter div p").css("color", "red");
//    $("#jatekter div p").css({"color":"red","font-size":"30px"}); json mode
//    $("#jatekter").html(txt);/*text html value*/
    $("#jatekter div").addClass("kartya");
    $("#jatekter div").on(hover(function () {$(this).css("background", "pink");}, 
    function () {$(this).css("background", "white");}));
    
    $("#jatekter div").on({
        mouseenter:function () {$(this).css("background", "pink");},
        mouseleave:function () {$(this).css("background", "white");},
        click: function () {$(this).fadeToggle(1000);}
    });
    
}

$(function () {
    init();
});

/*
 * or
 * 
 * $(document).ready(function(){
 
 init();
 
 });
 * 
 */