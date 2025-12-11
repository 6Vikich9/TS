/*#59g0IsA
- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент*/

let  printText = (text:string):void =>
{
    document.write
    (
        `
           <div>
               <p>${text}</p>
           </div>
        `
    );
}

printText('Text');