/*
Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом
*/

interface ICoursesArray
{
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

let coursesArray:ICoursesArray[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray)
{
    let div1:HTMLElement = document.createElement('div1');
    div1.classList.add('info');

    let h1:HTMLHeadingElement = document.createElement('h1');
    h1.classList.add('title');
    h1.innerText = course.title;
    div1.appendChild(h1);

    let p1:HTMLElement = document.createElement('p1');
    p1.classList.add('month');
    // p1.innerText = ['Month Duration: '] + course.monthDuration;
    p1.innerText = `Month Duration: ${course.monthDuration}  `;
    div1.appendChild(p1);

    let p2:HTMLElement = document.createElement('p2');
    p2.classList.add('hours');
    //p2.innerText = ['Hours Duration: '] + course.hourDuration;
    p2.innerText = `Hours Duration: ${course.hourDuration}`
    div1.appendChild(p2);

    let div2:HTMLElement = document.createElement('div2');
    div2.classList.add('modules');
    for (const module of course.modules)
    {
        let ul:HTMLElement = document.createElement('li');
        ul.innerText = module;
        div2.appendChild(ul);
    }

    div1.appendChild(div2);
    document.body.append(div1);
}



