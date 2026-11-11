const scene=document.querySelector('#scene');
const lamp=document.querySelector('#lamp');
const hint=document.querySelector('#hint');
const touch=matchMedia('(hover: none)');
let off=false;
function setOff(value){off=value;scene.classList.toggle('is-off',value);lamp.setAttribute('aria-pressed',String(value));lamp.setAttribute('aria-label',touch.matches?(value?'Acender luminária':'Apagar luminária'):'Ver detalhes da luminária CHACOS 01');}
function fit(){
 const w=document.documentElement.clientWidth,h=innerHeight,ratio=1672/941;
 const sw=Math.max(w,h*ratio),sh=sw/ratio;
 const x=Math.min(0,Math.max(w-sw,w*.66-sw*.717));
 // Mantém a mesa e a luminária dentro do enquadramento horizontal.
 const y=Math.min(0,Math.max(h-sh,h*.56-sh*.53));
 Object.assign(scene.style,{width:sw+'px',height:sh+'px',left:x+'px',top:y+'px'});
 hint.textContent=touch.matches?'Toque na luminária para apagar / acender.':'Passe o mouse para apagar. Clique para explorar.';
}
addEventListener('resize',fit);fit();
lamp.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')setOff(true)});
lamp.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')setOff(false)});
lamp.addEventListener('click',e=>{if(touch.matches)setOff(!off);else location.href='produto.html'});
touch.addEventListener('change',()=>{setOff(false);fit()});
lamp.addEventListener('keydown',e=>{if(e.key==='Escape')setOff(false)});

lamp.setAttribute('aria-label',touch.matches?'Apagar luminária':'Ver detalhes da luminária CHACOS 01');
