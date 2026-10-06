const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const sections=[...document.querySelectorAll('section[id]')],links=[...document.querySelectorAll('.nav-links a')];
const updateActive=()=>{let current='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-160)current=s.id});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));};
addEventListener('scroll',updateActive,{passive:true});updateActive();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
