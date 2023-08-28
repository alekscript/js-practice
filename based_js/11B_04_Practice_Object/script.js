"use strict";

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.
// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
          js: '20%',
          php: '10%'
      },
      exp: '1 month'
  },
  showAgeAndLangs: function(plan) {
    const {age} = plan;
    const {languages} = plan.skills;
    let str = `Мне ${age} и я владею языками:`;

    languages.forEach(function(languages) {
      str += ` ${languages.toUpperCase()}`;
    });
    console.log(str);
    return str;
  }
};

function showExperience(plan) {
  let {exp} = plan.skills;
  return exp;
}

function showProgrammingLangs(plan) {
  let str = '';
  let {programmingLangs} = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  console.log(str);
  return str;
}

showExperience(personalPlanPeter);
showProgrammingLangs(personalPlanPeter);


personalPlanPeter.showAgeAndLangs(personalPlanPeter);