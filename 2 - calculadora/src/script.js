var escolha = Number(
  prompt(
    "Escolha a Operação Desejada\n1 - SOMA\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n4 - DIVISÃO"
  )
);
if (escolha == 1) {
  var valor1 = Number(prompt("Digite o primeiro valor: "));
  var valor2 = Number(prompt("Digite o segundo valor: "));
  let soma = valor1 + valor2;
  document.write(`<h2> ${valor1} + ${valor2} = ${soma} </h2>`);
} else if (escolha == 2) {
  var valor1 = Number(prompt("Digite o primeiro valor: "));
  var valor2 = Number(prompt("Digite o segundo valor: "));
  let subtracao = valor1 - valor2;
  document.write(`<h2> ${valor1} - ${valor2} = ${subtracao} </h2>`);
} else if (escolha == 3) {
  var valor1 = Number(prompt("Digite o primeiro valor: "));
  var valor2 = Number(prompt("Digite o segundo valor: "));
  let multiplicacao = valor1 * valor2;
  document.write(`<h2> ${valor1} x ${valor2} = ${multiplicacao} </h2>`);
} else if (escolha == 4) {
  var valor1 = Number(prompt("Digite o primeiro valor: "));
  var valor2 = Number(prompt("Digite o segundo valor: "));
  let divisao = valor1 / valor2;
  document.write(`<h2> ${valor1} / ${valor2} = ${divisao} </h2>`);
} else {
  alert(`[Erro] Escolha uma opção válida`);
}
