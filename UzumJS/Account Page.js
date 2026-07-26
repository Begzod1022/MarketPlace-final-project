const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
    window.location.href = "Login and Register html/Login.html";
}

const AccountAvatar = document.querySelector("#AccountAvatar");
const AccountUsername = document.querySelector("#AccountUsername");
const AccountEmail = document.querySelector("#AccountEmail");

AccountUsername.textContent = currentUser.User_Name || currentUser.UserName;
AccountEmail.textContent = currentUser.Email;

const AccountOrdersList = document.querySelector("#AccountOrdersList");
const ordersEmptyState = document.querySelector("#ordersEmptyState");
const orders = currentUser.orders || [];

const statusClassMap = {
    "Доставлен": "delivered",
    "В пути": "in-transit",
    "Отменён": "cancelled"
};

if (orders.length === 0) {
    ordersEmptyState.classList.add("visible");
} else {
    orders.forEach(order => {
        const AccountOrderCard = document.createElement("div");
        AccountOrderCard.classList.add("AccountOrderCard");

        const orderImg = document.createElement("img");
        orderImg.src = order.productImage;
        orderImg.alt = order.productName;

        const AccountOrderInfo = document.createElement("div");
        AccountOrderInfo.classList.add("AccountOrderInfo");

        const orderName = document.createElement("p");
        orderName.textContent = order.productName;

        const orderDate = document.createElement("span");
        orderDate.textContent = order.date;

        AccountOrderInfo.append(orderName, orderDate);

        const orderPrice = document.createElement("span");
        orderPrice.classList.add("AccountOrderPrice");
        orderPrice.textContent = order.price;

        const orderStatus = document.createElement("span");
        orderStatus.classList.add("AccountOrderStatus", statusClassMap[order.status] || "in-transit");
        orderStatus.textContent = order.status;

        AccountOrderCard.append(orderImg, AccountOrderInfo, orderPrice, orderStatus);
        AccountOrdersList.append(AccountOrderCard);
    });
}


const AccountRatingsList = document.querySelector("#AccountRatingsList");
const ratingsEmptyState = document.querySelector("#ratingsEmptyState");
const ratings = currentUser.ratings || [];

if (ratings.length === 0) {
    ratingsEmptyState.classList.add("visible");
} else {
    ratings.forEach(rating => {
        const AccountRatingCard = document.createElement("div");
        AccountRatingCard.classList.add("AccountRatingCard");

        const ratingName = document.createElement("p");
        ratingName.textContent = rating.productName;

        const ratingStars = document.createElement("span");
        ratingStars.classList.add("AccountRatingStars");
        ratingStars.textContent = "★".repeat(rating.rating) + "☆".repeat(5 - rating.rating);

        const ratingComment = document.createElement("p");
        ratingComment.classList.add("AccountRatingComment");
        ratingComment.textContent = rating.comment;

        const ratingDate = document.createElement("span");
        ratingDate.classList.add("AccountRatingDate");
        ratingDate.textContent = rating.date;

        AccountRatingCard.append(ratingName, ratingStars, ratingComment, ratingDate);
        AccountRatingsList.append(AccountRatingCard);
    });
}


const AccountNavButtons = document.querySelectorAll(".AccountNavButton");
const AccountSections = document.querySelectorAll(".AccountSection");

AccountNavButtons.forEach(button => {
    button.addEventListener("click", () => {
        AccountNavButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const targetTab = button.dataset.tab;

        AccountSections.forEach(section => {
            section.classList.remove("active");
        });

        document.querySelector(`#${targetTab}Section`).classList.add("active");
    });
});


const AccountLogoutButton = document.querySelector("#AccountLogoutButton");

AccountLogoutButton.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "Login and Register html/Login.html";
});

// Avatar upload

const avatarInput = document.querySelector("#avatarInput");

avatarInput.addEventListener("change", () => {
    const file = avatarInput.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
        alert("Пожалуйста, выберите файл изображения");
        return;
    }

    if (file.size > 3 * 1024 * 1024) {
        alert("Файл слишком большой. Выберите изображение до 3 МБ");
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {
        const avatarDataUrl = reader.result;

        AccountAvatar.innerHTML = "";
        const avatarImg = document.createElement("img");
        avatarImg.src = avatarDataUrl;
        AccountAvatar.append(avatarImg);

        currentUser.avatar = avatarDataUrl;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = users.map(user =>
            user.Email.toLowerCase() === currentUser.Email.toLowerCase()
                ? { ...user, avatar: avatarDataUrl }
                : user
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    };

    reader.readAsDataURL(file);
});