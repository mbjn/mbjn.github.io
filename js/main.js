'use script'
{
// タブページに関するJS
  document.addEventListener('DOMContentLoaded', function(){
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch);
    }
  
    // タブをクリックすると実行する関数
    function tabSwitch(){
      // タブのclassの値を変更
      document.getElementsByClassName('is-active')[0].classList.remove('is-active');
      this.classList.add('is-active');
      // コンテンツのclassの値を変更
      document.getElementsByClassName('is-show')[0].classList.remove('is-show');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('panel')[index].classList.add('is-show');
    };  
  });

//Anotherスクリーンに関するjs 
// panel-ano のスクリーンとボタンの切り替え
//ボタンクリックで同じsrcの切り替え

const btns = document.querySelectorAll('anobtn');

btns.forEach(btn, () => {
  const line = `${btn.index} - ${btn.dataset.id}`;
  console.log(line);
} );



// btns.forEach(btn,index => { 
//   const btns = document.querySelectorAll('anobtn');
//   const describes  = document.querySelectorAll('desc > p');
 
//   const screen = document.getElementsByClassName('screen');
//   const desc = document.getElementsByClassName('desc');
  
//   btns.addEventListener('click', () =>{
//     let i = document.getElementById(clickedItem.dataset.id)-1;
//     let zu = imgesId[i];
   
//     // // この次にimg と説明文を 付け替える
//     // screen.removeChild;
//     // describe.removeChild;
    
//     // //要素の作成
//     // const btnImg = document.createElement('img');
//     // const btndesc = document.createElement('p');

//     // //要素の中身の作成と親要素に追加
//     // screen.add(btnImg.getAttribute('src', zu));
//     // descrive.add(btndesc.textContent(descId[i]));
    
//   });
  
// });


  

}