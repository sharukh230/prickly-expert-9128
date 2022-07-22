let form1= document.querySelector("#signInPop")
let signupLS = JSON.parse(localStorage.getItem("signup")) || []
form.addEventListener("submit", function () {
    event.preventDefault();
    if (signupLS === 0) {
        alert("Complete the SignUp Process")
        return
    }
    let obj = {
        email: form1.email.value,
        password: form1.password.value,
    }
    let isSignedIn = false;
    signupLS1.forEach(function (ele) {
        if (ele.email === obj.email && ele.password === obj.password) {
            isSignedIn = true;
            localStorage.setItem("signin", JSON.stringify(ele));
            alert("signIn SuccessFull");
        }
    })
    if (isSignedIn === false) {
        alert("User Doesnot Exist")
    }

})