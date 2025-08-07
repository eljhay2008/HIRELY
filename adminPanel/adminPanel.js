  function ActiveUser(x) {//user analytics
    alert(x);

    let daily = document.getElementById("Au_d");
    let weekly = document.getElementById("Au_w");
    let monthly = document.getElementById("Au_m");
    daily.classList.remove("btn_active");
    weekly.classList.remove("btn_active");
    monthly.classList.remove("btn_active");


    if (x == "daily") {
      daily.classList.add("btn_active");
    }
    if (x == "weekly") {
      weekly.classList.add("btn_active");
    }
    if(x == "monthly"){
      monthly.classList.add('btn_active');
    }
  }