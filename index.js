const openBox = document.getElementById("open-box")
const walletContainer = document.getElementById("main-container-wallet")
const connectWallet = document.getElementById("connect-wallet")
const mysteryBox = document.getElementById("main-container-box")
const spanweb3 = document.getElementById("span-web3")
const spanbnb = document.getElementById("span-bnb")
const web3 = document.getElementById("web-3")
const bnb = document.getElementById("bnb")
const Score = document.getElementById("score")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
let score = 1

openBox.addEventListener("click", () => {
    walletContainer.classList.add("show")
})

connectWallet.addEventListener("click", () => {
    mysteryBox.classList.add("show")
    walletContainer.classList.remove("show")
})

web3.addEventListener("click",() => {
    spanweb3.classList.add("White-background")
    
    spanbnb.classList.remove("White-background")
   
})

bnb.addEventListener("click",() => {
    spanbnb.classList.add("White-background")
    
    spanweb3.classList.remove("White-background")
    
})

minus.addEventListener("click", () =>{
    score -= 1
    Score.innerHTML = score
})

plus.addEventListener("click", () =>{
    score += 1
    Score.innerHTML = score
})




$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
})

