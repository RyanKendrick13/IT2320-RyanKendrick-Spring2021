$(document).ready(function(){
    //jQuery code goes here
    
$("#up").on("click",function(){

    $("#box").animate({
        top:"0px"
    
    });
});
    $("#down").on("click",function(){

        $("#box").animate({
        top:"350px"
        
        });
   
});



$("#left").on("click",function(){

    $("#box").animate({
    left:"0px"
    
    });
});
$("#right").on("click",function(){

    $("#box").animate({
    left:"350px"
    
    });
    
});
$("#fadeout").on("click",function(){

    $("#box").animate({
    height:"hide"
    });
});
$("#fadein").on("click",function(){

    $("#box").animate({
    height:"show"
    });
});
    $("#reset").on("click",function(){

        $("#box").animate({
            height:"show",
            left:"0px",
            top:"0px"

        });
    });
});






