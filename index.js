const form = document.getElementById('form-numero');

form.addEventListener('submit', function (e) {
  let formValido = false;
  e.preventDefault()

  const inputNumero1 = document.getElementById('numero1');
  const inputNumero2 = document.getElementById('numero2');
  const mensagemValida = `O valor é válido`;
  const mensagemInvalida = `O valor é inválido`;

  let resultado = document.getElementById('resultado');

  let campo1 = inputNumero1.value;
  let campo2 = inputNumero2.value;

  if (campo1 < campo2) {
    const containerMensagemValida = document.querySelector('.success-message');
    containerMensagemValida.innerHTML = mensagemValida;
    containerMensagemValida.style.display = 'block';
  }
  else {
    document.querySelector('.success-message').innerHTML = mensagemInvalida;
    alert('Número Inválido')
  }

})
