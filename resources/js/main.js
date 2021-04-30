const prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    catagories = document.querySelectorAll(".cat"),
    container = document.querySelector(".container"),
    hamburger = document.querySelector(".hamburger");

window.scrollTo(0, -1000);

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
});

let index = 0;

function ChangeSlide(index) {
    for (let i = 0; i < catagories.length; i++) {
        const cat = catagories[i];
        if (index < i) {
            cat.classList.add("inactive");
            cat.classList.remove("wasActive");
        } else if (index > i) {
            cat.classList.add("wasActive");
            cat.classList.remove("inactive");
        } else {
            cat.classList.remove("inactive");
            cat.classList.remove("wasActive");
        }
    }
}

ChangeSlide(index);

prev.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = catagories.length - 1;
    }
    ChangeSlide(index);
});

next.addEventListener("click", () => {
    if (index < catagories.length - 1) {
        index++;
    } else {
        index = 0;
    }
    ChangeSlide(index);
});

container.addEventListener("mousedown", start);
container.addEventListener("mousemove", move);
container.addEventListener("mouseup", end);

container.addEventListener("touchstart", start);
container.addEventListener("touchmove", move);
container.addEventListener("touchend", end);

let currentMove = 0,
    startMove = 0,
    endMove = 0;

function getMousePosition(e) {
    return e.type.includes("mouse") ? e.pageY : e.touches[0].pageY;
}
function start(e) {
    startMove = getMousePosition(e);
}

function move(e) {
    currentMove = getMousePosition(e);
}

function end() {
    let move = startMove - currentMove;
    if (move > 100) {
        if (index > 0) {
            index--;
        } else {
            index = catagories.length - 1;
        }
        ChangeSlide(index);
    } else if (move < -100) {
        if (index < catagories.length - 1) {
            index++;
        } else {
            index = 0;
        }
        ChangeSlide(index);
    }
}
