/*#Kx1xgoKy8
– Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex'', monthDuration: 5},
    {title: 'Java Complex'', monthDuration: 6},
    {title: 'Python Complex'', monthDuration: 6},
    {title: 'QA Complex'', monthDuration: 4},
    {title: 'FullStack'', monthDuration: 7},
    {title: 'Frontend'', monthDuration: 4}
];
За допомоги скріпта для кожного елементу масиву зробити <div class=''item''> ,  в якому буде <h1 class=''heading''>  з title  елементу, та <p class=''description''> з monthDuration елементу.
Завдання робити через цикли.*/

interface ICoursesAndDurationArray
{
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray:ICoursesAndDurationArray[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


for (let course of coursesAndDurationArray)
{
    let div:HTMLDivElement = document.createElement('div');
    div.classList.add('item');

    let h1:HTMLHeadingElement = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = course.title;

    div.appendChild(h1);

    let p:HTMLParagraphElement = document.createElement('p');
    p.classList.add('description');
    p.innerText = course.monthDuration.toString();

    div.appendChild(p);

    document.body.append(div);
}
