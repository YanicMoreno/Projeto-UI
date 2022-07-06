var jogos = [
  { 'id': 1, 'nome': 'Fortnite' },
  { 'id': 2, 'nome': 'GTA-V' },
  { 'id': 3, 'nome': 'Free Fire' },
  { 'id': 4, 'nome': 'Candy Crush Saga' },
  { 'id': 5, 'nome': 'Minecraft' },
  { 'id': 6, 'nome': 'PUBG' },
]

var selecao_jogos = document.getElementById("selecao_jogos")

for (var i = 0; i < jogos.length; i++) {
  console.log(jogos[i].id)
}
