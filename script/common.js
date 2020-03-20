$(document).ready(function(){
    $(".main").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    });
    $(".main").mouseout(function(){
        $(this).children(".sub").stop().slideUp();
    });
    $(".mmain").mouseover(function(){
        $(this).children(".msub").stop().slideDown();
    });
    $(".mmain").mouseout(function(){
        $(this).children(".msub").stop().slideUp();
    });
//--------------------
    var stat=false;
    $("#ham").click(function(){
        if(stat==false){
            $("#mnav").css("right","0px");
            stat=true;
        }else{
            $("#mnav").css("right","-200px");
            stat=false;
        }
    });    
//---------------------------------------------------------------
//.list-blue
//".라는 리스트들의 li태그안쪽에 파란박스, 내용이 들어갈 박스 만들어주기
    function makenum(name){    
        $(name).each(function(){
            $(this).children("li").each(function(){
                var txt = $(this).text();
                var nth = $(this).index();
                $(this).empty();
                $(this).append("<div class='li-num'></div><div class='li-txt'>"+txt+"</div>");
                $(this).children(".li-num").text(nth+1);
            });
        });
    }
    makenum(".list-blue");
});