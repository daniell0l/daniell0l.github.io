function ativaLetra(elemento, texto) {
  const arrTexto = texto.split('');
  elemento.innerHTML = '';
  let i = 0;
  let escrevendo = true;

  function digitar() {
    setTimeout(() => {
      if (escrevendo) {
        elemento.innerHTML += arrTexto[i];
        i++;
        if (i < arrTexto.length) {
          digitar();
        } else {
          escrevendo = false;
          setTimeout(apagar, 1000);
        }
      } else {
        elemento.innerHTML = elemento.innerHTML.slice(0, -1);
        if (elemento.innerHTML.length === 0) {
          escrevendo = true;
          if (texto === 'Web Developer') {
            ativaLetra(elemento, 'Mobile Developer');
          } else if (texto === 'Mobile Developer') {
            ativaLetra(elemento, 'Web Developer');
          }
        } else {
          setTimeout(apagar, 75);
        }
      }
    }, 75);
  }

  function apagar() {
    setTimeout(() => {
      elemento.innerHTML = elemento.innerHTML.slice(0, -1);
      if (elemento.innerHTML.length > 0) {
        apagar();
      } else {
        escrevendo = true;
        if (texto === 'Web Developer') {
          ativaLetra(elemento, 'Mobile Developer');
        } else if (texto === 'Mobile Developer') {
          ativaLetra(elemento, 'Web Developer');
        }
      }
    }, 30);
  }

  digitar();
}

const titulo = document.querySelector('.digitando');
ativaLetra(titulo, 'Web Developer');
