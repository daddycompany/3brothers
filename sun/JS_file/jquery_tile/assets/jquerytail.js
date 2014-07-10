/**
 * Created by kimsunchul on 2014. 7. 10..
 */
imageTileClass={};
imageTileClass.i=0;
imageTileClass.j=0;
imageTileClass.bigboxWidth="";
imageTileClass.bigboxHeight="";
imageTileClass.imgClass=new Array;
imageTileClass.intvalue=0;
imageTileClass.lengthValue=0;
imageTileClass.limitValue=0;
imageTileClass.parentValue=0

/*
imageTileClass.imageTile1=function (){

    $.post("http://shining.daddycompany.com/shiningapi/getmylist", {userid: "fe7270@naver.com"}, function (data) {
        for (imageTileClass.i = 0; imageTileClass.i < 10; imageTileClass.i++) {
            imageTileClass.imgClass.push(data.list[imageTileClass.i].movie_thumnail);
        }
        if(imageTileClass.i==imageTileClass.imgClass.length){
          // imageTileClass.imgArray();
        }
    })
}
*/


imageTileClass.imageTile=function (eventData) {
    $("body").append(" <input type='text' id='widthName' />").append((" <input type='text' id='heightName' />")).
        append((" <input type='text' id='urlName' />")).append("<div id='bigBox'></div>")
    if(typeof eventData!="undefined"){
        imageTileClass.imgClass=eventData;
        if(imageTileClass.imgClass.length>0){
            imageTileClass.imgArray()
        }
    }else{
        alert("값을 넣으시요")
    }
};



imageTileClass.imgArray=function (){
    imageTileClass.lengthValue = imageTileClass.imgClass.length
    imageTileClass.intvalue = Math.sqrt(imageTileClass.imgClass.length)
    imageTileClass.parentValue=parseInt(imageTileClass.intvalue);
    if (imageTileClass.lengthValue < 4) {
        alert("이미지 4개 이상 선택하세요")
    } else if (imageTileClass.lengthValue >= 4) {
        if (typeof imageTileClass.intvalue == "int") {
            imageTileClass.limitValue = imageTileClass.lengthValue - 1;
        } else {
            imageTileClass.limitValue = Math.pow(parseInt(imageTileClass.intvalue), 2)
        }
        for (imageTileClass.j = 0; imageTileClass.j<imageTileClass.limitValue; imageTileClass.j++) {
            $("#bigBox").append("<div id='smallBox" + imageTileClass.j + "' class='smallboxClass'></div>")
            $("#smallBox" + imageTileClass.j).append("<div class='smallboxImg' style=background-image:url('" + imageTileClass.imgClass[imageTileClass.j] + "')></div>")
            console.log("ok")
        }
        if (imageTileClass.j == imageTileClass.limitValue) {
            imageTileClass.changeFn();
        }
    }
}


imageTileClass.changeFn=function() {
    $("#widthName,#heightName").change(function () {
        imageTileClass.bigboxWidth = $("#widthName").val();
        imageTileClass.bigboxHeight = $("#heightName").val();
        $("#bigBox").css({"width": imageTileClass.bigboxWidth, "height": imageTileClass.bigboxHeight, "border": "1px solid red"})
        var imgWidth = (imageTileClass.bigboxWidth/imageTileClass.parentValue).toFixed(3);
        var imgHeight = (imageTileClass.bigboxHeight/imageTileClass.parentValue).toFixed(3);
        $(".smallboxClass").css({"width": imgWidth,"height":imgHeight,"float":"left"})
        console.log(imageTileClass.parentValue)
    });
}




