$(document).ready(function(){
    //.flex에 마우스를 올리면 높이가 30vh인 검은색 박스인 .flexbox가 올라온다.
        $(".flex").mouseover(function(){
            $(".flex").width("33vw");
            $(this).width("50vw");

            // $(".flexhover").width("33vw").slideDown();
            // $(this).find(".flexhover").width("50vw").slideUp();
        });
        $(".flex").mouseout(function(){
            $(".flex").width("33vw");
        });




























});