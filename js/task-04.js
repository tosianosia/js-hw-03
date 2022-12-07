/*
 * Напиши функцию `countTotalSalary(employees)` принимающую объект зарплат. Функция
 * считает общую сумму зарплаты работников и возращает ее. Каждое поле объекта,
 * передаваемого в функцию, имеет вид `"имя":"зарплата"`.
 */

const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let totalSalary = 0;

  for (const value of values) {
    totalSalary += value;
  }

  return totalSalary;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
