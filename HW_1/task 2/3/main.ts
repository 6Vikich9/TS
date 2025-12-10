/*#sA3Gg1sCp
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/
interface IAuthor
{
    name: string;
    age: number;
}


interface IBook
{
    title: string,
    pageCount: number,
    genre: string,
    authors: IAuthor[],
}


let book1: IBook =
    {
        title: 'Dwa kresla',
        pageCount: 300,
        genre: 'horor',
        authors :
            [
                {
                    name: 'Galinas',
                    age: 27
                },
                {
                    name: 'Valiliy',
                    age: 25
                }
            ]

    }
console.log(book1);
let book2: IBook =
    {
        title: 'telek',
        pageCount: 50,
        genre: 'fantasy',
        authors :
            [
                {
                    name: 'Petro Shchur',
                    age: 27
                },
                {
                    name:'Andrey',
                    age: 21
                }
            ]
    }
console.log(book2);
let book3: IBook =
    {
        title: 'duhovka',
        pageCount: 5000,
        genre: 'detektive',
        authors :
            [
                {
                    name: 'Pituh',
                    age: 12
                },
                {
                    name: 'Kyritsa',
                    age: 13
                }
            ]
    }
console.log(book3);