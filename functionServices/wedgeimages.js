async function setLogin() {
    const items = await GetSettings();
    //console.log(items);
    if (items && items.length > 0) {
        $(".nobleim").attr("src", `${items.find(item => item.which === "logoextern") ? items.find(item => item.which === "logoextern").image : "assets/img/logo.png"}`);
        $(".page-linear").css("background-image", `url(${items.find(item => item.which === "loginimg") ? items.find(item => item.which === "loginimg").image : "./assets/img/test1.jpg"})`);
        $(".ads-image").attr("src", `${items.find(item => item.which === "backglise") ? items.find(item => item.which === "backglise").image ? items.find(item => item.which === "backglise").image : "./assets/img/test1.jpg" : "./assets/img/test2.jpg"}`);
        $(".bg-image1").css("background-image", `url(${items.find(item => item.which === "backglise") ? items.find(item => item.which === "backglise").image : "./assets/img/test2.jpg"})`);
    } else {
        $(".nobleim").attr("src", "assets/img/logo.png");
        $(".page-linear").css("background-image", "url(./assets/img/test1.jpg)");
        $(".bg-image1").css("background-image", "url(./assets/img/test2.jpg)");
    }

};

setLogin()