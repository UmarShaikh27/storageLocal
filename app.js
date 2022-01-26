const username = document.getElementById("username")
const email = document.getElementById("email")
const passwordinp = document.getElementById("passwordinp")
const phonenumber = document.getElementById("phonenumber")
const postalcode = document.getElementById("postalcode")



const userSignUp = () => {

    userObject = {
        username: username.value,
        email: email.value,
        passwordinp: passwordinp.value,
        phonenumber: phonenumber.value,
        postalcode: postalcode.value,
    }

    const user = JSON.parse(localStorage.getItem("userArray")) || []

    let emailCheckOne = email.value.indexOf("@")
    let emailCheckTwo = email.value.indexOf(".com")
    let userIndexCheck = user.findIndex((value) => {
        return value.email === userObject.email
    })

    // console.log(emailcheck);

    if (username.value.length < 3) {
        alert(`Username should be atleast 3 characters`)
    }
    else if (emailCheckOne == -1 || emailCheckTwo == -1) {
        alert("Invlaid Email")
    }
    else if (passwordinp.value.length < 6) {
        alert("Password should be atleast 6 characters")
    }
    else if (phonenumber.value.length < 11) {
        alert("Phone number is required")
    }
    else if (postalcode.value.length < 5 || postalcode.value.length > 5) {
        alert("Postal code can contain 5 digits only")
    }
    else if(userIndexCheck == -1){


        user.push(userObject)
        localStorage.setItem("userArray", JSON.stringify(user))
        window.location.assign("./login.html")

    }else{
        alert("User Already Exists")
    }





}

const userLogIn = () => {

    const email = document.getElementById("email")
    const passwordinp = document.getElementById("passwordinp")
    const userData = JSON.parse(localStorage.getItem("userArray"))

    const userValidation = userData.find((value) => {
        return value.email === email.value && value.passwordinp === passwordinp.value
    })

    if(userValidation){
        alert("Log In Successful")
        const currentUser = localStorage.setItem("currentUser" , JSON.stringify(userValidation))
    //    console.log(currentUser);
       window.location.assign("./dashboard.html")
       

    }else{
       alert("Invalid user")

    }

}

const dashboardshow = () => {

    const userData = JSON.parse(localStorage.getItem("currentUser"))

    const greetuser = document.getElementById("greetuser")
    const showusername = document.getElementById("showusername")
    const showemail = document.getElementById("showemail")
    const showphonenumber = document.getElementById("showphonenumber")
    const showpostalcode = document.getElementById("showpostalcode")

    const greeting = `Welcome ${userData.username}!`
    greetuser.innerHTML = greeting

    showusername.innerHTML =  userData.username
    showemail.innerHTML = userData.email
    showphonenumber.innerHTML = userData.phonenumber
    showpostalcode.innerHTML = userData.postalcode
    


    // head.innerHTML = userData.username

}

const logOut = () => {
    window.location.assign("./login.html")
    localStorage.removeItem("currentUser")
}


























function showpass(x) {
    var passwordinp = document.getElementById("passwordinp")
    if (passwordinp.type == "text") {
        passwordinp.type = "password"
        x.classList.remove("fa-eye")
        x.classList.add("fa-eye-slash")
    }
    else if (passwordinp.type == "password") {
        passwordinp.type = "text"
        x.classList.remove("fa-eye-slash")
        x.classList.add("fa-eye")
    }
}

