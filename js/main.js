var jogos = [
  { 'id': 1, 'nome': 'Fortnite', 'imagem': 'https://i.pinimg.com/originals/d6/e5/c7/d6e5c717c4bc2559da40acc8e6e0d439.jpg' },
  { 'id': 2, 'nome': 'GTA-V' , 'imagem': 'https://images6.alphacoders.com/438/438835.jpg'},
  { 'id': 3, 'nome': 'Free Fire', 'imagem': 'https://wallpaperaccess.com/full/1077362.png' },
  { 'id': 4, 'nome': 'Candy Crush Saga', 'imagem': 'https://coolthemestores.com/wp-content/uploads/2021/02/candy-crush-saga-featured.png' },
  { 'id': 5, 'nome': 'Minecraft', 'imagem': 'https://i0.wp.com/www.clickwallpapers.net/wp-content/uploads/2021/10/thumb-1920-1128578.jpg?fit=1920%2C1080&ssl=1' },
  { 'id': 6, 'nome': 'PUBG' , 'imagem': 'https://wallpaperaccess.com/full/875246.jpg'},
  { 'id': 7, 'nome': 'League of Legends', 'imagem': 'https://wallpaperboat.com/wp-content/uploads/2020/04/league-of-legends-01.jpg' },
]

var selecao_jogos = document.getElementById("selecao_jogos");
var historico = "" 
  function Marcador (id){
    historico != "" &&
      document.getElementById(historico).classList.remove("mark")
    
    document.getElementById(id).classList.add("mark")
    historico = id
    console.log(id);
  }

for (var i = 0; i < jogos.length; i++) {
  selecao_jogos.innerHTML += `
    <div class="game_button">
      <input hidden class="radio" type="radio" id="${jogos[i].id}">
      <label onclick="Marcador('label${jogos[i].id}')" for="${jogos[i].id}" id="label${jogos[i].id}">
        <img src="${jogos[i].imagem}"  />
        <span>${jogos[i].nome}</span>
      </label>
    </div>
  `
}