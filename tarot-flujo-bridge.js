/* Puente funcional: no altera la estética. Conecta la solicitud entre páginas. */
(function(){
  const KEY='tarotSolicitud';
  window.TarotFlujo={
    guardar(form){
      if(!form)return;
      const data={};
      form.querySelectorAll('input,textarea,select').forEach((el)=>{
        if(el.name) data[el.name]=el.value||'';
      });
      try{localStorage.setItem(KEY,JSON.stringify(data));}catch(e){}
    },
    leer(){
      try{return JSON.parse(localStorage.getItem(KEY)||'{}');}catch(e){return {};}
    }
  };
})();
