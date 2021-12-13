let imgArray = ["true1", "true2", "true3", "true4", "false1", "false2", "false3"]
let randomPic;
let random2;

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min
}

function replay() {
    let randomArray = []
    random2 = imgArray[getRandomArbitrary(0,imgArray.length - 1)]
    while(randomPic == random2) {
        random2 = imgArray[getRandomArbitrary(0,3)]
    }
    randomPic = random2
    if (randomPic.includes("true")) {
        randomArray.push("true")
        randomArray.push("false")
    } else {
        randomArray.push("false")
        randomArray.push("true")
    }

    document.getElementById("main").innerHTML = `
                                                <div class="col-lg-8 text-center d-flex flex-column globalContent">
                                                    <h1 class="text-center text-white titleSize">La Manu LH or Not</h1>
                                                    <p class="text-center"><img src="assets/img/${randomPic}.png" alt="Photo"></p>
                                                    <div class="d-lg-flex justify-content-center">
                                                        <a class="button buttonSize" data-bs-toggle="modal" data-bs-target="#${randomArray[0]}Modal">Real</a>
                                                        <span class="m-auto mx-4 text-white d-lg-block d-none">OR</span>
                                                        <div class="mt-5"></div>
                                                        <a class="button buttonSize" data-bs-toggle="modal" data-bs-target="#${randomArray[1]}Modal">Fake</a>
                                                    </div>
                                                </div>
                                                `
}