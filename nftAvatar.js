const propertyElement = document.getElementById("property-element")
const propertyElementHair = document.getElementById("property-element-6")
const propertyElementSpecialPowers = document.getElementById("property-element-7")
const propertyElementSmile = document.getElementById("property-element-5")
const propertyElementCostume = document.getElementById("property-element-4")
const propertyElementEyes = document.getElementById("property-element-3")
const propertyElementBodyColor = document.getElementById("property-element-2")
const propertyElementBackground = document.getElementById("property-element-9")
const avatar = document.getElementById("avatar")

let Avatar = `
<div class="avatar" >

<span class="smiles zindex3" id="smile smile1"> <img src="./female-smile/16.png" alt="" style=" width : 30%; z-index: 3; "></span>

<span class="femaleSpecialPowers zindex4"> <img src="./female-special-powers/9.png" alt="" style=" width : 30%; z-index: 4; "></span>

<span class="femaleCostumes zindex3"> <img src="./female-costume/21.png" alt="" style=" width : 30%; z-index: 3; "></span>

<span class="femaleEyes zindex3"> <img src="./female-eyes/25.png" alt="" style=" width : 30%; z-index: 3; "></span>

<span class="femaleBodycolor zindex2"> <img src="./female-bodycolor/29.png" alt="" style=" width : 30%; z-index: 2; "></span>

<span class="femaleBackground zindex1"> <img src="./female-background/35.png" alt="" style=" width : 30%; z-index: 1; "></span>

<span class="hairs zindex3"> <img src="./hairs/11.png" alt="" style=" width : 30%; z-index: 3; "></span>  
</div>
`
avatar.innerHTML = Avatar

$("#property-element-5").delegate(".smiles","click",function() {
    var id = $(this).attr("id");
    // id = id.substr(3);
    $("#smile").hide();
    $("#smile #"+id).show();
});


// Hairstyles

const femaleHairStyleObject = {
    hairstyle1:{
        image: "./hairs/image 2 (1).png"
    },
    hairstyle2:{
        image: "./hairs/image 2 (2).png"
    },
    hairstyle3:{
        image: "./hairs/image 2 (3).png"
    },
    hairstyle4:{
        image: "./hairs/image 2 (4).png"
    },
    hairstyle5:{
        image: "./hairs/image 2 (5).png"
    },
    hairstyle6:{
        image: "./hairs/image 2.png"
 },

}





// Displaying Hair-Styles
propertyElementHair.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="hairs">  <img src="./hairs/11.png" alt="">  </div> 
        <div class="hairs">  <img src="./hairs/12.png" alt="">
        </div>
        <div class="hairs"> <img src="./hairs/13.png" alt=""></div>
        <div class="hairs"> <img src="./hairs/14.png" alt=""></div>
        <div class="hairs"> <img src="./hairs/15.png" alt=""></div>
    </div>
    <div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`
//     let femaleHairStyleArray = ["hairstyle1","hairstyle2","hairstyle3","hairstyle4","hairstyle5","hairstyle6"]

// function getNewFemaleHairstyle(){
   
//     const nextHairstyleData = femaleHairStyleObject[femaleHairStyleArray.shift()]
    
 
//  }
 

// const femalehairstyle = document.getElementsByName("hairstyle")
// console.log(femalehairstyle)
// // const avtar = document.getElementById("avtar")
// const hairStyle = femalehairstyle.value

// console.log(hairStyle)
// femalehairstyle.forEach(radio => {
//     if(radio.checked){
//         avtar.innerHTML = `<img ${hairStyle}>`
//     }
// });


})





// Displaying smile
propertyElementSmile.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <span class="femaleSmile" id="smile 16"> <img src="./female-smile/16.png" alt=""></span>
        <span class="femaleSmile" id="smile 17"> <img src="./female-smile/17.png" alt=""></span>
        <div class="femaleSmile"> <img src="./female-smile/18.png" alt=""></div>
        <div class="femaleSmile"> <img src="./female-smile/19.png" alt=""></div>
        <div class="femaleSmile"> <img src="./female-smile/20.png" alt=""></div>
    </div>
    <div>
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>      
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`
})



// Displaying Specilapowers
propertyElementSpecialPowers.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="femaleSpecialPowers"> <img src="./female-special-powers/9.png" alt=""></div>
        <div class="femaleSpecialPowers"> <img src="./female-special-powers/10.png" alt=""></div>
        <div class="smiles"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="smiles"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="smiles"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>
    <div>
        <div class="smiles"> <img src="./hairs/image 2 (6).png" alt=""></div>      
        <div class="smiles"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="smiles"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="smiles"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="smiles"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`
})



// Displaying Female Costumes
propertyElementCostume.addEventListener("click",function(){
    console.log("I am Working")
    propertyElement.innerHTML = `
    <div>
        <div class="femaleCostumes"> <img src="./female-costume/21.png" alt=""></div>
        <div class="femaleCostumes"> <img src="./female-costume/22.png" alt=""></div>
        <div class="femaleCostumes"> <img src="./female-costume/23.png" alt=""></div>
        <div class="femaleCostumes"> <img src="./female-costume/24.png" alt=""></div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>
    <div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>      
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`
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
        <div class="hairBackground"> <img src="./female-bodycolor/29.png" alt=""></div>
        <div class="hairBackground"> <img src="./female-bodycolor/30.png" alt=""></div>
        <div class="hairBackground"> <img src="./female-bodycolor/31.png" alt=""></div>
        <div class="hairBackground"> <img src="./female-bodycolor/32.png" alt=""></div>
        <div class="hairBackground"> <img src="./female-bodycolor/33.png" alt=""></div>
    </div>
    <div>
        <div class="hairBackground"> <img src="./female-bodycolor/34.png" alt=""></div>      
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
        <div class="hairBackground"> <img src="./female-background/35.png" alt=""></div>
        <div class="hairBackground"> <img src="./female-background/36.png" alt=""></div>
        <div class="hairBackground"> <img src="./female-background/37.png" alt=""></div>
        <div class="hairBackground"> <img src="./female-background/38.png" alt=""></div>
        <div class="hairBackground"> <img src="./female-background/39.png" alt=""></div>
    </div>
    <div>
        <div class="hairBackground"> <img src="./female-background/40.png" alt=""></div>      
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
    </div>`

})
