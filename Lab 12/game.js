$(document).ready(function(){
    //jQuery code goes here
    
$("#up").on("click",function(){

    $("#box").animate({
        top:"30px"
    
    });
});
    $("#down").on("click",function(){

        $("#box").animate({
        down:"250px"
        
        });
   
});



$("#left").on("click",function(){

    $("#box").animate({
    left:"250px"
    
    });
});
$("#right").on("click",function(){

    $("#box").animate({
    right:"250px"
    
    });
    $("#fadeout").on("click",function(){

        $("#box").animate({
        height:"hide"
        });
});
});

});





