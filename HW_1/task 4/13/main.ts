/*#mkGDenYnNjn
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400*/

function exchange (sumUAH:number, currencyValues: {currency: string, value:number }[], exchangeCurrency:string):number
{
    let ex;
    for (const element of currencyValues)
    {
        if (element. currency === exchangeCurrency)
        {
            ex = element;
        }
    }

    if (ex)
    {
        let result = sumUAH/ex.value;
        return result;
    }
    return -1;

}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'))
