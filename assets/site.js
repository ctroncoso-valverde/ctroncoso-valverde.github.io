/* Abstracts desplegables y filtros por línea de investigación */
(function(){
  document.querySelectorAll('.abt').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      var x=document.getElementById(a.getAttribute('data-a')); if(!x) return;
      x.hidden=!x.hidden; a.classList.toggle('on',!x.hidden);
      a.textContent=x.hidden?'Abstract':'Hide abstract';
    });
  });
  var chips=document.querySelectorAll('.chips button[data-f]');
  chips.forEach(function(b){
    b.addEventListener('click',function(){
      var f=b.getAttribute('data-f');
      chips.forEach(function(x){x.classList.toggle('on',x===b);});
      document.querySelectorAll('.flt .pp').forEach(function(p){
        var ls=(p.getAttribute('data-l')||'').split(' ');
        p.classList.toggle('hide',f!=='all'&&ls.indexOf(f)<0);
      });
      document.querySelectorAll('.flt .grp').forEach(function(g){
        g.classList.toggle('hide',!g.querySelector('.pp:not(.hide)'));
      });
    });
  });
})();
