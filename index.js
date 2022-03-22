const openBox = document.getElementById("open-box")
const walletContainer = document.getElementById("main-container-wallet")
const connectWallet = document.getElementById("connect-wallet")
const mysteryBox = document.getElementById("main-container-box")
const web3 = document.getElementById("web-3")
const bnb = document.getElementById("bnb")
const spanweb3 = document.getElementById("span-web3")
const spanbnb = document.getElementById("span-bnb")

openBox.addEventListener("click", () => {
    walletContainer.classList.add("show")
})

connectWallet.addEventListener("click", () => {
    mysteryBox.classList.add("show")
    walletContainer.classList.remove("show")
})

web3.addEventListener("click",() => {
    web3.classList.add("blue-text")
    spanweb3.classList.add(" Web-style")
    bnb.classList.remove("blue-text")
    spanbnb.classList.remove( "Web-style")
})

bnb.addEventListener("click",() => {
    bnb.classList.add("blue-text")
    spanbnb.classList.add("Web-style")
    web3.classList.remove("blue-text")
    spanweb3.classList.remove("Web-style")
})

$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
})