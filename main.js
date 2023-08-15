function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
        
    if(elemento != null && elemento.localName === 'audio'){
          elemento.play();
    }else {
        console.log('Elemento não encontrado ou  seletor inválido');
    }    
}

//referencia para lista de teclas.
const listaDeTeclas = document.querySelectorAll('.tecla')


for(let contador = 0; contador<listaDeTeclas.length; contador++){
  
    const tecla = listaDeTeclas[contador]
    //acessar os sons da tecla pela classe da lista.
    const instrumento = tecla.classList[1];
    //template string.
    const idAudio = `#som_${instrumento}`;

    //eventos
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    //quando tecla for pressionada.
    tecla.onkeydown = function(evento){       
        if(evento.code === 'Enter' || evento.code === 'Space' || evento.code === 'NumpadEnter'){
            tecla.classList.add('ativa'); 
        }              
    }

    //quando tecla for solta.
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
    
}
