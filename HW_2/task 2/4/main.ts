/*#2VaLt4vDczH
є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1*/

let numStr:string | null = localStorage.getItem('number');
let num:number = numStr? +numStr : 0;

num = num + 1;
localStorage.setItem('number', num.toString());

let number:HTMLElement | null = document.getElementById('number');
if (number)
{
    number.innerText = num.toString();
}





