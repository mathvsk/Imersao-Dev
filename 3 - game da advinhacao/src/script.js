var random = Math.floor(Math.random() * 10 + 1)
var escolha = document.getElementById("escnum")
var tentativa = 3
    while (tentativa > 0) {
      var escolha = prompt(`Digite o numero.\n[Você possui ${tentativa} tentativa(s)]`)
      if (escolha == random) {
        alert('Voce acertou\nVoce é o rei da adivinhação')
        break
      } else if (escolha < random) {
        alert(`O Gatôbo pensou é maior\n[Voce tem mais ${tentativa - 1} tentativa(s)]`)
        tentativa --
      } else if (escolha > random) {
        alert(`O numero que o Gatôbo pensou é menor\n[Voce tem mais ${tentativa - 1} tentativa(s)]`)
        tentativa --
      }
    }
   if (escolha != random) {
    alert(`Você perdeu ):\nO Gatôbo estava pensando no numero ${random}`)
    }
