//사이드바가 구현될 div
var sidewrap=document.createElement("div");
sidewrap.className="sidebar-wrapper";
document.body.appendChild(sidewrap);

//각 사이드바 요소
var placesList = document.createElement("div");
placesList.id = "placesList";
sidewrap.appendChild(placesList);

var ps = new kakao.maps.services.Places(map);