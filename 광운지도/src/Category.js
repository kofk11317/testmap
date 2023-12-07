document.write("<script type='text/javascript' src='/src/Map.js'><" + "/script>");

//카테고리 버튼 표시용 div
categorysel = document.createElement("div");
categorysel.className = "categorywrap";
document.body.appendChild(categorysel);

//현재 클릭 코드
var currclick = '';

var placelist = [
    { ko: "학교 건물", code: "KW" }, //학교건물 코드 
    { ko: "편의점", code: "CS2" },
    { ko: "음식점", code: "FD6" },
    { ko: "카페", code: "CE7" },
    { ko: "은행", code: "BK9" },
    { ko: "병원", code: "HP8" },
    { ko: "약국", code: "PM9" },
    { ko: "프로그램",code: "program" },
    // { ko: "졸업요건",code: "requirements" }

];

//카테고리 버튼 클릭 시
categorysel.addEventListener('click', function (e) {
    if (currclick == e.target.id) 
    { 
        // 버튼이 두번째 눌렸을 때는 다시 원래 색깔로
        document.getElementById(currclick).style.backgroundColor = "rgb(213, 141, 103)";
        currclick = '';
        removeMarker();
        updatecode("");
        infowindow.close();
        sidebarclose();
        removeOverlay();
    } 
    else 
    {
       
        currclick = e.target.id;
        updatecode(e.target.id);
        infowindow.close();
        removeOverlay();
        // 프로그램 버튼이 눌렸을 때는 프로그램 페이지로 연결
        if (currclick == "program"){
            window.open ("pages/프로그램.html");
        }
                // 졸업요건 버튼이 눌렸을 때는 졸업요건 페이지로 연결

        if (currclick == "requirements"){
            window.open ("pages/소프트웨어_졸업요건.html");
        }
        // 선택된 버튼은 색깔 변경
        document.getElementById(currclick).style.backgroundColor = "red";
       
    }
});


//버튼 생성
for (var i = 0; i < placelist.length; i++) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.innerText = placelist[i].ko;
    btn.id = placelist[i].code;
    btn.className = "btn";


    categorysel.appendChild(btn);
}
