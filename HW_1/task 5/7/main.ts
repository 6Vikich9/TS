/*#0Kxco1edSN
- створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write */

let  printText = (text:string):void =>
{
    document.write
    (
        `
            <ul>
                <li>${text}</li>
            </ul>
            `
    );
}

let x:number=5;

for (let i = 0; i < x; i++)
{
    printText('Text');
}