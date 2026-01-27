/*#LhSfdhM3
    Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
    в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
    Є  сторінка sessionsListPage.html (назва довільна),
    при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
    Інфу НЕ виводити в консоль, а малювати в DOM*/

let sessionList:string | null = localStorage.getItem('sessionList');

let counter :number;
if(sessionList != null)
{
    counter=Number(sessionList);
}
else
{
    counter =0;
}

counter++;
localStorage.setItem('sessionList', counter.toString());

let number:HTMLElement | null = document.getElementById('sessionList');
if(number != null)
{
    number.innerHTML = counter.toString();
}