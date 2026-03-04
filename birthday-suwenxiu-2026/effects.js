
setInterval(()=>{
  const h=document.createElement('div');h.className='heart';h.textContent='❤';
  h.style.left=Math.random()*100+'vw';h.style.fontSize=(12+Math.random()*22)+'px';
  h.style.animationDuration=(4+Math.random()*5)+'s';document.body.appendChild(h);
  setTimeout(()=>h.remove(),9000);
},500);
