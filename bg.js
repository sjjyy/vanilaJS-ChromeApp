const body = document.querySelector("body");

const IMG_NUM = 4;

function paintImage(imgNum) {
    const image = new Image();
    image.src = `images/image${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function random() {
    return Math.floor(Math.random() * IMG_NUM);
}

function init() {
    const randomNum = random();
    paintImage(randomNum);
}

init();