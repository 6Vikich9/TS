/*#NKB0tgWIK1G
***PAGINATION
зробити масив на 100 об’єктів та дві кнопки prev next
при завантаженні сторінки з’являються перші 10 об’єктів.
При натисканні next виводяться наступні 10 об’єктів
При натисканні prev виводяться попередні 10 об’єктів*/

let data:string[] = [];
for (let i:number = 1; i <= 100; i++)
{
    data.push(`Об’єкт: ${i}`);
}

let currentPage:number = 0;
let itemsPerPage:number = 10;

let list:HTMLElement | null = document.getElementById("list");
let nextBtn:HTMLElement | null = document.getElementById("next");
let prevBtn:HTMLElement | null = document.getElementById("prev");

function page(page:number):void
{
    if(!list)return;
    list.innerText = "";

    let start:number = page * itemsPerPage;
    let end:number = start + itemsPerPage;

    for (let i:number = start; i < end && i < data.length; i++)
    {
        list.innerHTML += `<div class="item">${data[i]}</div>`;
    }
}

nextBtn?.addEventListener("click", () =>
{
    if ((currentPage + 1) * itemsPerPage < data.length)
    {
        currentPage++;
        page(currentPage);
    }
});

prevBtn?.addEventListener("click", () =>
{
    if (currentPage > 0)
    {
        currentPage--;
        page(currentPage);
    }
});

page(currentPage);

