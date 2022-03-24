
const openBox = document.getElementById("open-box")
const mysteryBox = document.getElementById("main-container-box")
const propertyElement = document.getElementById("property-element");

const propertyElementHair = document.getElementById("property-element-6");
const propertyElementSpecialPowers =
  document.getElementById("property-element-7");
const propertyElementSmile = document.getElementById("property-element-5");
const propertyElementCostume = document.getElementById("property-element-4");
const propertyElementEyes = document.getElementById("property-element-3");
const propertyElementBodyColor = document.getElementById("property-element-2");
const propertyElementBackground = document.getElementById("property-element-9");
const femalebtn = document.getElementById("femalebtn")
const malebtn = document.getElementById("malebtn")
const femaleBtn = document.getElementById("female-btn");
const maleBtn = document.getElementById("male-btn");
const avatar = document.getElementById("avatar");

openBox.addEventListener("click", () => {
  mysteryBox.classList.add("show")
})

let avatarImages = [
  "./female-smile/16.png",
  "./female-special-powers/9.png",
  "./female-costume/21.png",
  "./female-eyes/25.png",
  "./female-bodycolor/29.png",
  "./female-background/35.png",
  "./hairs/11.png",
];

let femaleHairsArray = [
  "./hairs/11.png",
  "./hairs/12.png",
  "./hairs/13.png",
  "./hairs/14.png",
  "./hairs/15.png",
];

femaleBtn.addEventListener("click", () => {
    femalebtn.classList.add("click")
    femaleBtn.classList.add("white-text")
    malebtn.classList.remove("click")
    maleBtn.classList.remove("white-text")
    let Avatar = `
    <div class="avatar" >

    <span class="align smiles zindex3"  data-src="./female-smile/16.png" >  <img id="smile" src="./female-smile/16.png" alt="" style=" width : 60%; z-index: 3; "></span>
                        
    <span class="align femaleSpecialPowers zindex4"> <img id="femaleSpecialPowers"
    src="./female-special-powers/9.png" alt="" style=" width : 60%; z-index: 4; "></span>
                        
    <span class="align femaleCostumes zindex3"> <img  id="femaleCostume"
                        src="./female-costume/21.png" alt="" style=" width : 60%; z-index: 3; "></span>
                        
    <span class="align femaleEyes zindex3"> <img id="femaleEyes" src="./female-eyes/25.png" alt="" style=" width : 60%; z-index: 3; "></span>
                        
    <span class="align femaleBodycolor zindex2"> <img id="femaleBodyColor" src="./female-bodycolor/29.png" alt="" style=" width : 60%; z-index: 2; "></span>
                        
    <span class="align femaleBackground zindex1"> <img id="femaleBackground" src="./female-background/35.png" alt="" style=" width : 60%; z-index: 1; "></span>
                        
    <span class="align hairs zindex3" > <img id="hair" src="./hairs/11.png" alt="" style=" width : 60%; z-index: 3; "></span>    
    </div>
    `;
    avatar.innerHTML = Avatar;
  // Displaying Hair-Styles
  propertyElementHair.addEventListener("click", function () {
    console.log("I am Working");
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
        </div>`;

    const femalehair1 = document.getElementById("hair1");
    femalehair1.addEventListener("click", () => {
      document.getElementById("hair").src = femaleHairsArray[0];
    });

    const femalehair2 = document.getElementById("hair2");
    femalehair2.addEventListener("click", () => {
      document.getElementById("hair").src = femaleHairsArray[1];
    });

    const femalehair3 = document.getElementById("hair3");
    femalehair3.addEventListener("click", () => {
      document.getElementById("hair").src = femaleHairsArray[2];
    });

    const femalehair4 = document.getElementById("hair4");
    femalehair4.addEventListener("click", () => {
      document.getElementById("hair").src = femaleHairsArray[3];
    });

    const femalehair5 = document.getElementById("hair5");
    femalehair5.addEventListener("click", () => {
      document.getElementById("hair").src = femaleHairsArray[4];
    });

    let femaleSmileArray = [
      "./female-smile/16.png",
      "./female-smile/17.png",
      "./female-smile/18.png",
      "./female-smile/19.png",
      "./female-smile/20.png",
    ];

    // Displaying smile
    propertyElementSmile.addEventListener("click", function () {
      console.log("I am Working");
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
        </div>`;

      const femaleSmile1 = document.getElementById("smile1");
      femaleSmile1.addEventListener("click", () => {
        document.getElementById("smile").src = femaleSmileArray[0];
      });

      const femaleSmile2 = document.getElementById("smile2");
      femaleSmile2.addEventListener("click", () => {
        document.getElementById("smile").src = femaleSmileArray[1];
      });

      const femaleSmile3 = document.getElementById("smile3");
      femaleSmile3.addEventListener("click", () => {
        document.getElementById("smile").src = femaleSmileArray[2];
      });

      const femaleSmile4 = document.getElementById("smile4");
      femaleSmile4.addEventListener("click", () => {
        document.getElementById("smile").src = femaleSmileArray[3];
      });

      const femaleSmile5 = document.getElementById("smile5");
      femaleSmile5.addEventListener("click", () => {
        document.getElementById("smile").src = femaleSmileArray[4];
      });
    });

    const femaleSpecialPowersArray = [
      "./female-special-powers/9.png",
      "./female-special-powers/10.png",
    ];
    // Displaying Specialpowers
    propertyElementSpecialPowers.addEventListener("click", function () {
      console.log("I am Working");
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
        </div>`;

      let femaleSpecialPowers1 = document.getElementById("femaleSpecialPower1");
      femaleSpecialPowers1.addEventListener("click", () => {
        document.getElementById("femaleSpecialPowers").src =
          femaleSpecialPowersArray[0];
      });

      let femaleSpecialPowers2 = document.getElementById("femaleSpecialPower2");
      femaleSpecialPowers2.addEventListener("click", () => {
        document.getElementById("femaleSpecialPowers").src =
          femaleSpecialPowersArray[1];
      });
    });

    const femaleCostumesArray = [
      "./female-costume/21.png",
      "./female-costume/22.png",
      "./female-costume/23.png",
      "./female-costume/24.png",
    ];
    // Displaying Female Costumes
    propertyElementCostume.addEventListener("click", function () {
      console.log("I am Working");
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
        </div>`;

      let femaleCostume1 = document.getElementById("femaleCostume1");
      femaleCostume1.addEventListener("click", () => {
        document.getElementById("femaleCostume").src = femaleCostumesArray[0];
      });

      let femaleCostume2 = document.getElementById("femaleCostume2");
      femaleCostume2.addEventListener("click", () => {
        document.getElementById("femaleCostume").src = femaleCostumesArray[1];
      });

      let femaleCostume3 = document.getElementById("femaleCostume3");
      femaleCostume3.addEventListener("click", () => {
        document.getElementById("femaleCostume").src = femaleCostumesArray[2];
      });

      let femaleCostume4 = document.getElementById("femaleCostume4");
      femaleCostume4.addEventListener("click", () => {
        document.getElementById("femaleCostume").src = femaleCostumesArray[3];
      });
    });

    const femaleEyesArray = [
      "./female-eyes/25.png",
      "./female-eyes/26.png",
      "./female-eyes/27.png",
      "./female-eyes/28.png",
    ];

    // Displaying Female Eyes
    propertyElementEyes.addEventListener("click", function () {
      console.log("I am Working");
      propertyElement.innerHTML = `
        <div>
            <div class="femaleEyes" id="femaleEyes1"> <img src="./female-eyes/25.png" alt=""></div>
            <div class="femaleEyes" id="femaleEyes2"> <img src="./female-eyes/26.png" alt=""></div>
            <div class="femaleEyes" id="femaleEyes3"> <img src="./female-eyes/27.png" alt=""></div>
            <div class="femaleEyes" id="femaleEyes4"> <img src="./female-eyes/28.png" alt=""></div>
            <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
        </div>
        <div>
            <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>      
            <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
        </div>`;

      const femaleEyes1 = document.getElementById("femaleEyes1");
      femaleEyes1.addEventListener("click", () => {
        document.getElementById("femaleEyes").src = femaleEyesArray[0];
      });

      const femaleEyes2 = document.getElementById("femaleEyes2");
      femaleEyes2.addEventListener("click", () => {
        document.getElementById("femaleEyes").src = femaleEyesArray[1];
      });

      const femaleEyes3 = document.getElementById("femaleEyes3");
      femaleEyes3.addEventListener("click", () => {
        document.getElementById("femaleEyes").src = femaleEyesArray[2];
      });

      const femaleEyes4 = document.getElementById("femaleEyes4");
      femaleEyes4.addEventListener("click", () => {
        document.getElementById("femaleEyes").src = femaleEyesArray[3];
      });
    });

    const femaleBodycolorArray = [
      "./female-bodycolor/29.png",
      "./female-bodycolor/30.png",
      "./female-bodycolor/31.png",
      "./female-bodycolor/32.png",
      "./female-bodycolor/33.png",
      "./female-bodycolor/34.png",
    ];

    // Displaying Female bodycolor
    propertyElementBodyColor.addEventListener("click", function () {
      console.log("I am Working");
      propertyElement.innerHTML = `
        <div>
            <div class="femaleBodycolor" id="femaleBodyColor1"> <img src="./female-bodycolor/29.png" alt=""></div>
            <div class="femaleBodycolor" id="femaleBodyColor2"> <img src="./female-bodycolor/30.png" alt=""></div>
            <div class="femaleBodycolor" id="femaleBodyColor3"> <img src="./female-bodycolor/31.png" alt=""></div>
            <div class="femaleBodycolor" id="femaleBodyColor4"> <img src="./female-bodycolor/32.png" alt=""></div>
            <div class="femaleBodycolor" id="femaleBodyColor5"> <img src="./female-bodycolor/33.png" alt=""></div>
        </div>
        <div>
            <div class="femaleBodycolor" id="femaleBodyColor6"> <img src="./female-bodycolor/34.png" alt=""></div>      
            <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        </div>`;

      const femaleBodyColor1 = document.getElementById("femaleBodyColor1");
      femaleBodyColor1.addEventListener("click", () => {
        document.getElementById("femaleBodyColor").src =
          femaleBodycolorArray[0];
      });

      const femaleBodyColor2 = document.getElementById("femaleBodyColor2");
      femaleBodyColor2.addEventListener("click", () => {
        document.getElementById("femaleBodyColor").src =
          femaleBodycolorArray[1];
      });

      const femaleBodyColor3 = document.getElementById("femaleBodyColor3");
      femaleBodyColor3.addEventListener("click", () => {
        document.getElementById("femaleBodyColor").src =
          femaleBodycolorArray[2];
      });

      const femaleBodyColor4 = document.getElementById("femaleBodyColor4");
      femaleBodyColor4.addEventListener("click", () => {
        document.getElementById("femaleBodyColor").src =
          femaleBodycolorArray[3];
      });

      const femaleBodyColor5 = document.getElementById("femaleBodyColor5");
      femaleBodyColor5.addEventListener("click", () => {
        document.getElementById("femaleBodyColor").src =
          femaleBodycolorArray[4];
      });

      const femaleBodyColor6 = document.getElementById("femaleBodyColor6");
      femaleBodyColor6.addEventListener("click", () => {
        document.getElementById("femaleBodyColor").src =
          femaleBodycolorArray[5];
      });
    });

    const femaleBackgroundArray = [
      "./female-background/35.png",
      "./female-background/36.png",
      "./female-background/37.png",
      "./female-background/38.png",
      "./female-background/39.png",
      "./female-background/40.png",
    ];
    // Displaying Female background
    propertyElementBackground.addEventListener("click", function () {
      console.log("I am Working");
      propertyElement.innerHTML = `
        <div>
            <div class="femaleBackground" id="femaleBackground1" > <img src="./female-background/35.png" alt=""></div>
            <div class="femaleBackground" id="femaleBackground2" > <img src="./female-background/36.png" alt=""></div>
            <div class="femaleBackground" id="femaleBackground3" > <img src="./female-background/37.png" alt=""></div>
            <div class="femaleBackground" id="femaleBackground4" > <img src="./female-background/38.png" alt=""></div>
            <div class="femaleBackground" id="femaleBackground5" > <img src="./female-background/39.png" alt=""></div>
        </div>
        <div>
            <div class="femaleBackground" id="femaleBackground6" > <img src="./female-background/40.png" alt=""></div>      
            <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
        </div>`;

      const femaleBackground1 = document.getElementById("femaleBackground1");
      femaleBackground1.addEventListener("click", () => {
        document.getElementById("femaleBackground").src =
          femaleBackgroundArray[0];
      });

      const femaleBackground2 = document.getElementById("femaleBackground2");
      femaleBackground2.addEventListener("click", () => {
        document.getElementById("femaleBackground").src =
          femaleBackgroundArray[1];
      });

      const femaleBackground3 = document.getElementById("femaleBackground3");
      femaleBackground3.addEventListener("click", () => {
        document.getElementById("femaleBackground").src =
          femaleBackgroundArray[2];
      });

      const femaleBackground4 = document.getElementById("femaleBackground4");
      femaleBackground4.addEventListener("click", () => {
        document.getElementById("femaleBackground").src =
          femaleBackgroundArray[3];
      });

      const femaleBackground5 = document.getElementById("femaleBackground5");
      femaleBackground5.addEventListener("click", () => {
        document.getElementById("femaleBackground").src =
          femaleBackgroundArray[4];
      });

      const femaleBackground6 = document.getElementById("femaleBackground6");
      femaleBackground6.addEventListener("click", () => {
        document.getElementById("femaleBackground").src =
          femaleBackgroundArray[5];
      });
    });
  });

});  

maleBtn.addEventListener("click", () => {
    malebtn.classList.add("click")
    maleBtn.classList.add("white-text")
    femalebtn.classList.remove("click")
    femaleBtn.classList.remove("white-text")
    let Avatar = `
    <div class="avatar" >

    <span class="align smiles zindex3"  data-src="./male-smile/50.png" >  <img id="smile" src="./male-smile/50.png" alt="" style=" width : 60%; z-index: 3; "></span>

    <span class="align maleSpecialPowers zindex4"> <img id="maleSpecialPowers" src="./male-special-powers/42.png" alt="" style=" width : 60%; z-index: 4; "></span>

    <span class="align MaleCostumes zindex3"> <img id="maleCostume" src="./male-costume/54.png" alt="" style=" width : 60%; z-index: 3; "></span>

    <span class="align maleEyes zindex3"> <img id="maleEyes" src="./male-eyes/57.png" alt="" style=" width : 60%; z-index: 3; "></span>

    <span class="align male-bodycolor zindex2"> <img id="maleBodycolor" src="./male-bodycolor/07.png" alt="" style=" width : 60%; z-index: 2; "></span>

    <span class="align maleBackground zindex1"> <img id="maleBackground" src="./male-background/bg 0.png" alt="" style=" width : 60%; z-index: 1; "></span>

    <span class="align malehairs zindex3" > <img id="maleHair" src="./male-hairs/45.png" alt="" style=" width : 60%; z-index: 3; "></span>  
    </div>
    `;
    avatar.innerHTML = Avatar;

    const maleHairArray = [
      "./male-hairs/45.png",
      "./male-hairs/46.png",
      "./male-hairs/47.png",
      "./male-hairs/48.png",
    ];

    propertyElementHair.addEventListener("click", () => {
      propertyElement.innerHTML = `
        <div>
            <div class="hairs" id="hair1">  <img src="./male-hairs/45.png" alt="">  </div> 

            <div class="hairs" id="hair2">  <img src="./male-hairs/46.png" alt="">
            </div>

            <div class="hairs" id="hair3"> <img src="./male-hairs/47.png" alt=""></div>
            <div class="hairs" id="hair4"> <img src="./male-hairs/48.png" alt=""></div>
            <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        </div>
        <div>
            <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
            <div class="hairs"><img src="./hairs/image 2 (6).png" alt=""></div>
        </div>`;

      const hair1 = document.getElementById("hair1");
      hair1.addEventListener("click", () => {
        document.getElementById("maleHair").src = maleHairArray[0];
      });

      const hair2 = document.getElementById("hair2");
      hair2.addEventListener("click", () => {
        document.getElementById("maleHair").src = maleHairArray[1];
      });
      const hair3 = document.getElementById("hair3");
      hair3.addEventListener("click", () => {
        document.getElementById("maleHair").src = maleHairArray[2];
      });

      const hair4 = document.getElementById("hair4");
      hair4.addEventListener("click", () => {
        document.getElementById("maleHair").src = maleHairArray[3];
      });
    });
    let maleSmileArray = [
        "./male-smile/49.png",
        "./male-smile/50.png",
        "./male-smile/51.png",
        "./male-smile/52.png",
      ];
  
      // Displaying smile
      propertyElementSmile.addEventListener("click", function () {
        console.log("I am Working");
        propertyElement.innerHTML = `
          <div>
              <div class="femaleSmile" id="smile1"> <img src="./male-smile/49.png" alt=""></div>
              <div class="femaleSmile" id="smile2"> <img src="./male-smile/50.png" alt=""></div>
              <div class="femaleSmile" id="smile3"> <img src="./male-smile/51.png" alt=""></div>
              <div class="femaleSmile" id="smile4"> <img src="./male-smile/52.png" alt=""></div>
              <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
          </div>
          <div>
              <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>      
              <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleSmile"> <img src="./hairs/image 2 (6).png" alt=""></div>
          </div>`;
  
        const maleSmile1 = document.getElementById("smile1");
        maleSmile1.addEventListener("click", () => {
          document.getElementById("smile").src = maleSmileArray[0];
        });
  
        const maleSmile2 = document.getElementById("smile2");
        maleSmile2.addEventListener("click", () => {
          document.getElementById("smile").src = maleSmileArray[1];
        });
  
        const maleSmile3 = document.getElementById("smile3");
        maleSmile3.addEventListener("click", () => {
          document.getElementById("smile").src = maleSmileArray[2];
        });
  
        const maleSmile4 = document.getElementById("smile4");
        maleSmile4.addEventListener("click", () => {
          document.getElementById("smile").src = maleSmileArray[3];
        });
  
        
      });
  
      const maleSpecialPowersArray = [
        "./male-special-powers/41.png",
        "./male-special-powers/42.png",
        "./male-special-powers/43.png",
        "./male-special-powers/44.png",
      ];
      // Displaying Specialpowers
      propertyElementSpecialPowers.addEventListener("click", function () {
        console.log("I am Working");
        propertyElement.innerHTML = `
          <div>
              <div class="maleSpecialPowers" id="maleSpecialPower1"> 
              <img src="./male-special-powers/41.png" alt=""></div> 
  
              <div class="maleSpecialPowers" id="maleSpecialPower2"> 
              <img src="./male-special-powers/42.png" alt=""></div> 
  
              <div class="maleSpecialPowers" id="maleSpecialPower3"> 
              <img src="./male-special-powers/43.png" alt=""></div>

              <div class="maleSpecialPowers" id="maleSpecialPower4"> 
              <img src="./male-special-powers/44.png" alt=""></div>


              <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
          </div>
          <div>
              <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>      
              <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleSpecialPowers"> <img src="./hairs/image 2 (6).png" alt=""></div>
          </div>`;
  
        let maleSpecialPowers1 = document.getElementById("maleSpecialPower1");
        maleSpecialPowers1.addEventListener("click", () => {
          document.getElementById("maleSpecialPowers").src =
            maleSpecialPowersArray[0];
        });
  
        let maleSpecialPowers2 = document.getElementById("maleSpecialPower2");
        maleSpecialPowers2.addEventListener("click", () => {
          document.getElementById("maleSpecialPowers").src =
            maleSpecialPowersArray[1];
        });

        let maleSpecialPowers3 = document.getElementById("maleSpecialPower3");
        maleSpecialPowers3.addEventListener("click", () => {
          document.getElementById("maleSpecialPowers").src =
            maleSpecialPowersArray[2];
        });

        let maleSpecialPowers4 = document.getElementById("maleSpecialPower4");
        maleSpecialPowers4.addEventListener("click", () => {
          document.getElementById("maleSpecialPowers").src =
            maleSpecialPowersArray[3];
        });
      });
  
      const maleCostumesArray = [
        "./male-costume/53.png",
        "./male-costume/54.png",
        "./male-costume/55.png",
      ];
      // Displaying male Costumes
      propertyElementCostume.addEventListener("click", function () {
        console.log("I am Working");
        propertyElement.innerHTML = `
          <div>
              <div class="maleCostumes" id="maleCostume1"> <img src="./male-costume/53.png" alt=""></div>
              <div class="maleCostumes" id="maleCostume2"> <img src="./male-costume/54.png" alt=""></div>
              <div class="maleCostumes" id="maleCostume3"> <img src="./male-costume/55.png" alt=""></div>
              <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
          </div>
          <div>
              <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>      
              <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleCostumes"> <img src="./hairs/image 2 (6).png" alt=""></div>
          </div>`;
  
        let maleCostume1 = document.getElementById("maleCostume1");
        maleCostume1.addEventListener("click", () => {
          document.getElementById("maleCostume").src = maleCostumesArray[0];
        });
  
        let maleCostume2 = document.getElementById("maleCostume2");
        maleCostume2.addEventListener("click", () => {
          document.getElementById("maleCostume").src = maleCostumesArray[1];
        });
  
        let maleCostume3 = document.getElementById("maleCostume3");
        maleCostume3.addEventListener("click", () => {
          document.getElementById("maleCostume").src = maleCostumesArray[2];
        });
  
        
      });
  
      const maleEyesArray = [
        "./male-eyes/56.png",
        "./male-eyes/57.png",
        "./male-eyes/58.png",
        "./male-eyes/59.png",
      ];
  
      // Displaying Female Eyes
      propertyElementEyes.addEventListener("click", function () {
        console.log("I am Working");
        propertyElement.innerHTML = `
          <div>
              <div class="femaleEyes" id="maleEyes1"> <img src="./male-eyes/59.png" alt=""></div>
              <div class="femaleEyes" id="maleEyes2"> <img src="./male-eyes/57.png" alt=""></div>
              <div class="femaleEyes" id="maleEyes3"> <img src="./male-eyes/58.png" alt=""></div>
              <div class="femaleEyes" id="maleEyes4"> <img src="./male-eyes/59.png" alt=""></div>
              <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
          </div>
          <div>
              <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>      
              <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
              <div class="femaleEyes"> <img src="./hairs/image 2 (6).png" alt=""></div>
          </div>`;
  
        const maleEyes1 = document.getElementById("maleEyes1");
        maleEyes1.addEventListener("click", () => {
          document.getElementById("maleEyes").src = maleEyesArray[0];
        });
  
        const maleEyes2 = document.getElementById("maleEyes2");
        maleEyes2.addEventListener("click", () => {
          document.getElementById("maleEyes").src = maleEyesArray[1];
        });
  
        const maleEyes3 = document.getElementById("maleEyes3");
        maleEyes3.addEventListener("click", () => {
          document.getElementById("maleEyes").src = maleEyesArray[2];
        });
  
        const maleEyes4 = document.getElementById("maleEyes4");
        maleEyes4.addEventListener("click", () => {
          document.getElementById("maleEyes").src = maleEyesArray[3];
        });
        
      });
  
      const maleBodycolorArray = [
        "./male-bodycolor/01.png",
        "./male-bodycolor/02.png",
        "./male-bodycolor/03.png",
        "./male-bodycolor/04.png",
        "./male-bodycolor/05.png",
        "./male-bodycolor/06.png",
        "./male-bodycolor/07.png",
        "./male-bodycolor/08.png",
        "./male-bodycolor/60.png",
      ];
  
      // // Displaying male bodycolor
      // propertyElementBodyColor.addEventListener("click", function () {
      //   console.log("I am Working");
      //   propertyElement.innerHTML = `
      //     <div>
      //         <div class="maleBodycolor" id="maleBodyColor1"> <img src="./male-bodycolor/01.png" alt=""></div>
      //         <div class="maleBodycolor" id="maleBodyColor2"> <img src="./male-bodycolor/02.png" alt=""></div>
      //         <div class="maleBodycolor" id="maleBodyColor3"> <img src="./male-bodycolor/03.png" alt=""></div>
      //         <div class="maleBodycolor" id="maleBodyColor4"> <img src="./male-bodycolor/04.png" alt=""></div>
      //         <div class="maleBodycolor" id="maleBodyColor5"> <img src="./male-bodycolor/05.png" alt=""></div>
      //     </div>
      //     <div>
      //         <div class="maleBodycolor" id="maleBodyColor6"> <img src= "./male-bodycolor/06.png" alt=""></div>      
      //         <div class="maleBodycolor" id="maleBodyColor7"> <img src= "./male-bodycolor/07.png" alt=""></div>
      //         <div class="maleBodycolor" id="maleBodyColor8"> <img src= "./male-bodycolor/08.png" alt=""></div>
      //         <div class="maleBodycolor" id="maleBodyColor9"> <img src= "./male-bodycolor/60.png" alt=""></div>
      //         <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
      //     </div>`;
  
      //   const maleBodyColor1 = document.getElementById("maleBodyColor1");
      //   maleBodyColor1.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[0];
      //   });
  
      //   const maleBodyColor2 = document.getElementById("maleBodyColor2");
      //   maleBodyColor2.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[1];
      //   });
  
      //   const maleBodyColor3 = document.getElementById("maleBodyColor3");
      //   maleBodyColor3.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[2];
      //   });
  
      //   const maleBodyColor4 = document.getElementById("maleBodyColor4");
      //   maleBodyColor4.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[3];
      //   });
  
      //   const maleBodyColor5 = document.getElementById("maleBodyColor5");
      //   maleBodyColor5.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[4];
      //   });
  
      //   const maleBodyColor6 = document.getElementById("maleBodyColor6");
      //   maleBodyColor6.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[5];
      //   });

      //   const maleBodyColor7 = document.getElementById("maleBodyColor7");
      //   maleBodyColor7.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[6];
      //   });

      //   const maleBodyColor8 = document.getElementById("maleBodyColor8");
      //   maleBodyColor8.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[7];
      //   });

      //   const maleBodyColor9 = document.getElementById("maleBodyColor9");
      //   maleBodyColor9.addEventListener("click", () => {
      //     document.getElementById("maleBodyColor").src = maleBodycolorArray[8];
      //   });

      //   const maleEyes4 = document.getElementById("maleEyes4");
      //   maleEyes4.addEventListener("click", () => {
      //     document.getElementById("maleEyes").src = maleEyesArray[3];
      //   });
      // });
  
      // const femaleBackgroundArray = [
      //   "./female-background/35.png",
      //   "./female-background/36.png",
      //   "./female-background/37.png",
      //   "./female-background/38.png",
      //   "./female-background/39.png",
      //   "./female-background/40.png",
      // ];
      // // Displaying Female background
      // propertyElementBackground.addEventListener("click", function () {
      //   console.log("I am Working");
      //   propertyElement.innerHTML = `
      //     <div>
      //         <div class="femaleBackground" id="femaleBackground1" > <img src="./female-background/35.png" alt=""></div>
      //         <div class="femaleBackground" id="femaleBackground2" > <img src="./female-background/36.png" alt=""></div>
      //         <div class="femaleBackground" id="femaleBackground3" > <img src="./female-background/37.png" alt=""></div>
      //         <div class="femaleBackground" id="femaleBackground4" > <img src="./female-background/38.png" alt=""></div>
      //         <div class="femaleBackground" id="femaleBackground5" > <img src="./female-background/39.png" alt=""></div>
      //     </div>
      //     <div>
      //         <div class="femaleBackground" id="femaleBackground6" > <img src="./female-background/40.png" alt=""></div>      
      //         <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
      //         <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
      //         <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
      //         <div class="hairBackground"> <img src="./hairs/image 2 (6).png" alt=""></div>
      //     </div>`;
  
      //   const femaleBackground1 = document.getElementById("femaleBackground1");
      //   femaleBackground1.addEventListener("click", () => {
      //     document.getElementById("femaleBackground").src =
      //       femaleBackgroundArray[0];
      //   });
  
      //   const femaleBackground2 = document.getElementById("femaleBackground2");
      //   femaleBackground2.addEventListener("click", () => {
      //     document.getElementById("femaleBackground").src =
      //       femaleBackgroundArray[1];
      //   });
  
      //   const femaleBackground3 = document.getElementById("femaleBackground3");
      //   femaleBackground3.addEventListener("click", () => {
      //     document.getElementById("femaleBackground").src =
      //       femaleBackgroundArray[2];
      //   });
  
      //   const femaleBackground4 = document.getElementById("femaleBackground4");
      //   femaleBackground4.addEventListener("click", () => {
      //     document.getElementById("femaleBackground").src =
      //       femaleBackgroundArray[3];
      //   });
  
      //   const femaleBackground5 = document.getElementById("femaleBackground5");
      //   femaleBackground5.addEventListener("click", () => {
      //     document.getElementById("femaleBackground").src =
      //       femaleBackgroundArray[4];
      //   });
  
      //   const femaleBackground6 = document.getElementById("femaleBackground6");
      //   femaleBackground6.addEventListener("click", () => {
      //     document.getElementById("femaleBackground").src =
      //       femaleBackgroundArray[5];
      //   });
      // });
    
  
});