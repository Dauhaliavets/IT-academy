var surname;
var firstName;
var lastName;
var age;
var ageAfter;
var ageInDays;
var sex;
var pension;
var pensionText;
surname = prompt('Ваша фамилия:');
firstName = prompt('Ваше имя:');
lastName = prompt('Ваше отчество:');
age = parseInt(prompt('Ваш возраст:'));
sex = confirm('Ваш пол - мужской?');

ageInDays = age * 365;
ageAfter = age + 5;

if (sex) {
    sex = 'мужчина';
    if (age < 62) {
        pension = 'нет';
    }
    else {
        pension = 'да';
    }
}
else if (age < 58) {
        sex = 'женщина';
        pension = 'нет';
    }
    else {
        pension = 'да';
    }

(pension == 'да') ? (pensionText = 'Ура!!! Вы сумели дожить до этого момента (пенсии). Значит прожили жизнь не зря. Есть что вспомнить, и ни о чем не жалеть. Желаю удачи.') : (pensionText = 'Вы еще молоды и бодры. До пенсии далеко. У Вас все впереди. Не упустите свой шанс! Желаю удачи.');

alert('Я знаю, что Вас зовут ' + surname + ' ' + firstName + ' ' + lastName + '\n' + 'Вы прожили ' + age + ' лет' + '\n' + 'А это ' + ageInDays + ' дней. Что на самом деле очень много. :) ' + '\n' + 'Через 5 лет Вам будет ' + ageAfter + ' лет. Может стоит задуматься. И не тепять время зря???' + '\n' + 'Все таки Вы - ' + sex + '. А это не самый слабый пол на планете. ' + pensionText);