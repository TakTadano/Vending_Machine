//写真のリスト
class Photo{
    constructor(photoId, title, place, year, favoritePart, url){
        this.photoId = photoId;
        this.title = title;
        this.place = place;
        this.year = year;
        this.favoritePart = favoritePart;
        this.url = url;
    }
}
const photoList = [
    new Photo(0,"Kunsthal Rotterdam", "Rotterdam / Nederland", 2017, "Diagonal structure", "https://github.com/khkmgch/Vending_Machine/blob/main/images/194f41e5c91e21dfd4648ab1564e3d19.jpg?raw=true"), 
    new Photo(1,"30 St Mary Axe", "London / UK", 2017, "The design that reduce an environmental load related to wind and heat", "https://github.com/khkmgch/Vending_Machine/blob/main/images/20733331a6690d3b0de6e47f683441af.jpg?raw=true"), 
    new Photo(2,"Église Notre-Dame du Raincy", "Le Raincy / France", 2017, "Thin concrete pillars and beautiful stained glass made of concrete lattice", "https://github.com/khkmgch/Vending_Machine/blob/main/images/35e0fd2e300e19b2466273bc51edc4fb.jpg?raw=true"), 
    new Photo(3,"La tour Eiffel", "Paris / France", 2017, "The structure of the lower part", "https://github.com/khkmgch/Vending_Machine/blob/main/images/27cc90982f267ac246ec4ac4b944032d.jpg?raw=true"), 
    new Photo(4,"Wiggle Side chair", "the United States", 2017, "Interesting shape made of cardboard", "https://github.com/khkmgch/Vending_Machine/blob/main/images/294c1acbdd63b22b38dc52c7d0b5da2f.jpg?raw=true"), 
    new Photo(5,"Zig-Zag Chair", "Nederland", 2017, "a minimalistic design without legs", "https://github.com/khkmgch/Vending_Machine/blob/main/images/2a8b0d8f3c3b30dda2b84fae11d37041.jpg?raw=true"), 
    new Photo(6,"Foundation Louis Vuitton", "Paris / France", 2017, "Innovative design that combines steel, wood and glass", "https://github.com/khkmgch/Vending_Machine/blob/main/images/2cfdfc4cc23a2de921fb1d3f8358ebcf.jpg?raw=true"), 
    new Photo(7,"Big Ben", "London / UK", 2017, "Artistic facade of Neo-gothic style", "https://github.com/khkmgch/Vending_Machine/blob/main/images/319c158029be4fa39631bfac55c03060.jpg?raw=true"), 
    new Photo(8,"Cité de Refuge", "Paris / France", 2017, "Characteristic facade with brise-soleil", "https://github.com/khkmgch/Vending_Machine/blob/main/images/35d81209a3c1c5890a93208b5ced9fd0.jpg?raw=true"), 
    new Photo(9,"London Metropolitan University", "London / UK", 2017, "The constructive shapes that excite visitors, steel panels and geometric windows", "https://github.com/khkmgch/Vending_Machine/blob/main/images/3c7c9c947850dc5e0e3b7c76c09447bd.jpg?raw=true"), 
    new Photo(10,"Elbphilharmonie", "Hamburg / Germany", 2017, "The facade like an iceberg and the design of the concert hall with algorithms", "https://github.com/khkmgch/Vending_Machine/blob/main/images/3e1dbbf6aaba13959030eb1a0bca7dc1.jpg?raw=true"), 
    new Photo(11,"Paddington station", "London / UK", 2017, "A bright and large space with  glass roofs", "https://github.com/khkmgch/Vending_Machine/blob/main/images/47f82dd362ded2261ca7a3e26da9fc18.jpg?raw=true"), 
    new Photo(12,"Tate Modern", "London / UK", 2017, "The bricks arranged in a mosaic pattern and twisted shape", "https://github.com/khkmgch/Vending_Machine/blob/main/images/4b49d9a74d7ec947dc607adfcab4f314.jpg?raw=true"), 
    new Photo(13,"Maison du Bresil", "Paris / France", 2017, "The exciting entrance with low ceiling and colorful grasses", "https://github.com/khkmgch/Vending_Machine/blob/main/images/4f528af4ab8774a6c320b9e39624ffa9.jpg?raw=true"), 
    new Photo(14,"Landscape in Hamburg", "Hamburg / Germany", 2017, "Brick warehouse district not seen in Japan", "https://github.com/khkmgch/Vending_Machine/blob/main/images/513acd7eccdb05962905c877b3385372.jpg?raw=true"), 
    new Photo(15,"Cube house", "Rotterdam / Nederland", 2017, "Unique shape of houses to gather and live", "https://github.com/khkmgch/Vending_Machine/blob/main/images/5c5e023e9fe46005692f2cc88068f5c2.jpg?raw=true"), 
    new Photo(16,"Cathédrale Notre-Dame de Paris", "Paris / France", 2017, "Beautiful facade consists of three-layer in gothic style", "https://github.com/khkmgch/Vending_Machine/blob/main/images/5d45cf4ad045be9945ae46c517a31284.jpg?raw=true"), 
    new Photo(17,"The Interlace", "Singapore", 2016, "Breaking away from the typical tower design with irregularly stacked blocks to enrich the living environment", "https://github.com/khkmgch/Vending_Machine/blob/main/images/615ac0bba711cf4365038cb7a49c3ab8.jpg?raw=true"), 
    new Photo(18,"Maison de Victor Horta", "Brussels / Kingdom of Belgium", 2017, "Complex and beautiful decoration in Art Nouveau style", "https://github.com/khkmgch/Vending_Machine/blob/main/images/62d2802e745d0c2a30b61105c1edfafc.jpg?raw=true"), 
    new Photo(19,"25 Rue Franklin", "Paris / France", 2017, "The facade that represents the plan to provide a rich living environment", "https://github.com/khkmgch/Vending_Machine/blob/main/images/6361e8e9d0e0dcb789cc1a183c11e318.jpg?raw=true"), 
    new Photo(20,"Centre Pompidou", "Paris / France", 2017, "The facade that consists of exposed equipment pipe", "https://github.com/khkmgch/Vending_Machine/blob/main/images/df34d6a69db08fb2754100b9033020ff.jpg?raw=true"), 
    new Photo(21,"Het Nieuwe Instituutu", "Rotterdam / Nederland", 2017, "Appearance composed of volumes of various materials", "https://github.com/khkmgch/Vending_Machine/blob/main/images/7c82e701b80b0619eb2a7c68d4737463.jpg?raw=true"), 
    new Photo(22,"Villa Savoye", "Poissy / France", 2017, "Appearance as if the living space is floating and bright interior space with horizontal windows", "https://github.com/khkmgch/Vending_Machine/blob/main/images/7eaa9a03fd08906e2ed8f0f4f63507dd.jpg?raw=true"), 
    new Photo(23,"Station Antwerpen-Centraal", "Antwerpen / Kingdom of Belgium", 2017, "Anyway, the appearance is too beautiful...", "https://github.com/khkmgch/Vending_Machine/blob/main/images/a7b706c495607d6574cc10cf5faf294a.jpg?raw=true"), 
    new Photo(24,"Sainte-Geneviève Library", "Paris / France", 2017, "Open reading space with steel arch", "https://github.com/khkmgch/Vending_Machine/blob/main/images/8ce4e697fd471c5fbce9812bd295ae1f.jpg?raw=true"), 
    new Photo(25,"Tower Bridge", "London / UK", 2017, "Gorgeous tower like castle and a double rainbow!!", "https://github.com/khkmgch/Vending_Machine/blob/main/images/93515a0ea802468382d6dde51143b28e.jpg?raw=true"), 
    new Photo(26,"Lloyd's building", "London / UK", 2017, "Apprearance with elevators, stairs, and equipment pipe installed outside", "https://github.com/khkmgch/Vending_Machine/blob/main/images/9a3b66e1827e83ddebd18dabea22dd79.jpg?raw=true"), 
    new Photo(27,"Regent Street", "London / UK", 2017, "Many people walking along the arc", "https://github.com/khkmgch/Vending_Machine/blob/main/images/a0d2521783d95d2f383d79091a155152.jpg?raw=true"), 
    new Photo(28,"Fondation Cartier pour l'art contemporain", "Paris / France", 2017, "Contrast between glass façade and plants", "https://github.com/khkmgch/Vending_Machine/blob/main/images/af97df7e5925f7b342606e3ad5e88469.jpg?raw=true"), 
    new Photo(29,"The Hive", "Singapore", 2016, "Interesting design not found in traditional university facilities", "https://github.com/khkmgch/Vending_Machine/blob/main/images/bb97e35a316749143550115aecfde679.jpg?raw=true"), 
    new Photo(30,"Galeries Royales Saint-Hubert", "Brussels / Kingdom of Belgium", 2017, "Bright and beautiful arcade", "https://github.com/khkmgch/Vending_Machine/blob/main/images/bdf7a6d9f7931d1febde501f44212d6e.jpg?raw=true"), 
    new Photo(31,"Institut du monde arabe", "Paris / France", 2017, "Facade featuring aluminum panels that adjusts the light", "https://github.com/khkmgch/Vending_Machine/blob/main/images/c56d8d3242c19cbfd327fc1d05bded4c.jpg?raw=true"), 
    new Photo(32,"Saint Paul's Cathedral", "Paris / France", 2017, "Beautiful ceiling", "https://github.com/khkmgch/Vending_Machine/blob/main/images/c9ce2e9d03b7d0a4dd37126e73bb1a58.jpg?raw=true"), 
    new Photo(33,"D'leedon", "Singapore", 2017, "New high-rise building design", "https://github.com/khkmgch/Vending_Machine/blob/main/images/cc2f3d1847de9adb46421eebf2f25e41.jpg?raw=true"), 
    new Photo(34,"Westminster Abbey", "London / UK", 2017, "Spectacular and beautiful space in gothic style", "https://github.com/khkmgch/Vending_Machine/blob/main/images/d668a060c9d2734a541121e34c337647.jpg?raw=true"), 
    new Photo(35,"Markthal", "Rotterdam / Nederland", 2017, "Huge market space surrounded by apartment houses", "https://github.com/khkmgch/Vending_Machine/blob/main/images/e540c104573845020da33d51d705950c.jpg?raw=true"), 
    new Photo(36,"Maison Schröder de Rietveld", "Utrecht / Nederland", 2017, "Appearance constructed like an abstract painting in De Stijl", "https://github.com/khkmgch/Vending_Machine/blob/main/images/e5cd79988b8aef584fbcdcb7397b3815.jpg?raw=true"), 
    new Photo(37,"Landscape of London", "London / UK", 2017, "A combination of a slowly moving Ferris wheel and the flow of a river", "https://github.com/khkmgch/Vending_Machine/blob/main/images/e752ed288d47241101a42ed60dd0a8b2.jpg?raw=true"), 
    new Photo(38,"Landscape of Jiufen", "Jiufen / Taiwan", 2015, "Retro cityscape", "https://github.com/khkmgch/Vending_Machine/blob/main/images/f095f52ac867cb19e6e1d545cc216e3e.jpg?raw=true"), 
    new Photo(39,"Port Authority Building", "Antwerp / Kingdom of Belgium", 2017, "Appearance like a shining diamond reflects sunlight", "https://github.com/khkmgch/Vending_Machine/blob/main/images/f1933cb0b47dbf2f76a5ce68eb17d869.jpg?raw=true"), 
    new Photo(40,"The Magazine", "London / UK", 2017, "Coexistence of traditional brick construction and futuristic design", "https://github.com/khkmgch/Vending_Machine/blob/main/images/fd436ab57a8ed4ec58d0c4f4f6c26c51.jpg?raw=true"), 
    new Photo(41,"Tokyo National Museum", "Tokyo / Japan", 2018, "Beautiful space that is quiet and dignified", "https://github.com/khkmgch/Vending_Machine/blob/main/images/IMG_4066.jpg?raw=true"), 
    new Photo(42,"St. Mary's Cathedral, Tokyo", "Tokyo / Japan", 2018, "Magnificent space created by curved concrete surfaces and sunlight", "https://github.com/khkmgch/Vending_Machine/blob/main/images/IMG_4460.jpg?raw=true")];

class Page{
    static createHTML(bgColor, homeTitleFont, homeTitleColor, homeTitle, homeSubTitle, machineHeading){
        //ターゲット
        let target = document.getElementById("target");
        target.classList.add(`${bgColor}`, "d-flex", "flex-column", "align-items-center");

        //ホーム画面
        let home = Page.createHomeHTML(`${homeTitleFont}`, `${homeTitleColor}`, `${homeTitle}`, `${homeSubTitle}`);
        target.append(home);

        //メインのVendingMachine部分
        let machineDiv = Page.createMachineHTML(`${machineHeading}`);
        target.append(machineDiv);
    }
    static createHomeHTML(font, textColor, title, subTitle){
        let home = document.createElement("div");
        home.classList.add("vh-100", "m-5", "d-flex", "flex-column", "justify-content-center", "align-items-center");
        home.innerHTML = `
        <div class="line">
            <div class="title-disappear"></div>
            <h2 class="text-center ${textColor} ${font} title-appear">${title}: <br>${subTitle}</h2>
            <div class="line-animation "></div>
        </div>
        <div class="mt-5">
            <div class="link-disappear "></div>
            <div class="link-appear ">
                <a href="#VendingMachine" class="text-light bg-secondary ${font}">>>Jump to Vending Photo Machine</a>
            </div>
        </div>
        `;
        return home;
    }
    //メインのVendingMachine部分を作成する関数
    static createMachineHTML(headingString){
        //VendingMachine部分のdiv
        let machineDiv = document.createElement("div");
        machineDiv.id = "VendingMachine";
        machineDiv.classList.add("m-5", "d-flex", "justify-content-center", "align-items-center");
        target.append(machineDiv);

        let borderDiv = document.createElement("div");
        borderDiv.classList.add("border", "border-lightgrey", "col-12", "col-md-11", "d-flex", "flex-column", "align-items-center", "my-5", "pt-3");
        machineDiv.append(borderDiv);
        //見出し
        let headingDiv = Page.createHeadingHTML(headingString);
        borderDiv.append(headingDiv);

        let flexDiv = document.createElement("div");
        flexDiv.classList.add("d-flex", "flex-wrap", "justify-content-around", "p-2");
        borderDiv.append(flexDiv);

        //左側（画像を表示するslider）
        let sliderDiv = Page.createLeftSection();
        flexDiv.append(sliderDiv);
        //右側（写真の情報を表示するdisplayと、入力するcalculator）
        let rightSecDiv = Page.createRightSection();
        flexDiv.append(rightSecDiv);

        return machineDiv;
    }
    //見出し部分のHTMLを作成する関数
    static createHeadingHTML(headingString){
        let headingDiv = document.createElement("h3");
        headingDiv.classList.add("text-light", "font-kaushan", "text-center");
        headingDiv.innerHTML = `${headingString}`;
        return headingDiv;
    }
    //左側（画像を表示するslider）を作成する関数
    static createLeftSection(){
        //画像を表示するslider
        let sliderDiv = document.createElement("div");
        sliderDiv.id = "slider";
        sliderDiv.classList.add("col-12", "col-md-5", "d-flex", "justify-content-center", "align-items-center", "mx-2", "p-4", "p-md-0");
        
        //sliderにアニメーションで表示するmainと、消すextraを用意
        let main = document.createElement("div");
        main.classList.add("main", "img-appear");
        main.setAttribute("data-index", undefined);
        let extra = document.createElement("div");
        extra.classList.add("extra", "img-disappear");

        sliderDiv.append(main);
        sliderDiv.append(extra);

        return sliderDiv;
    }
    //右側（写真の情報を表示するdisplayと、入力するcalculator）を作成する関数
    static createRightSection(){
        //displayとcalculatorを囲うdiv
        let rightSecDiv = document.createElement("div");
        rightSecDiv.classList.add("col-12", "col-md-5", "mt-4", "mt-md-0", "mb-3");
        //写真の情報を表示するdisplay部分
        let displayDiv = Page.createDisplayDiv("bgcolor-grey","font-kaushan", "text-light");
        rightSecDiv.append(displayDiv);
        //入力するcalculator部分
        let calculatorDiv = Page.createCalculatorDiv("bgcolor-grey", "border-lightgrey");
        rightSecDiv.append(calculatorDiv);

        return rightSecDiv;
    }
    static createDisplayDiv(bgColor, font, textColor){
        //写真の情報を表示するdisplay
        let displayDiv = document.createElement("div");
        displayDiv.classList.add("border", "border-lightgrey", `${bgColor}`,"pt-3");
        displayDiv.innerHTML = `
        <div class="d-flex">
            <p class="col-6 ${font} ${textColor}">Id: </p>
            <input type="text" id="photoId" style="background-color: transparent; border:none; " class="col-6 ${font} ${textColor} h-50" disabled>
        </div>
        <div class="d-flex">
            <p class="col-6 ${font} ${textColor}">Title: </p>
            <p id="titleDisplay" class="col-6 ${font} ${textColor}"></p>
        </div>
        <div class="d-flex">
            <p class="col-6 ${font} ${textColor}">Place: </p>
            <p id="placeDisplay" class="col-6 ${font} ${textColor}"></p>
        </div>
        <div class="d-flex">
            <p class="col-6 ${font} ${textColor}">Year: </p>
            <p id="yearDisplay" class="col-6 ${font} ${textColor}"></p>
        </div>
        <div class="d-flex">
            <p class="col-6 ${font} ${textColor}">Favorite part: </p>
            <p id="favoriteDisplay" class="col-6 ${font} ${textColor}"></p>
        </div>
        `;
        return displayDiv;
    }
    //入力ボタンのDivを作る関数
    static createCalculatorDiv(bgColor, borderColor){
        //番号を入力するcalculator
        let calculatorDiv = document.createElement("div");
        calculatorDiv.classList.add("col-12", "d-flex", "justify-content-center", "ps-3", "py-3", `${bgColor}`, "border", `${borderColor}`, "mt-3");
        let buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("col-11", "d-flex", "flex-wrap");
        calculatorDiv.append(buttonsDiv);

        //数字のボタンを作る
        Page.createNumBtns(buttonsDiv,"btn-light", "border-darkgrey", "font-kaushan", "text-darkgrey");
        //ボタンCを作る
        let btnC = Page.createBtnC("btn-light", "border-darkgrey", "font-kaushan", "text-darkgrey");
        buttonsDiv.append(btnC);
        //ボタンEを作る
        let btnE = Page.createBtnE("btn-light", "border-darkgrey", "font-kaushan", "text-darkgrey");
        buttonsDiv.append(btnE);

        return calculatorDiv;
    }
    //数字のボタンを作る関数
    static createNumBtns(buttonsDiv, btnColor, borderColor, font, textColor){
        for(let i = 0; i <= 9; i++){
            let currBtn = document.createElement("button");
            currBtn.type = "button";
            currBtn.classList.add("btn", `${btnColor}`, "border", `${borderColor}`, "m-2", "btn-width", `${font}`, `${textColor}`);
            currBtn.innerHTML = `${i.toString()}`;
            currBtn.addEventListener("click", function(){
                let idInput = document.getElementById("photoId");
                idInput.value += i.toString();
            });
            buttonsDiv.append(currBtn);
        }
    }
    //ボタンCを作る関数
    static createBtnC(btnColor, borderColor, font, textColor){
        let btnC = document.createElement("button");
        btnC.id = "btnC";
        btnC.type = "button";
        btnC.classList.add("btn", `${btnColor}`, "border", `${borderColor}`, "m-2", "btn-width", `${font}`, `${textColor}`);
        
        btnC.innerHTML = "C";
        btnC.addEventListener("click",function(){
            let idInput = document.getElementById("photoId");
            idInput.value = "";
        });
        return btnC;
    }
    //ボタンEを作る関数
    static createBtnE(btnColor, borderColor, font, textColor){
        let btnE = document.createElement("button");
        btnE.id = "btnE";
        btnE.type = "button";
        btnE.classList.add("btn", `${btnColor}`, "border", `${borderColor}`, "m-2", "btn-width", `${font}`, `${textColor}`);
        
        btnE.innerHTML = "E";
        btnE.addEventListener("click", function(){
            let id = Page.currEnteredId();
            //777が入力されるとランダムのスライドショーが始まる。
            if(id == 777){
                let interval = setInterval(function(){
                    let newId = HelperFunction.randomNum(0, photoList.length-1);
                    Page.updateDisplayInfo(newId);
                    Page.updatePhotoSlider(newId);
                },5000);
                let body = document.getElementsByTagName("body").item(0);
                body.addEventListener("keydown", function(){
                    clearInterval(interval);
                });
            //リストにない番号が入力されるとアラートが表示される。
            }else if(id >= photoList.length){
                alert(`
                Please enter a number from 0 to ${(photoList.length-1).toString()}.
                If you want to play in random mode, please enter 777!!`);
            }else{
                Page.updateDisplayInfo(id);
                Page.updatePhotoSlider(id);
            }
        });
        return btnE;
    }
    //現在、入力されている番号を取得する関数
    static currEnteredId(){
        let idInput = document.getElementById("photoId");
        let id = parseInt(idInput.value);
        return id;
    }
    //idを受け取り、displayに表示される情報を更新する関数
    static updateDisplayInfo(id){
        let currPhoto = photoList[id];

        document.getElementById("photoId").value = id;
        document.getElementById("titleDisplay").innerHTML = currPhoto.title;
        document.getElementById("placeDisplay").innerHTML = currPhoto.place;
        document.getElementById("yearDisplay").innerHTML = currPhoto.year;
        document.getElementById("favoriteDisplay").innerHTML = currPhoto.favoritePart;
    }
    //受け取ったidの写真をスライダーに表示する関数
    static updatePhotoSlider(nextId){
        let main = document.querySelectorAll(".main").item(0);
        let extra = document.querySelectorAll(".extra").item(0);
        console.log(main.innerHTML);
        let currId = main.getAttribute("data-index") === undefined ? 0 : parseInt(main.getAttribute("data-index"));
        let nextPhoto = photoList[nextId];

        extra.innerHTML = main.innerHTML;
        main.innerHTML = "";
        main.innerHTML = `
        <img src="${nextPhoto.url}" class="img-fluid">
        `;
        main.setAttribute("data-index",`${nextId.toString()}`);

        let sliderDiv = document.getElementById("slider");
        if(nextId >= currId){
            sliderDiv.innerHTML = "";
            sliderDiv.append(extra);
            sliderDiv.append(main);
        }else{
            sliderDiv.innerHTML = "";
            sliderDiv.append(main);
            sliderDiv.append(extra);
        }
    }
    static enebleKeyInput(){
        //キーボード入力を可能にする関数
        let body = document.getElementsByTagName("body").item(0);
        body.addEventListener("keydown", function(event){
            let key = event.key;
            let keyNum = parseInt(key);
            let idInput = document.getElementById("photoId");
            if(0 <= keyNum && keyNum <= 9){
                idInput.value += keyNum.toString();   
            }
            if(key == "Enter"){
                let btnE = document.getElementById("btnE");
                btnE.dispatchEvent(new Event("click"));
            }
            if(key == "c"){
                let btnC = document.getElementById("btnC");
                btnC.dispatchEvent(new Event("click"));
            }
            if(key == "Backspace"){
                let idString = idInput.value;
                idInput.value = idString.substring(0, idString.length-1);
            }
        });
    }
}
class HelperFunction{
    static randomNum(min, max){
        return Math.floor(Math.random() * (max - min - 1) + min);        
    }
}
//Webページを作成
Page.createHTML("bgcolor-dark", "font-kaushan", "text-light", "Memories Of My Journey", "Architecture and Landscape", "Which photo do you like?");
//キーボード入力を可能にする
Page.enebleKeyInput();
//jQueryでスクロールをスムーズにする
$('a[href^="#"]').click(function(){
        let speed = 1200;
        let href= $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
         return false;
　　});