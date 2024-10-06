console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */
var myNum = 10;
var myStr = 'some string';
var myBool = true;
var myArr = [1, 2, 3, 4, 5,];
var myObj = {
    first: 'First Name',
    last: 'Last Name'
}
/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
 var decimal2 = myNum.toFixed(2);
 console.log(decimal2);
// decimal2


/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */
 var myBigInt = 123n;
 myBigInt += 1n;
 console.log(myBigInt);
// myBigInt
