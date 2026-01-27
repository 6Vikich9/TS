/*#RbQGnH5DuC
В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
сигнатура функції –
addToLocalStorage(arrayName:string,objToAdd:any{}):void*/

function addToLocalStorage(arrayName:string, objToAdd:any):void
{
    const store:string | null = localStorage.getItem(arrayName);
    let array: any[];

    if (store !== null)
    {
        array = JSON.parse(store);
    } else
    {
        array = [];
    }

    array.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(array));
}
addToLocalStorage('sessionList', { id: 1, name: "John Doe" });
