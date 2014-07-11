/**
 * Created by kimsunchul on 2014. 7. 10..
 */
sun_imageTileClass={};
sun_imageTileClass.i=0;
sun_imageTileClass.j=0;
sun_imageTileClass.bigboxWidth=0;
sun_imageTileClass.bigboxHeight=0;
sun_imageTileClass.imgClass=new Array;
sun_imageTileClass.intvalue=0;
sun_imageTileClass.lengthValue=0;
sun_imageTileClass.limitValue=0;
sun_imageTileClass.parseIntValue=0

sun_imageTileClass.imageTile=function (targetData,targetId) {
    $(".target").attr("id",targetId)
    if(typeof targetData!="undefined"){
        sun_imageTileClass.imgClass=targetData;
        if(sun_imageTileClass.imgClass.length>0){
            sun_imageTileClass.imgArray(targetId)
        }
    }else{
        console.log("no image")
    }
};

sun_imageTileClass.imgArray=function (targetId){
    console.log(targetId)
    sun_imageTileClass.lengthValue = sun_imageTileClass.imgClass.length
    sun_imageTileClass.intvalue = Math.sqrt(sun_imageTileClass.imgClass.length)
    sun_imageTileClass.parseIntValue=parseInt(sun_imageTileClass.intvalue);
    if (sun_imageTileClass.lengthValue < 4) {
        console.log("please image count 4")
    } else if (sun_imageTileClass.lengthValue >= 4) {
        if (typeof sun_imageTileClass.intvalue == "int") {
            sun_imageTileClass.limitValue = sun_imageTileClass.lengthValue - 1;
        } else {
            sun_imageTileClass.limitValue = Math.pow(parseInt(sun_imageTileClass.intvalue), 2)
        }
        for (sun_imageTileClass.j = 0; sun_imageTileClass.j<sun_imageTileClass.limitValue; sun_imageTileClass.j++) {
            $("#"+targetId).append("<div id='smallBox" + sun_imageTileClass.j + "' class='smallboxClass'></div>")
            $("#smallBox" + sun_imageTileClass.j).append("<div class='smallboxImg' style=position:relative;width:100%;height:100%;background-size:cover;background-position:center;background-image:url('" + sun_imageTileClass.imgClass[sun_imageTileClass.j] + "')></div>")
        }
        if (sun_imageTileClass.j == sun_imageTileClass.limitValue) {
            console.log("load complete")
        }
    }
    sun_imageTileClass.bigboxWidth = $("#"+targetId).width()
    sun_imageTileClass.bigboxHeight = $("#"+targetId).height()
    console.log(sun_imageTileClass.bigboxWidth )
    $("#"+targetId).css({"width": sun_imageTileClass.bigboxWidth, "height": sun_imageTileClass.bigboxHeight})
    var imgWidth = (sun_imageTileClass.bigboxWidth/sun_imageTileClass.parseIntValue).toFixed(3);
    var imgHeight = (sun_imageTileClass.bigboxHeight/sun_imageTileClass.parseIntValue).toFixed(3);
    $(".smallboxClass").css({"width": imgWidth,"height":imgHeight,"float":"left"})
};



