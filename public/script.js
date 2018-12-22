$(document).ready(function(){

    $("nav a, #about_title").click(function(){
        $("header").animate({ height: "60px" }, "fast", "easeOutQuad");
        $(".open_header").css( 'display', 'inline' );
    });

    $(".open_header").click(function(){
        $("header").animate({ height: "700px" }, "slow", "easeOutQuad");
        $(".about").hide("slow");
        $(".calendar").hide("slow");
        $(".contact").hide("slow");
        $(".open_header").css( 'display', 'none' );

    })

    $("#about, #about_title").click(function(){
        $(".about").show("slow");

        $(".calendar").hide("slow");
        $(".contact").hide("slow");
    });

    $("#calendar").click(function(){
        $(".calendar").show("slow");

        $(".about").hide("slow");
        $(".contact").hide("slow");
    });

    $("#contact").click(function(){
        $(".contact").show("slow");

        $(".calendar").hide("slow");
        $(".about").hide("slow");
    });

})