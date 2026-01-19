/*#yo06d74c1C
– є масив
let coursesAndDurationArray = [
    {title: ‘JavaScript Complex’, monthDuration: 5},
    {title: ‘Java Complex’, monthDuration: 6},
    {title: ‘Python Complex’, monthDuration: 6},
    {title: ‘QA Complex’, monthDuration: 4},
    {title: ‘FullStack’, monthDuration: 7},
    {title: ‘Frontend’, monthDuration: 4}
];
 — відсортувати його за спаданням за monthDuration
 — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
 — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/

interface ICoursesDuration
{
    title: string,
    monthDuration: number
}

let coursesAndDurationArray:ICoursesDuration[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortedArray:ICoursesDuration[] = [...coursesAndDurationArray]
    .sort((a:ICoursesDuration, b:ICoursesDuration):number => b.monthDuration - a.monthDuration);

let filteredArray:ICoursesDuration[] = sortedArray
    .filter(course => course.monthDuration > 5);

let mappedArray:{id:number, title:string, monthDuration: number}[] = filteredArray
    .map((course:ICoursesDuration, index:number):{id:number, title:string, monthDuration: number} => ({
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    }));

console.log(sortedArray);
console.log(filteredArray);
console.log(mappedArray);
