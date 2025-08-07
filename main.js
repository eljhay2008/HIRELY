    function handleLogin(username,password) {
        let form = document.getElementById("form");
        let user = username.value;
        let pass = password.value;
        if (user === "admin" && pass === "123") {
            form.action = "adminPanel/dashboard.html";
        } else if (user === "" || pass === "") {
            alert("please fill up the form");
        } else {
            alert("Incorrect username or password");
            
        }
    }
