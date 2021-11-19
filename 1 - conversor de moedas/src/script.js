var valorEmDolarT = prompt("Qual o valor em Dólar (U$) que voce deseja converter para Reais (R$)?")

var valorEmDolarN = parseFloat(valorEmDolarT)

var valorEmReais = valorEmDolarN * 5.5

var valorEmReais = valorEmReais.toFixed(2)

alert(`${valorEmDolarT} U$ == ${valorEmReais} R$`)