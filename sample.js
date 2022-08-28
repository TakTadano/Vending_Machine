class People{
    constructor(name, bounty, imgURL){
        this.name = name;
        this.bounty = bounty;
        this.imgURL = imgURL;
    }
}

const peopleList = [
    new People("Monkey D. Luffy", "3,000,000,000", "./figs/onepiece01_luffy.png"),
    new People("Roronoa Zoro", "3,000,000,000", "./figs/onepiece02_zoro_bandana.png"),
    new People("Nami", "3,000,000,000", "./figs/onepiece03_nami.png"),
    new People("Usopp", "3,000,000,000", "./figs/onepiece04_usopp_sogeking.png"),
    new People("Vinsmoke Sanji", "3,000,000,000", "./figs/onepiece05_sanji.png"),
    new People("Tony Tony Chopper", "3,000,000,000", "./figs/onepiece06_chopper.png"),
    new People("Nico Robin", "3,000,000,000", "./figs/onepiece07_robin.png"),
    new People("Franky ", "3,000,000,000", "./figs/onepiece08_franky.png"),
    new People("Brook", "3,000,000,000", "./figs/onepiece09_brook.png"),
    new People("Jinbe", "3,000,000,000", "./figs/onepiece10_jinbe.png")
]
    

//




const target = document.getElementById("target");
const sliderItems = document.querySelectorAll(".slider-item");

console.log(sliderItems);

let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
//overflow-hiddensって何？
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

main.append(sliderShow[0]);


sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2");

let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);

main.setAttribute("data-index", "0");

// ここからJavaScriptを記述してください。
function slideJump(steps, animationType) {
    let index = parseInt(main.getAttribute("data-index"));
    let currentElement = sliderItems.item(index);

    index += steps;

    if(index < 0) index = sliderItems.length -1;
    else if(index >= sliderItems.length) index = 0;

    let nextElement = sliderItems.item(index);

    main.setAttribute("data-index", index.toString());

    animateMain(currentElement, nextElement, animationType);
}

function animateMain(currentElement, nextElement, animationType) {
    main.innerHTML = "";
    main.append(nextElement);
    
    extra.innerHTML = "";
    extra.append(currentElement);

    main.classList.add("expand-animation");
    extra.classList.add("deplete-animation");
    
    if (animationType === "right"){
        sliderShow.innerHTML = "";
        sliderShow.append(extra);
        sliderShow.append(main);
    } else if (animationType === "left") {
        sliderShow.innerHTML = "";
        sliderShow.append(main);
        sliderShow.append(extra);
    }
}

// 右ボタンをクリックした時に右方向へスライドし、左ボタンをクリックすると左方向へスライドするaddEventListenerを追加してください。

leftBtn.addEventListener("click", function(){
    slideJump(-1, "left");
});

rightBtn.addEventListener("click", function(){
    slideJump(+1, "right");
})