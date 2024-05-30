key = "0d428711fae25210d62a0652ac06db40";

function dadosTela(dados) {
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".texto-previsão").innerHTML = dados.weather[0].description
  document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  document.querySelector(".umidade").innerHTML ="Umidade: " + dados.main.humidity + "%"

}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  dadosTela(dados)
}

function botãoClicar() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}
