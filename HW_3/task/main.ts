/*Створити функцію, яка робить запити на апі, та віддає результат свого запиту. Тип відповіді визначається дженеріком функції.
Сигнатур функції під час виклику foobar<SomeType>(‘/url)
SomeType – ваш тип відповіді
url – ваш ендпоінт, з якого чекаємо відповідь*/

async function foobar<T>(url: string): Promise<T>
{
    return await fetch(url).then(res => res.json());
}

interface IUser
{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
}

foobar<IUser>('https://dummyjson.com/users/1')
    .then(user =>
    {
        console.log(user.firstName);
        console.log(user.age);
    });
