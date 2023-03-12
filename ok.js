const startBtn = document.getElementById('startBtn');
let imgPlayer = document.getElementById('imgPlayer');
let imgComp = document.getElementById('imgComp');
const pointsPlayer = document.getElementById('pointsPlayer');
const pointsComp = document.getElementById('pointsComp');

const stone = 'https://avatars.mds.yandex.net/i?id=26a93b127b8f869f0b71306d8eaa7422971d10e8-7570876-images-thumbs&n=13';
//1
const paper = 'https://avatars.mds.yandex.net/i?id=32733da8340c5a4309831ab5e3425797b4fc13d5-6017590-images-thumbs&n=13';
//2
const scissors = 'https://avatars.mds.yandex.net/i?id=085dce26890248f092fa0a1f87e3f6e391cfebe6-8497449-images-thumbs&n=13';
//3

// imgPlayer.src = stone

let pointPlayer = 0;    // текущий колличество выйгрешей чела
let pointComp = 0;      // текущий колличество выйгрешей компа


startBtn.addEventListener('click', () => {


    let randomNumberUser = Math.floor(Math.random() * 3);       //это случайное число человека
    let randomNumberComputer = Math.floor(Math.random() * 3);   //это случайное число компа

    // выбор человека
    if (randomNumberUser === 0) {
        imgPlayer.src = stone
    } else if (randomNumberUser === 1) {
        imgPlayer.src = paper
    } else if (randomNumberUser === 2) {
        imgPlayer.src = scissors
    }

    // выбор компа
    if (randomNumberComputer === 0) {
        imgComp.src = stone
    } else if (randomNumberComputer === 1) {
        imgComp.src = paper
    } else if (randomNumberComputer === 2) {
        imgComp.src = scissors
    }

// Функция которая отображает значения текущих выйгрешей
    const resultToGame = () => {
        pointsPlayer.innerText = pointPlayer.toString();    //оставляем результат игрока тем же
        pointsComp.innerText = pointComp.toString();        //оставляем результат компьютера тем же
    }

    //Результат игры
//    Если ничья то результат не меняется у игроков
    if (randomNumberUser === randomNumberComputer) {
        return resultToGame();
    }

    if (randomNumberUser > randomNumberComputer) {                    // у игрока больше значение чем у компа? то,
        if (randomNumberUser === 2 && randomNumberComputer === 0) {   // а у игрока значение = 2? ИИ комп = 0? ,
            pointComp = pointComp + 1;                              //Если да , то текущее результат компа +1 
            return pointsComp.innerText = pointComp.toString();                      // Эта запись для отображения в HTML
        }                                                           //у игрока больше значение чем у компа и не равно предыдущей записи, то 
        pointPlayer = pointPlayer + 1;
        pointsPlayer.innerText = pointPlayer.toString();
    } else {
        if (randomNumberUser === 0 && randomNumberComputer === 2) {
            pointPlayer = pointPlayer + 1;
            return pointsPlayer.innerText = pointPlayer.toString();
        }
        pointComp = pointComp + 1;
        pointsComp.innerText = pointComp.toString();
    }

});

console.log(imgComp);
console.log(imgPlayer); 