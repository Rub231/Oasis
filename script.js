(function(){
  document.getElementById('yr').textContent=new Date().getFullYear();
})();

// Tabs
document.querySelectorAll('.tab').forEach(function(t){
  t.addEventListener('click',function(){
    document.querySelectorAll('.tab').forEach(function(x){x.setAttribute('aria-selected','false')});
    document.querySelectorAll('.panel').forEach(function(p){p.classList.remove('on');p.hidden=true});
    t.setAttribute('aria-selected','true');
    var p=document.getElementById(t.getAttribute('aria-controls'));p.hidden=false;p.classList.add('on');
  });
});

// Mobile menu
var mb=document.getElementById('menuBtn'),mm=document.getElementById('mm');
mb.addEventListener('click',function(){var o=mm.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
mm.addEventListener('click',function(e){if(e.target.tagName==='A'){mm.classList.remove('open');mb.setAttribute('aria-expanded','false')}});

// Scroll reveal
var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12}):null;
document.querySelectorAll('.rv').forEach(function(el){io?io.observe(el):el.classList.add('in')});

// Form -> WhatsApp
document.getElementById('bookForm').addEventListener('submit',function(e){
  e.preventDefault();
  var f=new FormData(e.target);
  var msg='Hi Oasis, I would like to book an appointment.\nName: '+f.get('name')+'\nPhone: '+f.get('phone')+'\nService: '+f.get('service')+(f.get('date')?'\nPreferred date: '+f.get('date'):'');
  window.open('https://wa.me/15125550147?text='+encodeURIComponent(msg),'_blank');
});

(function(){
  var h=document.querySelector('header'),b=document.querySelector('.bar');
  function on(){var y=window.scrollY;h.classList.toggle('top',y<40);b.classList.toggle('show',y>420)}
  on();window.addEventListener('scroll',on,{passive:true});
  var lb=document.createElement('div');lb.className='lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
  document.querySelectorAll('.gallery img').forEach(function(i){i.addEventListener('click',function(){var x=lb.querySelector('img');x.src=i.src;x.alt=i.alt;lb.classList.add('on')})});
  lb.addEventListener('click',function(){lb.classList.remove('on')});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('on')});
})();
