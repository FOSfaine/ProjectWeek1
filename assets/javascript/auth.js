$(document).ready(() => {

    // Initialize Firebase
    const db = firebase.database();
    const auth = firebase.auth()


    console.log('ready')
    $("#submitNew").on('click', () => {
        event.preventDefault();
        var userEmail = $("#emailNew").val().trim()
        var userPass = $("#passNew").val().trim()

        // Passwork check and make sure the email is not already in our system
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(cred => {

            console.log(cred.user)
            $("#emailNew").val("")
            $("#passNew").val("")
        })


        // if (user) {
        //   user.updateEmail(userEmail).then(function () {
        //     // Update successful.
        //   }).catch(function (error) {
        //     console.log("nope nope nope")
        //   });

        //   user.updatePassword(userPass).then(function () {
        //     // Update successful.
        //   }).catch(function (error) {
        //     console.log("naaa")
        //   });
        //   console.log("creation success")
        // }
    })



    function passCheck(pass) {
        // Must use a capital letter
        var lowercase = pass.toLowerCase()
        if (lowercase === pass) {
            return false
        } else {
            return true
        }
        // idk something for numbers or symbols
    }
    // Checks to see if the submitted email is in our records
    function emailCheck() {}

    $("#submitLogin").on('click', () => {
        var userEmail = $("#loginEmail").val().trim()
        var userPass = $("#loginPass").val().trim()
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            $("#xpw").removeAttr("hidden")
        });

    })

    $("#log-out").on('click', () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
            console.log("signing OUT")
        }).catch(function (error) {
            // An error happened.
        });
    })

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    var userName = ""
    var userEmail = ""
    var userPhoto = ""
    var userEmailVerified = ""

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("Ayo we logged in")

            userName = user.displayName;
            userEmail = user.email;
            userPhoto = user.photoURL;
            userEmailVerified = user.emailVerified;
            //     if (window.location != "https://estherecho.github.io/ProjectWeek1/user-index.html")

            //         window.location.replace("https://estherecho.github.io/ProjectWeek1/user-index.html")
            // } else {
            //     console.log("no user sign-in")
            //     if (window.location != "https://estherecho.github.io/ProjectWeek1/index.html")
            //         // window.location.replace("https://estherecho.github.io/ProjectWeek1/user-index.html");
            //         window.location.replace("https://estherecho.github.io/ProjectWeek1/index.html")
            $(".main-content").prepend("Welcome: " + user.email + "!")
        } else {
            console.log("logged oUT")
        }
    });

})