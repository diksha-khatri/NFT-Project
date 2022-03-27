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
const video = document.getElementById("video")
const insideMB = document.getElementById("inside-mystery-box")
const close = document.getElementById("close")
let score = 1

openBox.addEventListener("click", () => {
    walletContainer.classList.add("show")
})

connectWallet.addEventListener("click", () => {
    walletContainer.classList.remove("show")
    mysteryBox.classList.add("show")
    video.play()
})
video.onended = () =>{

            insideMB.classList.add("show")
            mysteryBox.classList.remove("show")
}
close.addEventListener("click",() => {
    insideMB.classList.remove("show")
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
        slidesToScroll: 1,
        prevArrow: '<span class="prevArrow"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow:'<span class="nextArrow"><i class="fa-solid fa-arrow-right"></i></span>',

      });
})

