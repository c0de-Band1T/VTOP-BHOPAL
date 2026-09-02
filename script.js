const sidebar=document.getElementById('sidebar');
const overlay=document.getElementById('overlay');
const menuBtn=document.getElementById('menuBtn');
const closeBtn=document.getElementById('closeBtn');
const myInfoSub=document.getElementById('myInfoSub');
const myInfoLink=document.querySelector('.menu-parent');

function openMenu(){sidebar.classList.add('open');overlay.classList.add('show')}
function closeMenu(){sidebar.classList.remove('open');overlay.classList.remove('show')}
menuBtn.onclick=openMenu; closeBtn.onclick=closeMenu; overlay.onclick=closeMenu;

function showPage(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(name==='myinfo'?'myInfoPage':'homePage').classList.add('active');
  closeMenu();
}
myInfoLink.addEventListener('click',e=>{
  e.preventDefault();
  myInfoSub.classList.toggle('open');
  showPage('myinfo');
});
document.querySelectorAll('[data-page]').forEach(a=>{
  if(a.classList.contains('menu-parent')) return;
  a.addEventListener('click',e=>{
    e.preventDefault();
    showPage(a.dataset.page);
    if(a.dataset.hostel){
      setTimeout(()=>{
        const h=document.querySelector('.hostel-head');
        if(!h.classList.contains('open')) h.click();
        h.scrollIntoView({behavior:'smooth',block:'center'});
      },100);
    }
  });
});

document.querySelectorAll('.accordion-head').forEach(head=>{
  head.addEventListener('click',()=>{
    head.classList.toggle('open');
    const icon=head.querySelector(':scope > span:last-child');
    icon.textContent=head.classList.contains('open')?'⌃':'⌄';
  });
});

// Small visual session countdown
let seconds=19*60+40;
setInterval(()=>{
  if(seconds>0) seconds--;
  const m=Math.floor(seconds/60), s=seconds%60;
  document.getElementById('sessionTime').textContent=`${m}m ${String(s).padStart(2,'0')}s`;
},1000);
