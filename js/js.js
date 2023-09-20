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


let loginPop = document.querySelector('.login')
let bkBg = document.querySelector('.black-bg')

loginPop.addEventListener('click',function(e){
    bkBg.classList.add('show');
    e.preventDefault()
})

let close = document.querySelector('.btn-danger')
close.addEventListener('click',function(){
    bkBg.classList.remove('show');
})