let productsInRecomendation = [
    {
        imageOfProduct: "/images/mayka belaya.webp",
        name: "Майка Silver белый",
        price: "23 456 UZS",
        oldPrice: "567 988 UZS",
        discount: "-96%",
        rating: "4.5",
        imageOfRatingStar: "/images/Rating Item.png",
        comments: "134 отзыва",
        imageOfComments: "/images/Comment Item.png",
    },
    {
        imageOfProduct: "/images/xiaomi buds 8 lite.webp",
        name: "Xiaomi Buds 8 Lite",
        price: "301 039 UZS",
        oldPrice: "1 239 302 UZS",
        discount: "-78%",
        rating: "4.8",
        imageOfRatingStar: "/images/Rating Item.png",
        comments: "670 отзывов",
        imageOfComments: "/images/Comment Item.png",
    },
    {
        imageOfProduct: "/images/Кроссовки NIKE.webp",
        name: "Кроссовки NIKE",
        price: "504 634 UZS",
        oldPrice: "2 334 890 UZS",
        discount: "-72%",
        rating: "4.8",
        imageOfRatingStar: "/images/Rating Item.png",
        comments: "19 827 отзывов",
        imageOfComments: "/images/Comment Item.png",
    },
    {
        imageOfProduct: "/images/Смартфон Apple iPhone 14 Pro Max 256GB.webp",
        name: "Смартфон Apple iPhone 14 Pro Max 256GB",
        price: "18 239 302 UZS",
        oldPrice: "25 334 890 UZS",
        discount: "-45%",
        rating: "4.8",
        imageOfRatingStar: "/images/Rating Item.png",
        comments: "1 324 отзывов",
        imageOfComments: "/images/Comment Item.png",
    },
    {
        imageOfProduct: "/images/Ноутбук ASUS ROG Zephyrus G14.webp",
        name: "Ноутбук ASUS ROG Zephyrus G14",
        price: "19 567 988 UZS",
        oldPrice: "28 567 988 UZS",
        discount: "-60%",
        rating: "4.5",
        imageOfRatingStar: "/images/Rating Item.png",
        comments: "198 отзывов",
        imageOfComments: "/images/Comment Item.png",
    }
]

const recomendationItemsDIV = document.querySelector(".recomendationItemsDIV");

productsInRecomendation.forEach(product => {
    const recomendationItemMain = document.createElement('div')
    recomendationItemMain.classList.add('recomendationItemMain')
    const recomendationItemIMGDiv = document.createElement('div')
    recomendationItemIMGDiv.classList.add('recomendationItemIMG')
    const recomendationItemInfo = document.createElement('div')
    recomendationItemInfo.classList.add('recomendationItemInfo')
    const recomendationItemName = document.createElement('div')
    recomendationItemName.classList.add('recomendationItemName')
    const recomendationItemPriceDIV = document.createElement('div')
    recomendationItemPriceDIV.classList.add('recomendationItemPriceDIV')
    const recomendationItemRatingAndComments = document.createElement('div')
    recomendationItemRatingAndComments.classList.add('recomendationItemRatingAndComments')
    
    const recomendationItemIMG = document.createElement('img')
    recomendationItemIMG.src = product.imageOfProduct
    recomendationItemIMGDiv.append(recomendationItemIMG)

    const recomendationItemNameText = document.createElement('p')
    recomendationItemNameText.textContent = product.name
    recomendationItemName.append(recomendationItemNameText)

    const recomendationItemPriceCurrent = document.createElement('span')
    recomendationItemPriceCurrent.classList.add('recomendationItemPriceCurrent')
    recomendationItemPriceCurrent.textContent = product.price
    const recomendationItemPriceOld = document.createElement('span')
    recomendationItemPriceOld.classList.add('recomendationItemPriceOld')
    recomendationItemPriceOld.textContent = product.oldPrice
    const recomendationItemDiscount = document.createElement('span')
    recomendationItemDiscount.classList.add('recomendationItemDiscount')
    recomendationItemDiscount.textContent = product.discount
    recomendationItemPriceDIV.append(recomendationItemPriceCurrent, recomendationItemPriceOld, recomendationItemDiscount)

    const recomendationItemRating = document.createElement('div')
    recomendationItemRating.classList.add('recomendationItemRating')
    const recomendationItemRatingIMG = document.createElement('img')
    recomendationItemRatingIMG.src = product.imageOfRatingStar
    const recomendationItemRatingText = document.createElement('span')
    recomendationItemRatingText.textContent = product.rating
    recomendationItemRating.append(recomendationItemRatingIMG, recomendationItemRatingText)
    const recomendationItemComments = document.createElement('div')
    recomendationItemComments.classList.add('recomendationItemComments')
    const recomendationItemCommentsIMG = document.createElement('img')
    recomendationItemCommentsIMG.src = product.imageOfComments
    const recomendationItemCommentsText = document.createElement('span')
    recomendationItemCommentsText.textContent = product.comments
    recomendationItemComments.append(recomendationItemCommentsIMG, recomendationItemCommentsText)
    recomendationItemRatingAndComments.append(recomendationItemRating, recomendationItemComments)
    
    
    recomendationItemInfo.append(recomendationItemPriceDIV, recomendationItemName, recomendationItemRatingAndComments)
    recomendationItemMain.append(recomendationItemIMGDiv, recomendationItemInfo)
    recomendationItemsDIV.append(recomendationItemMain)
})

// Language Change and Selection 

const languageSelection = document.querySelector(".languageSelection");
const langSelected = document.querySelector(".langSelected");
const lang_list = document.querySelector(".lang_list");

languageSelection.addEventListener("click", (event) => {
    lang_list.classList.toggle('open')

    stopPropagation(event);
})

window.addEventListener('click', (event) => {
    if (!languageSelection.contains(event.target)) {
        lang_list.classList.remove('open')
    }
})

const disactive = document.querySelectorAll(".disactive");

disactive.forEach(disactives => {
    disactives.addEventListener('click', (event) => {
        disactive.forEach(clearDisactive => {
            if (clearDisactive.classList.contains('active')) {
                clearDisactive.classList.replace('active', 'disactive')
            }
        })

        disactives.classList.replace('disactive', 'active')
        langSelected.innerHTML = disactives.innerHTML
        lang_list.classList.remove('open')

        event.stopPropagation();
    })
})

// banner for marketplace main view

const rightArrowToChangeBanner = document.querySelector(".rightArrowToChangeBanner");
const leftArrowToChangeBanner = document.querySelector(".leftArrowToChangeBanner");
const bannerAfterheader = document.querySelector('.bannerAfterheader')

const bannerTemplates = [
    "/images/banners/banner for marketplace 1.jpg",
    "/images/banners/banner for marketplace 2.jpg",
    "/images/banners/banner for marketplace 3.jpg"
]

let currentIndexForBannerImage = 0

function updateBannerImg() {
    bannerAfterheader.style.backgroundImage = `url('${bannerTemplates[currentIndexForBannerImage]}')`
}

rightArrowToChangeBanner.addEventListener('click', () => {
    currentIndexForBannerImage++;

    if (currentIndexForBannerImage >= bannerTemplates.length) {
        currentIndexForBannerImage = 0
    }

    updateBannerImg()
})

leftArrowToChangeBanner.addEventListener('click', () => {
    currentIndexForBannerImage--;

    if (currentIndexForBannerImage < 0) {
        currentIndexForBannerImage = bannerTemplates.length -1;
    }

    updateBannerImg()
})

// chooseCityModalWindow open //

const chooseCityModalWindowBG = document.querySelector(".chooseCityModalWindowBG");
const chooseCityModalWindow = document.querySelector(".chooseCityModalWindow");
const changeCity = document.querySelector(".changeCity");
const chooseCityModalWindowCloseButtonX = document.querySelector(".chooseCityModalWindowCloseButtonX");

changeCity.addEventListener('click', (event) => {
    chooseCityModalWindow.classList.toggle('open')
    chooseCityModalWindowBG.classList.toggle('open')

    event.stopPropagation();
})

chooseCityModalWindowCloseButtonX.addEventListener('click', () => {
    chooseCityModalWindow.classList.remove('open')
    chooseCityModalWindowBG.classList.remove('open')
})

// search for city input modal window

let citiesToPickUp = [
    Uzbekiatan = {
        Toshkent, Andijon, Nukus, Samarkand, Xiva, Buxoro, Navoiy, Qashqadaryo, Surxandaryo
    }, 

    Russian = {
        
    }
]

const searchForCityInputModal = document.querySelector('.searchForCityInputModal')
const cityNotAviableWindowInputError = document.querySelector('.cityNotAviableWindowInputError')