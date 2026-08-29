/* Mejora funcional sin tocar la estética existente. */
(function(){
  const KEY='tarotSolicitud';
  function save(form){
    const els=form.querySelectorAll('input,textarea,select');
    const data={}; els.forEach((e,i)=>data[i]=e.value||'');
    try{localStorage.setItem(KEY,JSON.stringify(data));}catch(e){}
  }
  function restore(doc){
    let data={}; try{data=JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){}
    const rows=doc.querySelectorAll('#p4 .contact-row');
    if(data[0]&&rows[0]){const s=rows[0].querySelector('span');if(s)s.textContent=(s.textContent||'')+' · '+data[0];}
    if(data[1]&&rows[1]){const s=rows[1].querySelector('span');if(s)s.textContent='Lectura escrita enviada a: '+data[1];}
    if(data[2]&&rows[2]){const s=rows[2].querySelector('span');if(s)s.textContent='Solicitud recibida. Pregunta: '+data[2];}
  }
  window.TarotSolicitud={save,restore};
})();
