/*#LARqoUj5I
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/

interface bookType
    {
        title: string,
        pageCount: number,
        genre: string,
    }


let book1:bookType =
    {
        title: 'Dwa kresla',
        pageCount: 300,
        genre: 'horor'
    }
console.log(book1);
let book2:bookType =
    {
        title: 'telek',
        pageCount: 50,
        genre: 'fantasy'
    }
console.log(book2);
let book3:bookType =
    {
        title: 'duhovka',
        pageCount: 5000,
        genre: 'detektive'
    }
console.log(book3);