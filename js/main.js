'use script'
{
  //タブで画面の切り替え

  document.addEventListener('DOMContentLoaded', function(){
    // タブにクリックイベントを付加
    const tabs = document.getElementsByClassName('tab');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch);
    }
  
    // タブクリック関数
    function tabSwitch(){
      // タブのclassを変更
      document.getElementsByClassName('is-active')[0].classList.remove('is-active');
      this.classList.add('is-active');
      // コンテンツのclassを変更
      document.getElementsByClassName('is-show')[0].classList.remove('is-show');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('panel')[index].classList.add('is-show');
    };  
  });


// ボタンで画面の切り替え

const btns = document.querySelectorAll('button');

const imgs = [
   "img/m1.jpg",
   "img/m2.jpg",
   "img/m3.jpg",
   "img/m4.jpg",
   "img/m5.jpg",
  ];

// const shows =[
//     ".show1",
//     ".show2",
//     ".show3",
//     ".show4",
//     ".show5",
//   ];
// console.log(shows);

const x0 = document.getElementById('x0');

btns.forEach( (btn,index) => {
  
  const i = index ;
  // console.log(`btn: ${btn.textContent}-${i}`);  
  btn.addEventListener( 'click', e => {
    //  --e.preventDefault;
    document.getElementsByClassName('btn-on')[0].classList.remove('btn-on');
    btn.classList.add('btn-on');
    
    x0.src = imgs[i];
    // x0.setAttribute('src', imgs[i]);
    
    const shows = document.querySelectorAll('.show');
    shows.forEach(show  => {
      show.classList.remove('active');   
    });
    shows[i].classList.add('active');
    btns[i].classList.add('btn-on');
  
  });


});

}

  
