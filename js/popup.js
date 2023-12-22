// 시뮬레이션

var simulation = document.getElementsByClassName('simulation')[0];
var simulationPopup = document.getElementsByClassName('simulationPopup')[0];

var simulToggle = false;

simulation.onclick = function () {
  if (!simulToggle) {
    simulationPopup.style.display = 'flex';
    simulToggle = true;
  } else {
    simulationPopup.style.display = 'none';
    simulToggle = false;
  }
};

var closePop = document.getElementsByClassName('close')[0];

closePop.onclick = function () {
  simulationPopup.style.display = 'none';
  simulToggle = false;
};

// 스위치

var switch1 = document.getElementsByClassName('switch1')[0];
var switch2 = document.getElementsByClassName('switch2')[0];
var on1 = document.getElementsByClassName('on1')[0];
var on2 = document.getElementsByClassName('on2')[0];
var off1 = document.getElementsByClassName('off1')[0];
var off2 = document.getElementsByClassName('off2')[0];

var switchToggle1 = false;
var switchToggle2 = false;

switch1.onclick = function () {
  if (!switchToggle1) {
    on1.style.background = 'none';
    on1.style.color = '#000';
    off1.style.backgroundImage = 'url(../images/on_bg.png)';
    off1.style.color = '#fff';
    switchToggle1 = true;
  } else {
    on1.style.backgroundImage = 'url(../images/on_bg.png)';
    on1.style.color = '#fff';
    off1.style.background = 'none';
    off1.style.color = '#000';
    switchToggle1 = false;
  }
};

switch2.onclick = function () {
  if (!switchToggle2) {
    on2.style.background = 'none';
    on2.style.color = '#000';
    off2.style.backgroundImage = 'url(../images/on_bg.png)';
    off2.style.color = '#fff';
    switchToggle2 = true;
  } else {
    off2.style.background = 'none';
    off2.style.color = '#000';
    on2.style.backgroundImage = 'url(../images/on_bg.png)';
    on2.style.color = '#fff';
    switchToggle2 = false;
  }
};

// 탭메뉴
// Tab 키 스위치
var tab = document.getElementsByClassName('tab')[0];

var tabSwitch = false;
window.addEventListener('keydown', function (event) {
  if (event.keyCode == '9' && !tabSwitch) {
    tab.style.display = 'block';
    tabSwitch = true;
  } else {
    tab.style.display = 'none';
    tabSwitch = false;
  }
});

// 위치검색 스위치
var tab1 = document.getElementsByClassName('integrated')[0];
var seeMore1 = document.getElementsByClassName('seeMore1')[0];
var tab2 = document.getElementsByClassName('designation')[0];
var seeMore2 = document.getElementsByClassName('seeMore2')[0];
var tab3 = document.getElementsByClassName('roadName')[0];
var seeMore3 = document.getElementsByClassName('seeMore2')[1];
var tab4 = document.getElementsByClassName('streetNumber')[0];
var seeMore4 = document.getElementsByClassName('seeMore2')[2];

var tabToggle1 = false;
var tabToggle2 = false;
var tabToggle3 = false;
var tabToggle4 = false;

tab1.onclick = function () {
  if (!tabToggle1) {
    tab1.style.color = '#16e7c7';
    tab1.style.borderBottom = '3px solid #16e7c7';
    tab2.style.color = '#fff';
    tab2.style.borderBottom = '0';
    tab3.style.color = '#fff';
    tab3.style.borderBottom = '0';
    tab4.style.color = '#fff';
    tab4.style.borderBottom = '0';
    seeMore1.style.display = 'flex';
    seeMore2.style.display = 'none';
    seeMore3.style.display = 'none';
    seeMore4.style.display = 'none';
  } else {
    seeMore1.style.display = 'flex';
    seeMore2.style.display = 'none';
    seeMore3.style.display = 'none';
    seeMore4.style.display = 'none';
  }
};

tab2.onclick = function () {
  if (!tabToggle2) {
    tab1.style.color = '#fff';
    tab1.style.borderBottom = '0';
    tab2.style.color = '#16e7c7';
    tab2.style.borderBottom = '3px solid #16e7c7';
    tab3.style.color = '#fff';
    tab3.style.borderBottom = '0';
    tab4.style.color = '#fff';
    tab4.style.borderBottom = '0';
    seeMore1.style.display = 'none';
    seeMore2.style.display = 'flex';
    seeMore3.style.display = 'none';
    seeMore4.style.display = 'none';
  } else {
    seeMore1.style.display = 'none';
    seeMore2.style.display = 'flex';
    seeMore3.style.display = 'none';
    seeMore4.style.display = 'none';
  }
};

tab3.onclick = function () {
  if (!tabToggle3) {
    tab1.style.color = '#fff';
    tab1.style.borderBottom = '0';
    tab2.style.color = '#fff';
    tab2.style.borderBottom = '0';
    tab3.style.color = '#16e7c7';
    tab3.style.borderBottom = '3px solid #16e7c7';
    tab4.style.color = '#fff';
    tab4.style.borderBottom = '0';
    seeMore1.style.display = 'none';
    seeMore2.style.display = 'none';
    seeMore3.style.display = 'flex';
    seeMore4.style.display = 'none';
  } else {
    seeMore1.style.display = 'none';
    seeMore2.style.display = 'none';
    seeMore3.style.display = 'flex';
    seeMore4.style.display = 'none';
  }
};

tab4.onclick = function () {
  if (!tabToggle4) {
    tab1.style.color = '#fff';
    tab1.style.borderBottom = '0';
    tab2.style.color = '#fff';
    tab2.style.borderBottom = '0';
    tab3.style.color = '#fff';
    tab3.style.borderBottom = '0';
    tab4.style.color = '#16e7c7';
    tab4.style.borderBottom = '3px solid #16e7c7';
    seeMore1.style.display = 'none';
    seeMore2.style.display = 'none';
    seeMore3.style.display = 'none';
    seeMore4.style.display = 'flex';
  } else {
    seeMore1.style.display = 'none';
    seeMore2.style.display = 'none';
    seeMore3.style.display = 'none';
    seeMore4.style.display = 'flex';
  }
};

// 더보기

var seeMoreBt1 = document.getElementsByClassName('seeMoreBt')[0];
var seeMoreBt2 = document.getElementsByClassName('seeMoreBt')[1];
var seeMoreBt3 = document.getElementsByClassName('seeMoreBt')[2];
var designationDiv1 = document.getElementsByClassName('designationDiv')[0];
var designationDiv2 = document.getElementsByClassName('designationDiv')[1];
var designationDiv3 = document.getElementsByClassName('designationDiv')[2];

var seeToggle1 = false;
var seeToggle2 = false;
var seeToggle3 = false;

seeMoreBt1.onclick = function () {
  if (!seeToggle1) {
    designationDiv1.style.display = 'flex';
    seeToggle1 = true;
  } else {
    designationDiv1.style.display = 'none';
    seeToggle1 = false;
  }
};
seeMoreBt2.onclick = function () {
  if (!seeToggle2) {
    designationDiv2.style.display = 'flex';
    seeToggle2 = true;
  } else {
    designationDiv2.style.display = 'none';
    seeToggle2 = false;
  }
};
seeMoreBt3.onclick = function () {
  if (!seeToggle3) {
    designationDiv3.style.display = 'flex';
    seeToggle3 = true;
  } else {
    designationDiv3.style.display = 'none';
    seeToggle3 = false;
  }
};

// 레이어

var layerBt1 = document.getElementsByClassName('layer')[1];
var layerBt = document.getElementsByClassName('layer-open')[0];
var layerFirst = document.getElementsByClassName('layer-first')[0];
var layerPlusOpen = document.getElementsByClassName('layer-first-plus')[0];
var layerPlus = document.getElementsByClassName('layer-plus-pop')[0];
var layerPop = document.getElementsByClassName('layer-pop')[0];
var layerClose1 = document.getElementsByClassName('layer-close1')[0];
var layerClose = document.getElementsByClassName('layer-close')[0];
var closeButton = document.getElementsByClassName('close-button')[0];

var layerToggle = false;

var layer1Toggle = false;

var layerPlusToggle = false;

layerBt1.onclick = function () {
  if (!layer1Toggle) {
    layerFirst.style.display = 'block';
    layer1Toggle = true;
  } else {
    layerFirst.style.display = 'none';
    layer1Toggle = false;
  }
};

layerPlusOpen.onclick = function () {
  if (!layerPlusToggle) {
    layerPlus.style.display = 'block';
    layerPlusToggle = true;
  } else {
    layerPlus.style.display = 'none';
    layerPlusToggle = false;
  }
};

layerBt.onclick = function () {
  if (!layerToggle) {
    layerPop.style.display = 'block';
    layerToggle = true;
  } else {
    layerPop.style.display = 'none';
    layerToggle = false;
  }
};

layerClose.onclick = function () {
  layerPop.style.display = 'none';
  layerToggle = false;
};

closeButton.onclick = function () {
  layerPop.style.display = 'none';
  layerToggle = false;
};

// 레이어 메뉴

var layerListoff1 = document.getElementsByClassName('layer-list')[0];
var layerListoff2 = document.getElementsByClassName('layer-list')[1];
var layerListoff3 = document.getElementsByClassName('layer-list')[2];
var ClickDiv1 = document.getElementsByClassName('list-section')[0];
var ClickDiv2 = document.getElementsByClassName('list-section')[1];
var ClickDiv3 = document.getElementsByClassName('list-section')[2];
var layerFirstIcon1 = document.getElementsByClassName('layer-first-i')[0];
var layerFirstIcon2 = document.getElementsByClassName('layer-first-i')[1];
var layerFirstIcon3 = document.getElementsByClassName('layer-first-i')[2];

var layerClickToggle1 = false;
var layerClickToggle2 = false;
var layerClickToggle3 = false;

layerListoff1.onclick = function () {
  if (!layerClickToggle1) {
    ClickDiv1.style.display = 'flex';
    ClickDiv2.style.display = 'none';
    ClickDiv3.style.display = 'none';
    layerFirstIcon1.style.background = 'no-repeat url(../images/down1.svg)';
    layerFirstIcon2.style.background = 'no-repeat url(../images/up1.svg)';
    layerFirstIcon3.style.background = 'no-repeat url(../images/up1.svg)';
    layerClickToggle1 = true;
    layerClickToggle2 = false;
    layerClickToggle3 = false;
  } else {
    ClickDiv1.style.display = 'none';
    layerFirstIcon1.style.background = 'no-repeat url(../images/up1.svg)';
    layerFirstIcon2.style.background = 'no-repeat url(../images/up1.svg)';
    layerFirstIcon3.style.background = 'no-repeat url(../images/up1.svg)';
    layerClickToggle1 = false;
  }
};

layerListoff2.onclick = function () {
  if (!layerClickToggle2) {
    ClickDiv1.style.display = 'none';
    ClickDiv2.style.display = 'flex';
    ClickDiv3.style.display = 'none';
    layerFirstIcon1.style.background = 'no-repeat url(../images/up1.svg)';
    layerFirstIcon2.style.background = 'no-repeat url(../images/down1.svg)';
    layerFirstIcon3.style.background = 'no-repeat url(../images/up1.svg)';
    layerClickToggle1 = false;
    layerClickToggle2 = true;
    layerClickToggle3 = false;
  } else {
    ClickDiv2.style.display = 'none';
    layerFirstIcon2.style.background = 'no-repeat url(../images/up1.svg)';
    layerClickToggle2 = false;
  }
};

layerListoff3.onclick = function () {
  if (!layerClickToggle3) {
    ClickDiv1.style.display = 'none';
    ClickDiv2.style.display = 'none';
    ClickDiv3.style.display = 'flex';
    layerFirstIcon1.style.background = 'no-repeat url(../images/up1.svg)';
    layerFirstIcon2.style.background = 'no-repeat url(../images/up1.svg)';
    layerFirstIcon3.style.background = 'no-repeat url(../images/down1.svg)';
    layerClickToggle1 = false;
    layerClickToggle2 = false;
    layerClickToggle3 = true;
  } else {
    ClickDiv3.style.display = 'none';
    layerFirstIcon3.style.background = 'no-repeat url(../images/up1.svg)';
    layerClickToggle3 = false;
  }
};

// 레이어 모두 끄기

layerClose1.onclick = function () {
  layerFirst.style.display = 'none';
  layerPop.style.display = 'none';
  layerPlus.style.display = 'none';
  layer1Toggle = false;
  layerToggle = false;
  layerPlusToggle = false;
};

// 지도출력
var mapOutput = document.getElementsByClassName('active_on')[12];
var mapOutputDiv = document.getElementsByClassName('map-output')[0];
var mapClose = document.getElementsByClassName('map-close')[0];
var mapClose2 = document.getElementsByClassName('output-close')[0];

var mapToggle = false;

mapOutput.onclick = function () {
  if (!mapToggle) {
    mapOutputDiv.style.display = 'block';
    mapToggle = true;
  } else {
    mapOutputDiv.style.display = 'none';
    mapToggle = false;
  }
};

mapClose.onclick = function () {
  mapOutputDiv.style.display = 'none';
  mapToggle = false;
};

mapClose2.onclick = function () {
  mapOutputDiv.style.display = 'none';
  mapToggle = false;
};

/* 좌표계 변경 */
var changeOpen = document.getElementsByClassName('coordinate-change')[0];
var changeBox = document.getElementsByClassName('change-box')[0];
var changeClose = document.getElementsByClassName('change-close')[0];
var changeCloseBt = document.getElementsByClassName('change-close-bt')[0];

var changeToggle = false;

changeOpen.onclick = function () {
  if (!changeToggle) {
    changeBox.style.display = 'block';
    changeToggle = true;
  } else {
    changeBox.style.display = 'none';
    changeToggle = false;
  }
};

changeClose.onclick = function () {
  changeBox.style.display = 'none';
  changeToggle = false;
};

changeCloseBt.onclick = function () {
  changeBox.style.display = 'none';
  changeToggle = false;
};
