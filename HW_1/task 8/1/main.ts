/*#iz6emEsP2BA
– є масив
let coursesAndDurationArray = [
    {title: ‘JavaScript Complex’, monthDuration: 5},
    {title: ‘Java Complex’, monthDuration: 6},
    {title: ‘Python Complex’, monthDuration: 6},
    {title: ‘QA Complex’, monthDuration: 4},
    {title: ‘FullStack’, monthDuration: 7},
    {title: ‘Frontend’, monthDuration: 4}
];
за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration}
Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції*/

interface IcoursesAndDurationArray
{
    title: string;
    monthDuration: number;
}


let coursesAndDurationArray =
    [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

let maped:IcoursesAndDurationArray[] = coursesAndDurationArray.map((courses, index) => ({id: index + 1, ...courses}));
console.log(maped);