var surname;
var firstName;
var lastName;
var age;
var ageAfter;
var ageInDays;
var sex;
var pension;
surname = prompt('Ваша фамилия:');
firstName = prompt('Ваше имя:');
lastName = prompt('Ваше отчество:');
age = parseInt(prompt('Ваш возраст:'));
sex = confirm('Ваш пол - мужской?');

ageInDays = age * 365;
ageAfter = age + 5;

if (sex) {
    sex = 'Мужской';
    (age < 62) ? pension = 'нет' : pension = 'да';
}
else {
    sex = 'Женский';
    (age < 58) ? pension = 'нет' : pension = 'да';
}

alert('Ваше ФИО ' + surname + ' ' + firstName + ' ' + lastName + '\n' + 'Ваш возраст в годах: ' + age + '\n' + 'Ваш возраст в днях: ' + ageInDays + '\n' + 'Через 5 лет Вам будет: ' + ageAfter + '\n' + 'Ваш пол: ' + sex + '\n' + 'Вы на пенсии: ' + pension);