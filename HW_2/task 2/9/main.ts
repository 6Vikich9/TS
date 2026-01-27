/*#bq1zkx7WP
*** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження,
які відбулись пізніше ніж 10 секунд після попереднього.
При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається*/

const priceBlock:HTMLElement | null = document.getElementById('price');

let stPrice:string | null= localStorage.getItem('price');
let stUpdate:string | null= localStorage.getItem('update');

let price: number = stPrice ? Number(stPrice) : 100;
let update:number = stUpdate ? Number(stUpdate) : 0;

const now:number = Date.now();
const diff:number = (now - update) / 1000;

if (diff > 10)
{
    price = price + 10;
    localStorage.setItem('price', price.toString());
    localStorage.setItem('Update', now.toString());
}

if(priceBlock)
{
    priceBlock.innerText = `${price}`;

}
