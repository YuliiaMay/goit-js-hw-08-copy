// ---------------------------IMPORTS------------------------------------
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


// --------------------------VARIABLES----------------------------------
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

//вводимо змінну для зберігання ключа для локального сховища, 
// що зустрічається у декількох місцях коду
const STORAGE_KEY = 'videoplayer-current-time';



// -----------------------------CALLS-----------------------------------
// викликаємо функцію при завантаженні сторінки
// для отримання даних з локального сховища про збереженний час попереднього перегляду та відображення у плеєрі
populatePlayer()

// відстежуватимемо подію  timeupdate - оновлення часу відтворення
player.on('timeupdate', throttle(onPlay, 1000));



// --------------------------FUNCTIONS----------------------------------
// f виконує запис поточного часу перегляду плеєра у локальне сходище
function onPlay(data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
};

// f відображає
function populatePlayer() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
    }
}
