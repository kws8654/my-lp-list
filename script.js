$(".startstop").click(function () {
    $(this).toggleClass("active");
    $('.turntable').toggleClass("active");
});

$(".startstop").click(function () {
    $(this).toggleClass("active");
    $('.rec').toggleClass("active");
});

var num = 1;
function nextLp(index) {
    var image = document.querySelector(".rec");
    var audio = document.querySelector(".audioPlay");
    // let rec = document.querySelector(".rec").getAttribute('src');
    let title = document.querySelector(".console");

    if (index) {
        if (num == 4) return;
        num++;
    } else {
        if (num == 1) return;
        num--;
    }

    image.setAttribute("src", "rec" + num + ".png");

    if (audio.paused) {
        audio.setAttribute("src", "aud" + num + ".mp3");
    } else {
        audio.setAttribute("src", "aud" + num + ".mp3");
        audio.play();
    }
    if (image.getAttribute('src') === "rec1.png") {
        title.innerText = num + "." + "Ohayo"
    } else if (image.getAttribute('src') === "rec2.png") {
        title.innerText = num + "." + "4walls"
    } else if (image.getAttribute('src') === "rec3.png") {
        title.innerText = num + "." + "sunny"
    } else if (image.getAttribute('src') === "rec4.png") {
        title.innerText = num + "." + "sunny"
    }
}


function playLp() {
    var audio = document.querySelector(".audioPlay");
    let rec = document.querySelector(".rec").getAttribute('src');
    let title = document.querySelector(".console");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0
    }
    if (rec === "./rec1.png") {
        title.innerText = "1. Ohayo";
    }
}

