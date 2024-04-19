/**
 * - Стек викликів
 * - Порядок виконання
 */

// function foo1() {
//   console.log('START1');
//   foo2();
//   console.log('END!');
// }

// function foo2() {
//   console.log('Start2');
//   foo3();
//   console.log('end2');
// }

// function foo3() {
//   console.log('Start2');
//   console.log(test);
//   console.log('end2');
// }

function foo(i = 0) {
  console.log(i);
  foo(i + 1);
}

foo();
