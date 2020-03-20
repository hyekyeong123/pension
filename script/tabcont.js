//이 자바스크립트를 적용할려면 탭버튼에 .tabbtn1,2,3~이라는 클래스 이름을 준다.
$(document).ready(function(){
    //.tabcontBox
    var params = {},
    //file:///D:/study/HTML/coding%20pra/Jacques_Gaschon/Jac1.html?tab=2
        pairs = document.URL.split('?')
                .pop()
                //tab=2
                .split('&');

    for (var i = 0; i < pairs.length; i++) {
            var p;
            p = pairs[i].split('=');
            params[ p[0] ] =  p[1];
    }     
    var now = params.tab;
    
//--------------------------------
    $(".tabbtn").click(function(){
        var kkk = $(this).index(".tabbtn");
        $(".tabcontBox").slick('slickGoTo',kkk);
        $(".tabbtn").removeClass("tabactive");
        $(this).addClass("tabactive");
    });



    $(".tabcontBox").slick({
        arrows: false,
        adaptiveHeight: true
        //각 슬라이드의 높이에 맞춰서 하겠다. 죽 반응형 슬라이드로 하겠다
    });

    $(".tabbtn"+now).trigger("click");

    //tab버튼 now를 클릭하면 지금 누른것처럼 하라
//----------------------------------------------------------------
$('.tabcontBox').on('afterChange', function(event,slick, currentSlide){
    $(".tabbtn").removeClass("tabactive");
    $(".tabbtn").eq(currentSlide).addClass("tabactive");
});





















});