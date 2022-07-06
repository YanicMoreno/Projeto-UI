var jogos = [
  { 'id': 1, 'nome': 'Fortnite' },
  { 'id': 2, 'nome': 'GTA-V' },
  { 'id': 3, 'nome': 'Free Fire' },
  { 'id': 4, 'nome': 'Candy Crush Saga' },
  { 'id': 5, 'nome': 'Minecraft' },
  { 'id': 6, 'nome': 'PUBG' },
  { 'id': 7, 'nome': 'League of Legends' },
]

var selecao_jogos = document.getElementById("selecao_jogos")

for (var i = 0; i < jogos.length; i++) {
  selecao_jogos.innerHTML += `
    <div class="game_button">
      <input type="radio" id="${jogos[i].id}">
      <label for="${jogos[i].id}">${jogos[i].nome}</label>
    </div>
  `
}

