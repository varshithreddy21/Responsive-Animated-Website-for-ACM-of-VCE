$(document).ready(function(){
    $(window).scroll(function(){
        var pos=$(document).scrollTop();
        console.log(pos);
        if(pos>266){
            $(".navbar").css("background-color","black");
            $(".container1").css("background-color","black");
        }else{
            $(".navbar").css("background-color","transparent");
            $(".container1").css("background-color","transparent");
        }
        if(pos>55){
            $("#card1").addClass("animated slideInLeft duration-6.5s");
        }
        if(pos>619){
            $("#card2").addClass("animated slideInRight ");
        }
        if(pos>1641){
            $("#card3").addClass("animated slideInUp ");
        }
        if(pos>2142){
            $("#img0").addClass("animated slideInLeft slow ");
            $("#img1").addClass("animated slideInUp slow ");
            $("#img2").addClass("animated slideInRight slow ");
        }
        
    });
});
var typed = new Typed('#heading', {
    strings: ["","Student Chapter ^1000","Vardhaman ^1000"],
    loop:true,
    typeSpeed: 40
  });