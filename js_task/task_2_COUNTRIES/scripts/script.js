var country;
var capital;
var countryHash = {Germany: 'Berlin', Belarus: 'Minsk'};
var count;

// Функция добавления информации о стране в Хеш
function enterCountryInfo(){
    country = prompt('Введите название страны: ');
    if (country == ""){
        country = prompt("Вы не заполнили поле ввода, попробуйте еще раз.");
    }
    else if (country == null){
        country = prompt("Пожалуйста не уходите. Введите название страны!");
    }
    capital = prompt('Введите название столицы: ');
    if (capital == ""){
        capital = prompt("Вы не заполнили поле ввода, попробуйте еще раз.");
    }
    else if (capital == null){
        capital = prompt("Пожалуйста не уходите. Введите название столица!");
    }

    countryHash[country] = capital;
}

// Функция получения информации о стране из Хеш
function getCountryInfo(){
    var key;
    countrySearch = prompt('Столицу какой страны подсказать?');
    if (countrySearch in countryHash){
        alert('Столицей ' + countrySearch + ' является ' + countryHash[countrySearch]);
    }
    else{
        alert('Данными о стране с названием: ' + countrySearch + ' не располагаем.');
    }
}

// Функция вывода всех элементом Хэша
function allList(){
    var list;
    for(list in countryHash)
        console.log('Страна: ' + list + ' - Столица: ' + countryHash[list]);    
}

// Функция удаления информации о стране
function deleteCountryInfo(){
    var countryDelete;
    countryDelete = prompt('Введите страну, информацию о которой нужно удалить');
    if (countryDelete in countryHash){
        delete countryHash[countryDelete];
        alert('Информация о стране: ' + countryDelete + ' удалена.');
    }
    else{
        alert('Страны: ' + countryDelete + ' не существует.');
    }
}

// Вывод Хэша в textarea
function get(){
    var key;
    var list = [];
    var count = 0;
    for(key in countryHash){
        list[count] = [key, ' - ', countryHash[key], '             '];
        count++;
    }
    document.getElementById('textarea').value = list;
} 