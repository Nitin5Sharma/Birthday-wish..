let container=document.querySelector('.container');
let  timer=document.querySelector('.timer');
let h1=timer.querySelector('h1');
 
 let time=10;
 let clear= setInterval(()=>{
time--;
h1.innerHTML=time;
if(time<=5){
    h1.style.color='red';
}
console.log(time);
 },1000);

 setTimeout(()=>{
   container.innerHTML=`<div class="msg"  >
   <h2>Happy Birthday Dear</h2>
   <img src="cake-removebg.png" alt="">
</div> `;
clearInterval(clear);
 },11000);

