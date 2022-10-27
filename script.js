function preencherEstrelas() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let outEspacos = document.getElementById('outEspacos')

  //Obtem conteúdo do campo de entrada
  let num = Number(inNumero.value)

  if (num == 0 || isNaN(num)) {
    alert('Número inválido!')
    inNumero.focus()
    return
  }
  //Declara variável que irá concatenar as estrelas/espaços
  let estrelas = ''

  //Cria um laço de repetição de 1 até o número informado
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrelas = estrelas + '*' //Na posição ímpar do i: *
    }else{
      estrelas = estrelas + '-' //Na posição par: -
    }
  outEspacos.textContent = estrelas //Exibe estrelas
  }
}
//Cria referência ao botão e após associa function ao evento click
let btPreencher = document.getElementById('btPreencher')
btPreencher.addEventListener('click', preencherEstrelas)