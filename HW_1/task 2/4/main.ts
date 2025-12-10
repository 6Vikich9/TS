/*#jCHFnEbdmFd
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

interface IUser
{
    name: string,
    username: string,
    password: string
}

let user:IUser[] =
    [

        {
            name: 'Petro', username: 'Petro Schur', password: 'qwerty123'
        },
        {
            name: 'Nadiia', username: 'Nadyha', password: '123'
        },
        {
            name: 'Ihor', username: 'Kotabel', password: 'qwerty'
        },
        {
            name: 'Serhii', username: 'Serhio', password: 'rfdgerge'
        },
        {
            name: 'Herman', username: 'Kladman228', password: 'trgds'
        },
        {
            name: 'Ares', username: 'GodWar', password: 'qwerthbgtfdhgtf'
        },
        {
            name: 'Myhamed', username: 'Wosmukrul', password: 'qgrvdfovm'
        },
        {
            name: 'Donald', username: 'Duck', password: 'uhifdergf'
        },
        {
            name: 'Vika', username: 'Vikich', password: 'reygfdrsjbhkn'
        },
        {
            name: 'Mariia', username: 'Sahed', password: 'hfebugshj'
        }
    ];
console.log(user[0]?.password);
console.log(user[1]?.password);
console.log(user[2]?.password);
console.log(user[3]?.password);
console.log(user[4]?.password);
console.log(user[5]?.password);
console.log(user[6]?.password);
console.log(user[7]?.password);
console.log(user[8]?.password);
console.log(user[9]?.password);