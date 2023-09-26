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



const campoQtd = document.querySelector("#qtde");
const output = document.querySelector("output")
const campoPrazo = document.querySelector("#prazo")
const campoJs = document.querySelector("#js")
campoJs.addEventListener("change", calcular)


campoPrazo.addEventListener("input",   function() {
    
  const labelPrazo = document.querySelector("label[for = 'prazo']")

  labelPrazo.innerHTML = `Quanto gostou :  ${campoPrazo.value} %`
  calcular()
})

