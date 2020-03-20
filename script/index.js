$(document).ready(function(){
    var cur=0; 
    var len=$(".slide").length; //슬라이더의 갯수    
   
    //윈도우의 넓이와 높이
    var winW;
    var winH;

    chksize();
    $(window).resize(function(){
        chksize();
        // adjscr();
    });
//무한반복을 위해 가짜 슬라이드를 양옆에 붙이기
    $(".slide").eq(0).clone().appendTo($("#vbus"));
    $(".slide").eq(len-1).clone().prependTo($("#vbus"));

//일단 가짜가 보이지 않게 맨 처음의 버스 위치 조정
    $("#vbus").css("margin-left",-1*(winW)+"px");    

//슬라이딩 함수 구현하기
    function sliding(dir){
        //만약에 버스가 현재 움직이고 있는 도중이 아니라면
        if(!$("#bus").is(":animated")){
            cur = cur+dir;
            $("#vbus").stop().animate({
                marginLeft:-1*(cur+1)*winW + "px"
            },function(){
                if(cur >= len){
                    $(this).css("margin-left",-1*winW*(0+1)+ "px");
                    cur=0; //반드시 0으로 되돌려 줘야함
                }else if(cur <=-1){
                    $(this).css("margin-left",-1*len*winW+ "px");
                    cur=len-1;
                }
                $(".dot").removeClass("active");
				$(".dot").eq(cur).addClass("active");
            });
        }
    }


    //버튼 없앴음 dots로만 이동 가능하게
    // $(".prev").click(function(){
    //     sliding(-1);
    // });
    // $(".next").click(function(){
    //     sliding(1);
    // });

    function chksize() {
        
        winW=$(window).width();
        winH=$(window).height();
        $("#vslider, #vbus, .slide").height(winH);
        $(".slide").width(winW);
        $("#vbus").width(winW*(len+2)).css("margin-left",-1*(cur+1)*winW + "px");
        //리사이즈 할때마다 버스의 위치를 재조정
    };
//pagi 안에 .dot 구현하고 그 중 첫번째에 active라는 클래스 주기 
	for(i=0;i<len;i++){
		$("#pagi").append("<div class='dot'></div>")
	}
    $(".dot").eq(0).addClass("active");
    
    $(".dot").click(function(){
		var th=$(this).index();
		cur=0;
		sliding(th);
	});
//----------------------------------------------------------------- 
    var time=4000;						//괄호안에 바로 1을 넣어버리면 현재 실행											그러면 안되니까 뒷문을 열어준거임
    var auto=setInterval(sliding,time,1);							//
    $("#slider").mouseover(function(){
        clearInterval(auto);
    });
    $("#slider").mouseout(function(){
        auto=setInterval(sliding,time,1);
    });
//-------------------------------------------------
    // function adjscr(){
    //     //backimg가 페이지의 상단으로부터 얼마나 떨어져있는가?를 구해서
    //     //지금 얼마나 스크롤 했는가?의 값을 뺀다.
    //     var fromtop = $("#backimg").offset().top;
    //     var scr = $(document).scrollTop();
    //     var offsetY = (fromtop - scr)*-1; //이 값만큼 밑으로 내려야하니까 -로
    //     $("#backimg").css("background-position","0"+offsetY+"px");
    // }
    // $(document).scroll(function(){
    //     adjscr();
    // });
//---------------------------------------------------------- 

});