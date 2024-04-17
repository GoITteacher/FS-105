/**
 * Масиви
 *
 * - Створення масиву
 * - Доступ до елементів
 * - Перевизначення значення елемента
 * - Довжина масиву
 * - Індекс останнього елемента
 * - Перевизначення
 */

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
console.table(courses);

courses[1] = 'Jacob';
courses[3] = 'Adrian';
console.table(courses);

console.log(courses.length);

const lastIndex = courses.length - 1;
console.log(lastIndex);
