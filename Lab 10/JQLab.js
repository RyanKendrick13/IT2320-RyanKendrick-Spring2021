$(function(){    

    //all of jquery your code goes here

    $("#btn1").on("click",function(){

        $(".wrapperDiv").hide();
        

    });
    $("#btn2").on("click",function(){

        $(".wrapperDiv").show();
        

    });
    $("#btn3").on("click",function(){

        $("#1").text("one").css({"background-color":"black","color":"white"});
        $("#2").text("two").css({"background-color":"white","color":"black"});
        $("#3").text("three").css({"background-color":"black","color":"white"});
        $("#4").text("four").css({"background-color":"white","color":"black"});

    });

    $(".wrapperDiv").on("mouseover",function(){
        $(".wrapperDiv").removeAttr("style");
        $("#1").on("mouseover",function(){
            $("#1").css("background-color","yellow");
        });
        $("#2").on("mouseover",function(){
            $("#2").css("background-color","yellow");
        });
        $("#3").on("mouseover",function(){
            $("#3").css("background-color","yellow");
        });
        $("#4").on("mouseover",function(){
            $("#4").css("background-color","yellow");
        });

        
    });

    $(".wrapperDiv").on("mouseout",function(){

        $(".wrapperDiv").removeAttr("style");


});

});