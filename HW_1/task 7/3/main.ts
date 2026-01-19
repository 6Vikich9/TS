/*#pOeHKct
– Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/

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
        new User(32, 'dfjhru', 'nirfej', 'nmtirj@gmail.com', '+5849774695'),
        new User(3785, 'gtrgrgt', 'greerg', 'gretj@gmail.com', '+67544657476'),
        new User(24789, 'gtretger', 'tgreyg', 'gterg@gmail.com', '+67543456'),
        new User(4829, 'gtyrgt', 'nirgtrgffej', 'vfvgfgt@gmail.com', '+987656543'),
        new User(478, 'kiujyht', 'drftgyhu','tfygrg@gmail.com', '+64732654'),
        new User(19, 'gvhnrfud', 'fmkle', 'xlswfehr@gmail.com', '+7495837'),
        new User(438, 'grwnjkl', 'erqnflk', 'eqfnuir@gmail.com', '+5748925'),
        new User(548, 'fejkrg', 'nirjrejfej', 'jnefrkl@gmail.com', '+74597479'),
        new User(476, 'fgmkjre', 'msdwqjo', 'fnjerlk@gmail.com', '+758293754'),
        new User(458, 'fermeqiuo', 'wdnjr', 'frwjnkf@gmail.com', '+4352678230'),
    ]
console.log(users);

let sortedUsers:User[] = users.sort((a, b) => b.id - a.id);
console.log(sortedUsers);


