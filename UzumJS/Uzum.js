const productsInRecomendation = [
    {
        imageOfProduct: "/images/mayka belaya.webp",
        name: "Майка Silver белый",
        price: "21 567 UZS",
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