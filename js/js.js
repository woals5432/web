// 로그인 팝업
const loginPop = document.querySelector('.login');
const bkBg = document.querySelector('.black-bg');
let close = document.querySelector('.btn-danger');

// 아코디언
const accBtn = document.querySelectorAll('.accordion-button');
const accMain = document.querySelector('.accordion-main');

//슬라이드 메뉴
const sdMn = document.querySelector('.slideMenu');
const mn = document.querySelector('.menu');
const mBg = document.querySelector('.menu-bg');
const mC = document.querySelector('.menu-close');
const mA = document.querySelectorAll('.menu > ul > li > a');

// 내비바
const nav = document.querySelector('nav');
let pos = { y: 0, oldY: 0, status: true };

const navSearch = document.querySelector('.navSearch')

// 탭 메뉴
const tap = document.querySelectorAll('.tap-menu > li > a');


// 다크모드
let count = 0;
document.querySelector('.mode').addEventListener('click', function () {
  count++;
  if (count % 2 == 1) {
    document.querySelector('.mode').innerHTML = 'Light';
    document.querySelector('body').classList.add('dark');
  } else {
    document.querySelector('.mode').innerHTML = 'Dark';
    document.querySelector('body').classList.remove('dark')
  }
})

//로그인 팝업 
loginPop.addEventListener('click', function (e) {
  bkBg.classList.add('show');
  e.preventDefault()
})

close.addEventListener('click', function () {
  bkBg.classList.remove('show');
})

// 아코디언

// accBtn.addEventListener('click',function(){
//     if(accBtn.classList == 'accordion-button collapsed'){
//         accMain.style.height = '500px'
//     }else{
//         accMain.style.height = '1200px'
// }
// })

accBtn.forEach(function (a, idx) {
  a.addEventListener('click', function () {
    if (a.classList == 'accordion-button collapsed') {
      accMain.style.height = '500px'
    } else {
      accMain.style.height = '1200px'
    }
    count = idx
  })
})

// 슬라이드 메뉴
sdMn.addEventListener('click', function (e) {
  mn.style = 'visibility:visible';
  mBg.style = 'visibility:visible';
  e.preventDefault();
})

mC.addEventListener('click', function () {
  mn.style = 'visibility:hidden';
  mBg.style = 'visibility:hidden';
})

mBg.addEventListener('click', function () {
  mn.style = 'visibility:hidden';
  mBg.style = 'visibility:hidden';
})

// 슬라이드 메뉴 바로가기
mA.forEach(function (aa, i) {
  aa.addEventListener('click', function (e) {
    document.querySelector(`#s${i + 1}`).scrollIntoView();
    mn.style = 'visibility:hidden';
    mBg.style = 'visibility:hidden';
    e.preventDefault();
  })
})

// 내브바
window.addEventListener('scroll', function () {
  pos.y = window.scrollY;
  pos.status = pos.oldY > pos.y;
  pos.oldY = pos.y;

  if (pos.status) {
    nav.style.visibility = 'visible'
  } else {
    nav.style.visibility = 'hidden'
  }
})

// 검색
navSearch.addEventListener('click', function (e) {
  document.querySelector('#search').focus()
  e.preventDefault();
})

// 탭
tap.forEach(function (aa, i) {
  aa.addEventListener('click', function (e) {
    //li co 제거
    var allLi = document.querySelectorAll('.tap-menu > li');
    allLi.forEach(function (li) {
      li.classList.remove('co');
    });
    // 모든 genre 요소의 'on' 클래스를 제거합니다.
    var allGenre = document.querySelectorAll('.genre');
    allGenre.forEach(function (genre) {
      genre.classList.remove('on');
    });

    // 클릭한 탭에 해당하는 genre에 'on' 클래스를 추가합니다.
    document.querySelector(`.genre${i + 1}`).classList.add('on');
    allLi[i].classList.add('co');
    e.preventDefault();

  });
});
// tap.forEach(function(aa,i){
//     aa.addEventListener('click',function(e){
//       document.querySelector(`.genre${i+1}`).classList.add('on');
//       e.preventDefault();
//     })
// })