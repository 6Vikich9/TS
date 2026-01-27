/*#jeBqHV525U5
– Є масив
let coursesAndDurationArray = [
    {title: ‘JavaScript Complex’, monthDuration: 5},
    {title: ‘Java Complex’, monthDuration: 6},
    {title: ‘Python Complex’, monthDuration: 6},
    {title: ‘QA Complex’, monthDuration: 4},
    {title: ‘FullStack’, monthDuration: 7},
    {title: ‘Frontend’, monthDuration: 4}
];
Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

interface ICoursesAndDurationArray
{
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray:ICoursesAndDurationArray[] =
    [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

for (const courseElement of coursesAndDurationArray)
{
    const div:HTMLDivElement = document.createElement('div');
    div.innerText = `${courseElement.title} ${courseElement.monthDuration}`;
    document.body.appendChild(div);
}


