/**
 * Created by kimsunchul on 2014. 8. 28..
 */
function time() {
    var clock = document.getElementById("clock");            // 출력할 장소 선택
    var now = new Date();                                                  // 현재시간
    var nowTime = now.getFullYear() + "년" + (now.getMonth() + 1) + "월" + now.getDate() + "일" + now.getHours() + "시" + now.getMinutes() + "분" + now.getSeconds() + "초";
    console.lo(nowTime);
    setTimeout("time()",1000)
}
