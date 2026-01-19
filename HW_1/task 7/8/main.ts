/*#zg6Fifnqig
– створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку*/

class Cinderella
{
    name:string;
    age:number;
    footSize:number;

    constructor(name:string, age:number, footSize:number)
    {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince
{
    name:string;
    age:number;
    shoe:number;

    constructor(name:string, age:number, shoe:number)
    {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let cinderella:Cinderella[] =
    [
        new Cinderella('Vikich', 19, 39),
        new Cinderella('Mariich', 20, 38),
        new Cinderella('Sofiich', 18, 35),
        new Cinderella('Nastich', 19, 36),
        new Cinderella('Anich', 20, 35),
        new Cinderella('Natalich', 19, 39),
        new Cinderella('Alinich', 15, 33),
        new Cinderella('Ksenich', 18, 37),
        new Cinderella('Olesich', 19, 37),
        new Cinderella('Darich', 9, 28)
    ];

let prince:Prince = new Prince('Sergiich', 22, 38);

for (const princeElement of cinderella)
{
    if (prince.shoe === princeElement.footSize)
    {
        console.log(princeElement);
    }
}

let find:Cinderella | undefined = cinderella.find(princeElement => prince.shoe === princeElement.footSize);
console.log(find);

