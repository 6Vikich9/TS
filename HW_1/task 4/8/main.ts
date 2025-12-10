/*#gEFoxMMO
- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write */

interface IUser
{
    name: string;
    age: number;
    status: boolean;
}


function printerArray(users:IUser[]):void
{
    for (const user of users)
    {
        document.write
        (
            `
            <ul>
                <li>Name: ${user.name}, Age: ${user.age}, Status: ${user.status}</li>
            </ul>
            `
        );
    }
}


let users:IUser[] =
    [
        {
            name: 'ihor', age: 24, status: false
        },
        {
            name: 'vova', age: 23, status: true
        },
        {
            name: 'sasha', age: 25, status: true
        }
    ];
printerArray(users);