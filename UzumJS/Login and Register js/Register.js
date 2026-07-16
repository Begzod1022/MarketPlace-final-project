const RegisterForm = document.querySelector(".RegisterForm");

RegisterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const UserNameInput = document.querySelector(".UserNameInput");
    const EmailInput = document.querySelector(".EmailInput");
    const PasswordInput = document.querySelector(".PasswordInput");
    const UserNameHelp = document.querySelector(".UserNameHelp");
    const EmailHelp = document.querySelector(".EmailHelp");
    const PasswordHelp = document.querySelector(".PasswordHelp");
    const blankMainSiteLink = document.querySelector(".blankMainSiteLink")

    const UserName = UserNameInput ? UserNameInput.value.trim() : "";
    const Email = EmailInput ? EmailInput.value.trim() : "";
    const Password = PasswordInput ? PasswordInput.value : "";

    const hasCharacterInName = /[A-Z]/

    if (UserName === "" || !hasCharacterInName) {
        if (UserNameInput) UserNameInput.style.border = "1px solid red"
        if (UserNameHelp) UserNameHelp.style.visibility = "visible";
        return
    } else {
        if (UserNameInput) UserNameInput.style.border = ""
        if (UserNameHelp) UserNameHelp.style.visibility = "hidden";
    }

    if (!Email.includes('@') || !Email.includes('.') || Email === "") {
        if (EmailInput) EmailInput.style.border = "1px solid red";
        if (EmailHelp) EmailHelp.style.visibility = "visible";
        return;
    } else {
        if (EmailInput) EmailInput.style.border = "";
        if (EmailHelp) EmailHelp.style.visibility = "hidden";
    }

    const hasNumber = /\d/.test(Password);
    const hasCapitalLetter = /[A-Z]/.test(Password);

    if (Password.length < 8 || !hasNumber || !hasCapitalLetter || Password === "") {
        if (PasswordInput) PasswordInput.style.border = "1px solid red";
        if (PasswordHelp) PasswordHelp.style.visibility = "visible";
        return;
    } else {
        if (PasswordInput) PasswordInput.style.border = "";
        if (PasswordHelp) PasswordHelp.style.visibility = "hidden";
    }

    const NewUserData = {
        Email: Email,
        password: Password
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || []

    const existingEmail = existingUsers.some(user => user.Email.toLowerCase() === Email.toLowerCase())

    if (existingEmail) {
        if (EmailInput) EmailInput.style.border = "1px border solid"
        if (EmailHelp) {
            EmailHelp.textContent = "Эта почта уже существует";
            EmailHelp.style.color = "red"
            EmailHelp.style.visibility = "visible";
        }
        return
    }

    existingUsers.push(NewUserData)

    localStorage.setItem("users", JSON.stringify(existingUsers))

    console.log("Данные нового пользователя сохранены:", NewUserData);

    window.location.href = "/UzumHtml/UzumMarket.html"

    if (UserNameInput) UserNameInput.value = "";
    if (EmailInput) EmailInput.value = "";
    if (PasswordInput) PasswordInput.value = ""
}) 