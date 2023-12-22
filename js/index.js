// 교통정보 토글
var menu1 = document.getElementById('menu01');
var subMenu01 = document.getElementById('subMenu01');
var menu01Img = document.getElementById('menu01Img');

var menuToggle1 = false;

menu1.onclick = function () {
  if (!menuToggle1) {
    subMenu01.style.display = 'flex';
    menu1.style.borderColor = '#3652ac';
    menu01Img.style.backgroundImage = 'url(./images/arrow_off.png)';
    menuToggle1 = true;
  } else {
    subMenu01.style.display = 'none';
    menu1.style.borderColor = '#bebebd';
    menu01Img.style.backgroundImage = 'url(./images/arrow_on.png)';
    menuToggle1 = false;
  }
};

// 지역정보 토글
var menu2 = document.getElementById('menu02');
var subMenu02 = document.getElementById('subMenu02');
var menu02Img = document.getElementById('menu02Img');

var menuToggle2 = false;

menu2.onclick = function () {
  if (!menuToggle2) {
    subMenu02.style.display = 'flex';
    menu2.style.borderColor = '#3652ac';
    menu02Img.style.backgroundImage = 'url(./images/arrow_off.png)';
    menuToggle2 = true;
  } else {
    subMenu02.style.display = 'none';
    menu2.style.borderColor = '#bebebd';
    menu02Img.style.backgroundImage = 'url(./images/arrow_on.png)';
    menuToggle2 = false;
  }
};

// 항공지도 토글
var menu3 = document.getElementById('menu03');
var subMenu03 = document.getElementById('subMenu03');
var menu03Img = document.getElementById('menu03Img');

var menuToggle3 = false;

menu3.onclick = function () {
  if (!menuToggle3) {
    subMenu03.style.display = 'flex';
    menu3.style.borderColor = '#3652ac';
    menu03Img.style.backgroundImage = 'url(./images/arrow_off.png)';
    menuToggle3 = true;
  } else {
    subMenu03.style.display = 'none';
    menu3.style.borderColor = '#bebebd';
    menu03Img.style.backgroundImage = 'url(./images/arrow_on.png)';
    menuToggle3 = false;
  }
};

// 일반지도 토글
var menu4 = document.getElementById('menu04');
var subMenu04 = document.getElementById('subMenu04');
var menu04Img = document.getElementById('menu04Img');

var menuToggle4 = false;

menu4.onclick = function () {
  if (!menuToggle4) {
    subMenu04.style.display = 'flex';
    menu4.style.borderColor = '#3652ac';
    menu04Img.style.backgroundImage = 'url(./images/arrow_off.png)';
    menuToggle4 = true;
  } else {
    subMenu04.style.display = 'none';
    menu4.style.borderColor = '#bebebd';
    menu04Img.style.backgroundImage = 'url(./images/arrow_on.png)';
    menuToggle4 = false;
  }
};

// 체크박스 토글
var check1 = document.getElementById('check1');
var check2 = document.getElementById('check2');
var check3 = document.getElementById('check3');
var check4 = document.getElementById('check4');
var check5 = document.getElementById('check5');
var check6 = document.getElementById('check6');
var check7 = document.getElementById('check7');
var check8 = document.getElementById('check8');
var check9 = document.getElementById('check9');
var check10 = document.getElementById('check10');
var subMenu1 = document.getElementById('subMenu1');
var subMenu2 = document.getElementById('subMenu2');
var subMenu3 = document.getElementById('subMenu3');
var subMenu4 = document.getElementById('subMenu4');
var subMenu5 = document.getElementById('subMenu5');
var subMenu6 = document.getElementById('subMenu6');
var subMenu7 = document.getElementById('subMenu7');
var subMenu8 = document.getElementById('subMenu8');
var subMenu9 = document.getElementById('subMenu9');
var subMenu10 = document.getElementById('subMenu10');

var checkToggle1 = false;
var checkToggle2 = false;
var checkToggle3 = false;
var checkToggle4 = false;
var checkToggle5 = false;
var checkToggle6 = false;
var checkToggle7 = false;
var checkToggle8 = false;
var checkToggle9 = false;
var checkToggle10 = false;

subMenu1.onclick = function () {
  if (!checkToggle1) {
    check1.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle1 = true;
  } else {
    check1.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle1 = false;
  }
};
subMenu2.onclick = function () {
  if (!checkToggle2) {
    check2.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle2 = true;
  } else {
    check2.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle2 = false;
  }
};
subMenu3.onclick = function () {
  if (!checkToggle3) {
    check3.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle3 = true;
  } else {
    check3.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle3 = false;
  }
};
subMenu4.onclick = function () {
  if (!checkToggle4) {
    check4.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle4 = true;
  } else {
    check4.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle4 = false;
  }
};
subMenu5.onclick = function () {
  if (!checkToggle5) {
    check5.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle5 = true;
  } else {
    check5.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle5 = false;
  }
};
subMenu6.onclick = function () {
  if (!checkToggle6) {
    check6.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle6 = true;
  } else {
    check6.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle6 = false;
  }
};
subMenu7.onclick = function () {
  if (!checkToggle7) {
    check7.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle7 = true;
  } else {
    check7.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle7 = false;
  }
};
subMenu8.onclick = function () {
  if (!checkToggle8) {
    check8.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle8 = true;
  } else {
    check8.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle8 = false;
  }
};
subMenu9.onclick = function () {
  if (!checkToggle9) {
    check9.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle9 = true;
  } else {
    check9.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle9 = false;
  }
};
subMenu10.onclick = function () {
  if (!checkToggle10) {
    check10.style.backgroundImage = 'url(./images/체크박스1.png)';
    checkToggle10 = true;
  } else {
    check10.style.backgroundImage = 'url(./images/체크박스.png)';
    checkToggle10 = false;
  }
};

// 지번 도로명 토글
var searchBt = document.getElementById('searchBt');

var toggle = false;

searchBt.onclick = function () {
  if (!toggle) {
    searchBt.style.backgroundImage = 'url(./images/serch_icon_2.png)';
    toggle = true;
  } else {
    searchBt.style.backgroundImage = 'url(./images/serch_icon_1.png)';
    toggle = false;
  }
};

// 미니맵
var minmap = document.getElementById('minmap0');
var minmapSub = document.getElementById('bar-sub3');

var minToggle = false;

minmap.onclick = function () {
  if (!minToggle) {
    minmapSub.style.display = 'flex';
    minToggle = true;
  } else {
    minmapSub.style.display = 'none';
    minToggle = false;
  }
};

