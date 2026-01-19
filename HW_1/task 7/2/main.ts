/*#2ikXsE2WiKZ
– Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)*/

class User
{
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, surname: string, email: string, phone: string)
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}

let users:User[] =
    [
        new User(1, 'dfjhru', 'nirfej', 'nmtirj@gmail.com', '+5849774695'),
        new User(2, 'gtrgrgt', 'greerg', 'gretj@gmail.com', '+67544657476'),
        new User(3, 'gtretger', 'tgreyg', 'gterg@gmail.com', '+67543456'),
        new User(4, 'gtyrgt', 'nirgtrgffej', 'vfvgfgt@gmail.com', '+987656543'),
        new User(5, 'kiujyht', 'drftgyhu','tfygrg@gmail.com', '+64732654'),
        new User(6, 'gvhnrfud', 'fmkle', 'xlswfehr@gmail.com', '+7495837'),
        new User(7, 'grwnjkl', 'erqnflk', 'eqfnuir@gmail.com', '+5748925'),
        new User(8, 'fejkrg', 'nirjrejfej', 'jnefrkl@gmail.com', '+74597479'),
        new User(9, 'fgmkjre', 'msdwqjo', 'fnjerlk@gmail.com', '+758293754'),
        new User(10, 'fermeqiuo', 'wdnjr', 'frwjnkf@gmail.com', '+4352678230'),
    ]
console.log(users);

let filteredUsers:User[] = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);