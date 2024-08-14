
let arrayProduct = [
    {id: 1 , title : "روتختی ترک طرح پتینه قهوه ای سوخته",src:"./image/روتختی ترک 1.jpeg", sellPrice : 2000000 , price: 2280000, count: 1  },
    {id: 2 , title : "روتختی ترک طرح پتینه سبز",src:"./image/روتختی ترک 2.jpeg", sellPrice : 3000000 , price: 3300000, count: 1  },
    {id: 3 , title : "روتختی ترک طرح پتینه جیگری",src:"./image/روتختی ترک 3.jpeg", sellPrice : 2500000 , price: 2700000 , count: 1 },
    {id: 4 , title : "روتختی ترک طرح پتینه کرم",src:"./image/روتختی ترک 4.jpeg", sellPrice : 2200000 , price: 2500000, count: 1  },
    {id: 5 , title : "روتختی ترک طرح پتینه مشکی",src:"./image/روتختی ترک 5.jpeg", sellPrice : 2700000 , price: 3000000 , count: 1  },
    
]
let arrayProductPillow = [
    {id: 6 , title:"بالشت طب مدل چیکا پلاس 1400 گرم",src: "./image/بالشت 1.jpeg",sellPrice: 170000 ,price: 200000 , count: 1 },
    {id: 7 , title:"بالشت طب مدل چیکا پلاس 1200 گرم",src: "./image/بالشت 2.jpeg",sellPrice: 140000 ,price: 150000 , count: 1 },
    {id: 8 , title:"بالشت طب مدل چیکا پلاس 1300 گرم",src: "./image/بالشت 3.jpeg",sellPrice: 165000 ,price: 170000 , count: 1 },
    {id: 9 , title:"بالشت طب مدل چیکا پلاس 1300 گرم",src: "./image/بالشت 4.jpeg",sellPrice: 170000 ,price: 180000 , count: 1 },
    {id: 10 , title:"بالشت طب مدل چیکا پلاس 1300 گرم",src: "./image/بالشت 5.jpeg",sellPrice: 180000 ,price: 200000 , count: 1 },
]

let arrayProductCounterpene = [
    {id: 11 , title:"روتختی طب مدل چیکا پلاس مشکی گرم",src: "./image/روتختی 1.jpeg",sellPrice: 1500000 ,price: 1700000 , count: 1 },
    {id: 12 , title:"روتختی طب مدل چیکا پلاس سفید گرم",src: "./image/روتختی 2.jpeg",sellPrice: 2000000 ,price: 2200000 , count: 1 },
    {id: 13 , title:"روتختی طب مدل چیکا پلاس سفید گرم",src: "./image/روتختی 3.jpeg",sellPrice: 1700000 ,price: 1800000 , count: 1 },
    {id: 14 , title:"روتختی طب مدل چیکا پلاس سفید گرم",src: "./image/رو تختی 4.jpeg",sellPrice: 2200000 ,price: 2400000 , count: 1 },
    {id: 15 , title:"روتختی طب مدل چیکا پلاس سفید گرم",src: "./image/روتختی 5.jpeg",sellPrice: 1800000 ,price: 2000000 , count: 1 },
]

let arrayProducTmattress = [
    {id: 16 , title:"تشک طب مدل چیکا پلاس 2000 گرم",src: "./image/تشک 1.jpeg",sellPrice: 700000 ,price: 850000 , count: 1 },
    {id: 17 , title:"تشک طب مدل چیکا پلاس 2000 گرم",src: "./image/تشک 2.jpeg",sellPrice: 1000000 ,price: 1200000 , count: 1 },
    {id: 18 , title:"تشک طب مدل چیکا پلاس 2000 گرم",src: "./image/تشک 3.jpeg",sellPrice: 850000 ,price: 1000000 , count: 1 },
    {id: 19 , title:"تشک طب مدل چیکا پلاس 2000 گرم",src: "./image/تشک 4.jpeg",sellPrice: 1200000 ,price: 1500000 , count: 1 },
    {id: 20 , title:"تشک طب مدل چیکا پلاس 2000 گرم",src: "./image/تشک 5.jpeg",sellPrice: 1500000 ,price: 1750000 , count: 1 },
]

let arrayMenu = [
    {id : 1 , optionone:"روتختی چهار فصل",optiontow:"روتختی ترک",optionthree:"روتختی بدون طرح"},
    {id : 2 , optionone:"روتختی کاوری پنبه ای ترک",optiontow:"روتختی کاوری بدون طرح",optionthree:"روتختی کاوری هتلی"},
    {id : 3 , optionone:"تشک طبی فنری",optiontow:"تشک مهمان",optionthree:"تشک سنتی"},
    {id : 4 , optionone:" روتختی مدرن",optiontow:"روتختی کلاسیک",optionthree:"روتختی برند"},
    {id : 5 , optionone:"لحاف چهار فصل",optiontow:"لحاف هتلی",optionthree:"لحاف پنبه ای"},
    {id : 6 , optionone:"بالشت الیاف میکروژل",optiontow:"بالشت طبی",optionthree:"بالشت هتلی"},
    {id : 7 , optionone:"پارچه پنبه ای",optiontow:"پارچه نوزادی",optionthree:"پارچه میکروفایبر"},
    {id : 8 , optionone:"حوله عروس داماد",optiontow:"حوله تنپوش زنانه",optionthree:"حوله تنپوش مردانه"},
]

let boxChoose = document.querySelector (".box-choose")
let pillowChoose = document.querySelector(".shop-pillow-product-choose")
let counterpeneChoose = document.querySelector(".shop-counterpene-product-choose")
let mattressChoose = document.querySelector(".shop-mattress-product-choose")
let productBasket = document.querySelector(".div-product")
let somProductBasket = document.querySelector ('.price-som-all')
let menuSelect = document.querySelector(".menu")
let listMenu = document.querySelector('.list-menu-div')
let linkMenu = document.querySelector('.home-menu-one')
let lis
let svgLogo = '<svg xmlns="http://www.w3.org/2000/svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-pillow-basket"><path stroke-linecap="round" stroke-linejoin=" class= "path-svg-logo"round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>'
let svgStarLogo = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg-pillow"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg-pillow"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg-pillow"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg-pillow"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star-svg-pillow"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /></svg>'



arrayProduct.forEach(function(event){
    let containDivProduct = document.createElement("div")
    containDivProduct.className = "box-product-choose-one"
    
    let titleProduct = document.createElement("h2")
    titleProduct.className = "title-product-one"
    
    let linkTitleProduct = document.createElement("a")
    linkTitleProduct.className = "link-product-one"
    linkTitleProduct.href = "#"
    linkTitleProduct.innerHTML = event.title
    
    titleProduct.appendChild(linkTitleProduct)
    
    let divImageBoxProduct = document.createElement("div")
    divImageBoxProduct.className = "box-image-product"
    
    let linkImageBoxProduct = document.createElement("a")
    linkImageBoxProduct.className = "link-image-product-one"
    
    divImageBoxProduct.appendChild(linkImageBoxProduct)
    
    let imageProduct = document.createElement("img")
    imageProduct.className = "image-product-one"
    imageProduct.src = event.src
    
    linkImageBoxProduct.appendChild(imageProduct)
    
    let divPriceproduct = document.createElement("div")
    divPriceproduct.className = "price-product-one"
    
    let spanPriceSellPoduct = document.createElement("span")
    spanPriceSellPoduct.className = "price-sell-product"
    spanPriceSellPoduct.innerHTML = event.price

    
    
    let realPriceProduct = document.createElement("div")
    realPriceProduct.className = "sell-price-div"
    
    let spanRealPriceProduct = document.createElement("span")
    spanRealPriceProduct.className = "price-product"
    
    let bSpanRealPriceProduct = document.createElement("b")
    bSpanRealPriceProduct.innerHTML = event.sellPrice

    
    spanRealPriceProduct.appendChild(bSpanRealPriceProduct)
    
    let strongRealPriceProduct = document.createElement("strong")
    strongRealPriceProduct.className = "name-price-bold"
    strongRealPriceProduct.innerHTML = "تومان"
    
    realPriceProduct.append(spanRealPriceProduct , strongRealPriceProduct)
    
    divPriceproduct.append(spanPriceSellPoduct , realPriceProduct)
    
    let divLogoBasketPRoduct = document.createElement("div")
    divLogoBasketPRoduct.className = "logo-basket-pillow"
    
    let linkBasketProduct = document.createElement("a")
    linkBasketProduct.className = "basket-pillow"
    linkBasketProduct.href = "#basket"
    linkBasketProduct.src = event.src
    console.log(event.src);
    linkBasketProduct.addEventListener("click", function(){
        clickProductFunc(event.id)
    })

    linkBasketProduct.insertAdjacentHTML("beforeend",svgLogo)
    
    let divStarBasketProduct = document.createElement("div")
    divStarBasketProduct.className = "star-logo-pillow-footer"
    divStarBasketProduct.insertAdjacentHTML("beforeend",svgStarLogo)


    divLogoBasketPRoduct.append(linkBasketProduct , divStarBasketProduct)
    
    containDivProduct.append(titleProduct , divImageBoxProduct , divPriceproduct , divLogoBasketPRoduct)
    
    boxChoose.append(containDivProduct)

})
 
arrayProductPillow.forEach(function(event){
    
    let divPillwoShopProduct = document.createElement("div")
    divPillwoShopProduct.className ="div-pillow-shop-product"
    //div 1
    let divImageProduct = document.createElement("div")
    divImageProduct.className = "div-image"

    let imageProduct = document.createElement("img")
    imageProduct.className = "image-pillow"
    imageProduct.src = event.src

    divImageProduct.appendChild(imageProduct)
    //div 2
    let divPriceProduct = document.createElement("div")
    divPriceProduct.className ="price-product-pillow"

    let priceproduct = document.createElement("div")
    priceproduct.className = "price-pillow"

    let spanPricePRoduct =document.createElement("span")
    spanPricePRoduct.className = "price-sell-product-pillow"
    spanPricePRoduct.innerHTML = event.price

    priceproduct.appendChild(spanPricePRoduct)

    let divSellPrice = document.createElement("div")
    divSellPrice.className = "sell-price-div-pillow"

    let spansellPriceProduct = document.createElement("span")
    spansellPriceProduct.className = "price-product-pillow-new"
    
    let bSpansellPriceProduct = document.createElement("b")
    bSpansellPriceProduct.innerHTML = event.sellPrice
    
    spansellPriceProduct.appendChild(bSpansellPriceProduct)
    
    let strongNameSpan = document.createElement("strong")
    strongNameSpan.className = "name-price-bold-pillow"
    strongNameSpan.innerHTML = "تومان"

    divSellPrice.append(spansellPriceProduct, strongNameSpan)

    divPriceProduct.append(priceproduct , divSellPrice)
    //div 3 
    let divPragrafProductPillow = document.createElement("div")
    divPragrafProductPillow.className = "p-product-pillow"

    let linkProductPillow = document.createElement("a")
    linkProductPillow.className = "a-product-pillow"
    linkProductPillow.href = "#"
    linkProductPillow.innerHTML = event.title
    divPragrafProductPillow.appendChild(linkProductPillow)

    //div 4 
    let divLogoBasketPillwo = document.createElement("div")
    divLogoBasketPillwo.className = "logo-basket-pillow"
    
    let linkLogoBasketPillow = document.createElement("a")
    linkLogoBasketPillow.className = "basket-pillow"
    linkLogoBasketPillow.href = "#basket"
    linkLogoBasketPillow.addEventListener("click", function(){
        clicktwoProductFunc(event.id)
    })

    linkLogoBasketPillow.insertAdjacentHTML("beforeend",svgLogo)

    let divStarLogoPillow = document.createElement("div")
    divStarLogoPillow.className = "star-logo-pillow-footer"
    divStarLogoPillow.insertAdjacentHTML("beforeend",svgStarLogo)

    divLogoBasketPillwo.append(linkLogoBasketPillow ,divStarLogoPillow)

    divPillwoShopProduct.append(divImageProduct, divPriceProduct , divPragrafProductPillow, divLogoBasketPillwo)

    pillowChoose.append(divPillwoShopProduct)
})

arrayProductCounterpene.forEach(function(event){
    
    let divPillwoShopProduct = document.createElement("div")
    divPillwoShopProduct.className ="div-counterpene-shop-product"
    //div 1
    let divImageProduct = document.createElement("div")
    divImageProduct.className = "div-image"

    let imageProduct = document.createElement("img")
    imageProduct.className = "image-pillow"
    imageProduct.src = event.src

    divImageProduct.appendChild(imageProduct)
    //div 2
    let divPriceProduct = document.createElement("div")
    divPriceProduct.className ="price-product-pillow"

    let priceproduct = document.createElement("div")
    priceproduct.className = "price-pillow"

    let spanPricePRoduct =document.createElement("span")
    spanPricePRoduct.className = "price-sell-product-pillow"
    spanPricePRoduct.innerHTML = event.price

    priceproduct.appendChild(spanPricePRoduct)

    let divSellPrice = document.createElement("div")
    divSellPrice.className = "sell-price-div-pillow"

    let spansellPriceProduct = document.createElement("span")
    spansellPriceProduct.className = "price-product-pillow-new"
    
    let bSpansellPriceProduct = document.createElement("b")
    bSpansellPriceProduct.innerHTML = event.sellPrice
    
    spansellPriceProduct.appendChild(bSpansellPriceProduct)
    
    let strongNameSpan = document.createElement("strong")
    strongNameSpan.className = "name-price-bold-pillow"
    strongNameSpan.innerHTML = "تومان"

    divSellPrice.append(spansellPriceProduct, strongNameSpan)

    divPriceProduct.append(priceproduct , divSellPrice)
    //div 3 
    let divPragrafProductPillow = document.createElement("div")
    divPragrafProductPillow.className = "p-product-pillow"

    let linkProductPillow = document.createElement("a")
    linkProductPillow.className = "a-product-pillow"
    linkProductPillow.href = "#"
    linkProductPillow.innerHTML = event.title
    divPragrafProductPillow.appendChild(linkProductPillow)

    //div 4 
    let divLogoBasketPillwo = document.createElement("div")
    divLogoBasketPillwo.className = "logo-basket-pillow"
    
    let linkLogoBasketPillow = document.createElement("a")
    linkLogoBasketPillow.className = "basket-pillow"
    linkLogoBasketPillow.href = "#basket"
    linkLogoBasketPillow.addEventListener("click",function(){
        clickCounterpeneProductFunc(event.id)
    })

    linkLogoBasketPillow.insertAdjacentHTML("beforeend",svgLogo)

    let divStarLogoPillow = document.createElement("div")
    divStarLogoPillow.className = "star-logo-pillow-footer"
    divStarLogoPillow.insertAdjacentHTML("beforeend",svgStarLogo)

    divLogoBasketPillwo.append(linkLogoBasketPillow ,divStarLogoPillow)

    divPillwoShopProduct.append(divImageProduct, divPriceProduct , divPragrafProductPillow, divLogoBasketPillwo)

    counterpeneChoose.append(divPillwoShopProduct)
})

arrayProducTmattress.forEach(function(event){
    
    let divPillwoShopProduct = document.createElement("div")
    divPillwoShopProduct.className ="div-mattress-shop-product"
    //div 1
    let divImageProduct = document.createElement("div")
    divImageProduct.className = "div-image"

    let imageProduct = document.createElement("img")
    imageProduct.className = "image-pillow"
    imageProduct.src = event.src

    divImageProduct.appendChild(imageProduct)
    //div 2
    let divPriceProduct = document.createElement("div")
    divPriceProduct.className ="price-product-pillow"

    let priceproduct = document.createElement("div")
    priceproduct.className = "price-pillow"

    let spanPricePRoduct =document.createElement("span")
    spanPricePRoduct.className = "price-sell-product-pillow"
    spanPricePRoduct.innerHTML = event.price

    priceproduct.appendChild(spanPricePRoduct)

    let divSellPrice = document.createElement("div")
    divSellPrice.className = "sell-price-div-pillow"

    let spansellPriceProduct = document.createElement("span")
    spansellPriceProduct.className = "price-product-pillow-new"
    
    let bSpansellPriceProduct = document.createElement("b")
    bSpansellPriceProduct.innerHTML = event.sellPrice
    
    spansellPriceProduct.appendChild(bSpansellPriceProduct)
    
    let strongNameSpan = document.createElement("strong")
    strongNameSpan.className = "name-price-bold-pillow"
    strongNameSpan.innerHTML = "تومان"

    divSellPrice.append(spansellPriceProduct, strongNameSpan)

    divPriceProduct.append(priceproduct , divSellPrice)
    //div 3 
    let divPragrafProductPillow = document.createElement("div")
    divPragrafProductPillow.className = "p-product-pillow"

    let linkProductPillow = document.createElement("a")
    linkProductPillow.className = "a-product-pillow"
    linkProductPillow.href = "#"
    linkProductPillow.innerHTML = event.title
    divPragrafProductPillow.appendChild(linkProductPillow)

    //div 4 
    let divLogoBasketPillwo = document.createElement("div")
    divLogoBasketPillwo.className = "logo-basket-pillow"
    
    let linkLogoBasketPillow = document.createElement("a")
    linkLogoBasketPillow.className = "basket-pillow"
    linkLogoBasketPillow.href = "#basket"
    linkLogoBasketPillow.addEventListener("click",function(){
        clickTmattressProductFunc(event.id)
    })

    linkLogoBasketPillow.insertAdjacentHTML("beforeend",svgLogo)

    let divStarLogoPillow = document.createElement("div")
    divStarLogoPillow.className = "star-logo-pillow-footer"
    divStarLogoPillow.insertAdjacentHTML("beforeend",svgStarLogo)

    divLogoBasketPillwo.append(linkLogoBasketPillow ,divStarLogoPillow)

    divPillwoShopProduct.append(divImageProduct, divPriceProduct , divPragrafProductPillow, divLogoBasketPillwo)

    mattressChoose.append(divPillwoShopProduct)
})

let basketArray = []
let somProductArray = 0

function clickProductFunc(eventid) {
    let findObjectProduct = arrayProduct.find(function(product){
        return product.id === eventid
    })
    basketArray.push(findObjectProduct)

    addProductBasketSugestion(basketArray)
    calctProductBasket(basketArray)
}

function clicktwoProductFunc(eventid) {
    let findObjectProduct = arrayProductPillow.find(function(product){
        return product.id === eventid
    })
    basketArray.push(findObjectProduct)

    addProductBasketSugestion(basketArray)
    calctProductBasket(basketArray)

}

function clickCounterpeneProductFunc(eventid) {
    let findObjectProduct = arrayProductCounterpene.find(function(product){
        return product.id === eventid
    })
    basketArray.push(findObjectProduct)

    addProductBasketSugestion(basketArray)
    calctProductBasket(basketArray)

}

function clickTmattressProductFunc(eventid) {
    let findObjectProduct = arrayProducTmattress.find(function(product){
        return product.id === eventid
    })
    basketArray.push(findObjectProduct)

    addProductBasketSugestion(basketArray)
    calctProductBasket(basketArray)

}

function addProductBasketSugestion(product){
    productBasket.innerHTML = ''
    product.forEach(function(event){

let newProductBasket = document.createElement("div")
newProductBasket.className = "new-div"

let divImageNameProduct = document.createElement("div")
divImageNameProduct.className = "name-image-product"

let divImage = document.createElement("div")
divImage.className = "image-div-size"

let imageProduct = document.createElement("img")
imageProduct.className = "image-product-basket-box"
imageProduct.src = event.src

divImage.append(imageProduct)

let pragrafProduct = document.createElement("p")
pragrafProduct.className = "name-product-basket-box"
pragrafProduct.innerHTML = event.title

divImageNameProduct.append(divImage , pragrafProduct)
//div 2
let divPrice = document.createElement("div")
divPrice.className = "price-basket-box"

let spanPrice = document.createElement("span")
spanPrice.className = "price-product-basket-box"
spanPrice.innerHTML = event.sellPrice

let strongPrice = document.createElement("strong")
strongPrice.className = "name-price-product-basket-box"
strongPrice.innerHTML = "تومان"

divPrice.append(spanPrice , strongPrice)
//div 3 
let countproduct = document.createElement("div")
countproduct.className = "count-product-basket-box"

let inputCountProduct = document.createElement("div")
inputCountProduct.className = "input-count-basket"

let inputcount = document.createElement("input")
inputcount.className = "input-count"
inputcount.value = event.count
inputcount.setAttribute('type','number')

inputcount.addEventListener('change',function(){
    updateProductCount(event.id , inputcount.value)

})

inputCountProduct.append(inputcount)

let divRemovecountProduct = document.createElement("div")
divRemovecountProduct.className = "remove-count-basket"

let btnRemove = document.createElement("button")
btnRemove.className = "remove-click-count"
btnRemove.innerHTML = "حذف"
btnRemove.addEventListener('click',function(){
    clickRemoveProduct(event.id)
})

divRemovecountProduct.append(btnRemove)
countproduct.append(inputCountProduct , divRemovecountProduct)
//div 3
// let divSomPriceProduct = document.createElement("div")
// divSomPriceProduct.className = "som-price-product"

// let spanSomPriceProduct = document.createElement("span")
// spanSomPriceProduct.className = "som-price-product-basket-box"
// spanSomPriceProduct.innerHTML = "0"

// divSomPriceProduct.append(spanSomPriceProduct)

newProductBasket.append(divImageNameProduct , divPrice , countproduct)

productBasket.append(newProductBasket)


    })
}


function clickRemoveProduct(eventid){
    basketArray = basketArray.filter(function(product){
        return product.id !== eventid
    })
    
    addProductBasketSugestion(basketArray)
    
}


function calctProductBasket (userbasketArray) {
    let somCountProduct = 0
    userbasketArray.forEach(function(product){
        somCountProduct += product.count * product.sellPrice

    })

    somProductBasket.innerHTML = somCountProduct
}

function calctProductBasketOne (userbasketArray) {
    somProductBasket.innerHTML = '0'
    let somCountProduct = 0
    userbasketArray.forEach(function(product){
        somCountProduct += product.count * product.sellPrice

    })

    somProductBasket.innerHTML = somCountProduct
}

function updateProductCount (productid , newCount) {
    arrayProduct.forEach(function(product){
        if (product.id === productid) {
            product.count = newCount
        }
    })
    
    calctProductBasket(basketArray)
    
}
function updateProductCount (productid , newCount) {
    arrayProductPillow.forEach(function(product){
        if (product.id === productid) {
            product.count = newCount
        }
    })
    
    calctProductBasket(basketArray)
    
}

function updateProductCount (productid , newCount) {
    arrayProductCounterpene.forEach(function(product){
        console.log(product);
        if (product.id === productid) {
            product.count = newCount
        }
        console.log(newCount);

    })
    
    calctProductBasketOne(basketArray)
    
}

function updateProductCount (productid , newCount) {
    arrayProducTmattress.forEach(function(product){
        if (product.id === productid) {
            product.count = newCount
        }
        console.log(newCount);
    })
    
    calctProductBasket(basketArray)
    
}






// menuSelect.insertAdjacentHTML("afterend", '<div class="dropdown"><a href="#" class="dropbtn">منوی اصلی</a><div class="dropdown-content"><a href="#">گزینه ۱</a><a href="#">گزینه ۲</a><a href="#">گزینه ۳</a></div></div>')




// let menuList = arrayMenu.forEach(function(event){
//     let linkMenuListOne = document.createElement("a")
//     linkMenuListOne.classList.add ("list-menu-link")
//     linkMenuListOne.innerHTML = event.optionone

//     let linkMenuListTwo = document.createElement("a")
//     linkMenuListTwo.classList.add ("list-menu-link")
//     linkMenuListTwo.innerHTML = event.optiontow

//     let linkMenuListThree = document.createElement("a")
//     linkMenuListThree.classList.add ("list-menu-link")
//     linkMenuListThree.innerHTML = event.optionthree

//     linkMenu.append(linkMenuListOne , linkMenuListTwo , linkMenuListThree)

// })




// linkMenu.addEventListener('click', function() {
//     menuList.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
// });

// window.addEventListener('click', function(event) {
//     if (!event.target.matches('.home-menu-one')) {
//         menuList.forEach(function(dropdown) {
//             if (menuList.style.display === 'block') {
//                 menuList.style.display = 'none';
//             }
//         });
//     }
// });

