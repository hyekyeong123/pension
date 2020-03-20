//.ImgBox의 안쪽에 .ImgBoxHoverBox를 만든다듬에 그 안에 p태그를 만들자
//.ImgBox에 hover하면 그 안에 이미지의 alt를 읽어와서 이를 자식인 p태그에 집어 넣자

$(document).ready(function(){
    $(".ImgBox").append("<div class='ImgBoxHoverBox'><p></p></div>")
    $(".ImgBox").mouseover(function(){
        var alt= $(this).children("img").attr("alt");
        $(this).find("p").text(alt);
    });
//----------------------------------------------------------------- 
    map.relayout();

});