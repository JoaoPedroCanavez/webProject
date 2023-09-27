var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});

let nome = document.querySelector("#nome")

//////////////////////////////////////////////////////////

const campoQtd = document.querySelector("#qtde");
const output = document.querySelector("#indicao1")
const campoPrazo = document.querySelector("#prazo")
const campoJs = document.querySelector("#js")
output.addEventListener("change", calcular)


campoQtd.addEventListener("change" , calcular )

function calcular(){

console.log("Calcular Estrelas")
let qtde = campoQtd.value
let valor = qtde * 1;



output.innerHTML=  `${valor} Indicação`
}



campoPrazo.addEventListener("input",   function() {
    
  const labelPrazo = document.querySelector("label[for = 'prazo']")

  labelPrazo.innerHTML = `Quanto gostou :  ${campoPrazo.value} %`
  calcular()
})


//////////////////////////////////////////////////////////////////








const output2 = document.querySelector("#indicao2")

const campoQtd2 = document.querySelector("#qtde2");


campoQtd2.addEventListener("change" , calcular2 )

function calcular2(){

console.log("Calcular Indicações")
let qtde = campoQtd2.value
let valor = qtde * 1;



output2.innerHTML=  `${valor} Indicações`
}





/////////////////////////////////////////////////////////////////



const campoTipo = document.querySelector("#prazo2")

campoTipo.addEventListener("input", function() {
    
  const labelPrazo2 = document.querySelector("label[for = 'prazo2']")

  labelPrazo2.innerHTML = `Quanto gostou :  ${campoTipo.value} %`

})

//////////////////////////////////////////////////////////////////