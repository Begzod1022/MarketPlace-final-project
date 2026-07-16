const LoginMainStructurePoint = document.querySelector(".LoginMainStructurePoint");

LoginMainStructurePoint.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.querySelector(".EmailInput");
    const passwordInput = document.querySelector(".PasswordInput");
    const PleaseFillInputEmail = document.querySelector(".PleaseFillInputEmail");
    const PleaseFillInputPassword = document.querySelector(".PleaseFillInputPassword");
    
    const email = emailInput ? emailInput.value.trim() : "";
    const password = passwordInput ? passwordInput.value : "";
    
    if (!email.includes("@") || email === "" || !email.includes(".")) {
        if (emailInput) emailInput.style.border = "1px solid red";
        if (PleaseFillInputEmail) PleaseFillInputEmail.style.visibility = "visible";
        return;
    } else {
        if (emailInput) emailInput.style.border = "";
        if (PleaseFillInputEmail) PleaseFillInputEmail.style.visibility = 'hidden';
    }
    
    const hasNumber = /\d/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);

    if (password.length < 8 || !hasNumber || !hasCapitalLetter || password === "") {
        if (passwordInput) passwordInput.style.border = "1px solid red";
        if (PleaseFillInputPassword) PleaseFillInputPassword.style.visibility = "visible";
        if (PleaseFillInputPassword) PleaseFillInputPassword.textContent = 'Password must be at least 8 characters and 1 capital letter'
        return;
    } else {
        if (passwordInput) passwordInput.style.border = "";
        if (PleaseFillInputPassword) PleaseFillInputPassword.style.visibility = 'hidden'
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || []

    const registeredUser = existingUsers.find(user => user.Email.toLowerCase() === email.toLowerCase())

    if (!registeredUser) {
        if (emailInput) emailInput.style.border = "1px solid red"
        if (PleaseFillInputEmail) {
            PleaseFillInputEmail.textContent = "This Email is not registered"
            PleaseFillInputEmail.style.visibility = "visible"
        }
        return
    }

    const savedPassword = registeredUser.Password || registeredUser.password

    if (savedPassword !== password) {
        if (passwordInput) passwordInput.style.border = "1px solid red"
        if (PleaseFillInputPassword) {
            PleaseFillInputPassword.textContent = "Inncorrect password"
            PleaseFillInputPassword.style.visibility = "visible"
        }
        return
    }
    
    console.log("Данные пользователя сохранены:", registeredUser);

    localStorage.setItem("currentUser", JSON.stringify(registeredUser))
    
    if (emailInput) emailInput.value = "";
    if (passwordInput) passwordInput.value = "";

    window.location.href = "/UzumHtml/UzumMarket.html"; 
})