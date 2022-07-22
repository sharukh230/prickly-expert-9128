let form = document.querySelector("#signUpPop")
let signupLS = JSON.parse(localStorage.getItem("signup")) || []
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let obj = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
    }
    if (obj.name === "" && obj.email === "" && obj.password === "") {
        alert("Fields are Empty")


    }
    else {

        signupLS.push(obj)
        console.log(obj)
        localStorage.setItem("signup", JSON.stringify(signupLS))
        alert("SignUp SuccessFull, Please SignIn And continue")
    }
})