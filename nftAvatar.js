const propertyElement = document.getElementById("property-element")
const propertyElementHair = document.getElementById("property-element-6")
const propertyElementSpecialPowers = document.getElementById("property-element-7")
const propertyElementSmile = document.getElementById("property-element-5")
const propertyElementCostume = document.getElementById("property-element-4")
const propertyElementEyes = document.getElementById("property-element-3")
const propertyElementBodyColor = document.getElementById("property-element-2")
const propertyElementBackground = document.getElementById("property-element-9")
const avatar = document.getElementById("avatar")



let avatarImages = ["./female-smile/16.png","./female-special-powers/9.png","./female-costume/21.png","./female-eyes/25.png","./female-bodycolor/29.png","./female-background/35.png","./hairs/11.png"]



// let Avatar = `
// <div class="avatar" >

// <span class="smiles zindex3" id="smile smile1" data-src="./female-smile/16.png" >  <img src=./female-smile/16.png" alt="" style=" width : 30%; z-index: 3; "></span>

// <span class="femaleSpecialPowers zindex4"> <img src="./female-special-powers/9.png" alt="" style=" width : 30%; z-index: 4; "></span>

// <span class="femaleCostumes zindex3"> <img src="./female-costume/21.png" alt="" style=" width : 30%; z-index: 3; "></span>

// <span class="femaleEyes zindex3"> <img src="./female-eyes/25.png" alt="" style=" width : 30%; z-index: 3; "></span>

// <span class="femaleBodycolor zindex2"> <img src="./female-bodycolor/29.png" alt="" style=" width : 30%; z-index: 2; "></span>

// <span class="femaleBackground zindex1"> <img src="./female-background/35.png" alt="" style=" width : 30%; z-index: 1; "></span>

// <span class="hairs zindex3" id="hair1"> <img src="./hairs/11.png" alt="" style=" width : 30%; z-index: 3; "></span>  
// </div>
// `
// avatar.innerHTML = Avatar




let femaleHairsArray = ["./hairs/11.png","./hairs/12.png","./hairs/13.png","./hairs/14.png","./hairs/15.png"]



// Displaying Hair-Styles
propertyElementHair.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="hairs" id="hair1">  <img src="./hairs/11.png" alt="">  </div> 
        <div class="hairs" id="hair2">  <img src="./hairs/12.png" alt="">
        </div>
        <div class="hairs" id="hair3"> <img src="./hairs/13.png" alt=""></div>
        <div class="hairs" id="hair4"> <img src="./hairs/14.png" alt=""></div>
        <div class="hairs" id="hair5"> <img src="./hairs/15.png" alt=""></div>
    </div>
    <div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`

   const femalehair1 = document.getElementById("hair1")
    femalehair1.addEventListener("click", () =>{
        document.getElementById("hair").src = femaleHairsArray[0]
    })

    const femalehair2 = document.getElementById("hair2")
    femalehair2.addEventListener("click", () =>{
        document.getElementById("hair").src = femaleHairsArray[1]
    })

    const femalehair3 = document.getElementById("hair3")
    femalehair3.addEventListener("click", () =>{
        document.getElementById("hair").src = femaleHairsArray[2]
    })

    const femalehair4 = document.getElementById("hair4")
    femalehair4.addEventListener("click", () =>{
        document.getElementById("hair").src = femaleHairsArray[3]
    })

    const femalehair5 = document.getElementById("hair5")
    femalehair5.addEventListener("click", () =>{
        document.getElementById("hair").src = femaleHairsArray[4]
    })







})



let femaleSmileArray = ["./female-smile/16.png","./female-smile/17.png","./female-smile/18.png","./female-smile/19.png","./female-smile/20.png"]

// Displaying smile
propertyElementSmile.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="femaleSmile" id="smile1"> <img src="./female-smile/16.png" alt=""></div>
        <div class="femaleSmile" id="smile2"> <img src="./female-smile/17.png" alt=""></div>
        <div class="femaleSmile" id="smile3"> <img src="./female-smile/18.png" alt=""></div>
        <div class="femaleSmile" id="smile4"> <img src="./female-smile/19.png" alt=""></div>
        <div class="femaleSmile" id="smile5"> <img src="./female-smile/20.png" alt=""></div>
    </div>
    <div>
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>      
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`

    const femaleSmile1 = document.getElementById("smile1")
    femaleSmile1.addEventListener("click", () =>{
        document.getElementById("smile").src = femaleSmileArray[0]
    })

    const femaleSmile2 = document.getElementById("smile2")
    femaleSmile2.addEventListener("click", () =>{
        document.getElementById("smile").src = femaleSmileArray[1]
    })

    const femaleSmile3 = document.getElementById("smile3")
    femaleSmile3.addEventListener("click", () =>{
        document.getElementById("smile").src = femaleSmileArray[2]
    })

    const femaleSmile4 = document.getElementById("smile4")
    femaleSmile4.addEventListener("click", () =>{
        document.getElementById("smile").src = femaleSmileArray[3]
    })

    const femaleSmile5 = document.getElementById("smile5")
    femaleSmile5.addEventListener("click", () =>{
        document.getElementById("smile").src = femaleSmileArray[4]
    })

})


const femaleSpecialPowersArray = ["./female-special-powers/9.png","./female-special-powers/10.png"]
// Displaying Specialpowers
propertyElementSpecialPowers.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="femaleSpecialPowers" id="femaleSpecialPower1"> 
        <img src="./female-special-powers/9.png" alt=""></div> 

        <div class="femaleSpecialPowers" id="femaleSpecialPower2">
        <img src="./female-special-powers/10.png" alt=""></div> 

        <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>
    <div>
        <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>      
        <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`

    let femaleSpecialPowers1 = document.getElementById("femaleSpecialPower1")
    femaleSpecialPowers1.addEventListener("click", () => {
        document.getElementById("femaleSpecialPowers").src = femaleSpecialPowersArray[0]
    })

    let femaleSpecialPowers2 = document.getElementById("femaleSpecialPower2")
    femaleSpecialPowers2.addEventListener("click", () => {
        document.getElementById("femaleSpecialPowers").src = femaleSpecialPowersArray[1]
    })

})



const femaleCostumesArray = ["./female-costume/21.png","./female-costume/22.png","./female-costume/23.png","./female-costume/24.png"]
// Displaying Female Costumes
propertyElementCostume.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="femaleCostumes" id="femaleCostume1"> <img src="./female-costume/21.png" alt=""></div>
        <div class="femaleCostumes" id="femaleCostume2"> <img src="./female-costume/22.png" alt=""></div>
        <div class="femaleCostumes" id="femaleCostume3"> <img src="./female-costume/23.png" alt=""></div>
        <div class="femaleCostumes" id="femaleCostume4"> <img src="./female-costume/24.png" alt=""></div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>
    <div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>      
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`

    let femaleCostume1 = document.getElementById("femaleCostume1")
    femaleCostume1.addEventListener("click", () => {
        document.getElementById("femaleCostume").src = femaleCostumesArray[0]
    })

    let femaleCostume2 = document.getElementById("femaleCostume2")
    femaleCostume2.addEventListener("click", () => {
        document.getElementById("femaleCostume").src = femaleCostumesArray[1]
    })

    let femaleCostume3 = document.getElementById("femaleCostume3")
    femaleCostume3.addEventListener("click", () => {
        document.getElementById("femaleCostume").src = femaleCostumesArray[2]
    })

    let femaleCostume4 = document.getElementById("femaleCostume4")
    femaleCostume4.addEventListener("click", () => {
        document.getElementById("femaleCostume").src = femaleCostumesArray[3]
    })
})


// Displaying Female Eyes
propertyElementEyes.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="femaleEyes"> <img src="./female-eyes/25.png" alt=""></div>
        <div class="femaleEyes"> <img src="./female-eyes/26.png" alt=""></div>
        <div class="femaleEyes"> <img src="./female-eyes/27.png" alt=""></div>
        <div class="femaleEyes"> <img src="./female-eyes/28.png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>
    <div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>      
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`
})



// Displaying Female bodycolor
propertyElementBodyColor.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="femaleBodycolor"> <img src="./female-bodycolor/29.png" alt=""></div>
        <div class="femaleBodycolor"> <img src="./female-bodycolor/30.png" alt=""></div>
        <div class="femaleBodycolor"> <img src="./female-bodycolor/31.png" alt=""></div>
        <div class="femaleBodycolor"> <img src="./female-bodycolor/32.png" alt=""></div>
        <div class="femaleBodycolor"> <img src="./female-bodycolor/33.png" alt=""></div>
    </div>
    <div>
        <div class="femaleBodycolor"> <img src="./female-bodycolor/34.png" alt=""></div>      
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`
})

// Displaying Female background
propertyElementBackground.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="femaleBackground"> <img src="./female-background/35.png" alt=""></div>
        <div class="femaleBackground"> <img src="./female-background/36.png" alt=""></div>
        <div class="femaleBackground"> <img src="./female-background/37.png" alt=""></div>
        <div class="femaleBackground"> <img src="./female-background/38.png" alt=""></div>
        <div class="femaleBackground"> <img src="./female-background/39.png" alt=""></div>
    </div>
    <div>
        <div class="femaleBackground"> <img src="./female-background/40.png" alt=""></div>      
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`

})
