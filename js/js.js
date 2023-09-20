// 로그인 팝업
const loginPop = document.querySelector('.login');
const bkBg = document.querySelector('.black-bg');
let close = document.querySelector('.btn-danger');

// 아코디언
const accBtn = document.querySelector('.accordion-button');
const accMain = document.querySelector('.accordion-main');

// 다크모드
let count = 0;
document.querySelector('.mode').addEventListener('click',function(){
    count++;
    if(count % 2 == 1){
        document.querySelector('.mode').innerHTML = 'Light';
        document.querySelector('body').classList.add('dark');
    } else{
        document.querySelector('.mode').innerHTML = 'Dark';
        document.querySelector('body').classList.remove('dark')
    }
})

//로그인 팝업 
loginPop.addEventListener('click',function(e){
    bkBg.classList.add('show');
    e.preventDefault()
})

close.addEventListener('click',function(){
    bkBg.classList.remove('show');
})

// 아코디언
accBtn.addEventListener('click',function(){
    if(accBtn.classList == 'accordion-button collapsed'){
        accMain.style.height = '500px'
    }else{
        accMain.style.height = '1200px'
}
})


