// ---------------------------IMPORTS---------------------------------------
import throttle from 'lodash.throttle';



// --------------------------VARIABLES----------------------------------
// створимо об'єкт посилань на елементи форми
const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea')
}

// створимо об'єк для зберігання данних з полів email та textarea
const data = {};

//вводимо змінну для зберігання ключа для локального сховища, 
// що зустрічається у декількох місцях коду
const STORAGE_KEY = 'feedback-form-state';



// -----------------------------CALLS------------------------------------
// оголосимо слушачів подій на форму
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


// викликаємо функцію при завантаженні сторінки
// для отримання даних з локального сховища та запису у поля форми
populateForm();


// --------------------------FUNCTIONS----------------------------------
function onFormInput(e) {
    data[e.target.name] = e.target.value;
    const stringifiedData = JSON.stringify(data);

    localStorage.setItem(STORAGE_KEY, stringifiedData);
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY); 

    console.log(data);
}

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);

    if(savedData) {
        refs.email.value = parsedData.email;
        refs.textarea.value = parsedData.message;
    }
}
