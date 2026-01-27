/*#OPLI89c9G
– Є масив:
    [‘Main’,’Products’,’About us’,’Contacts’]
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/

const navigation: string[] = ['Main', 'Products', 'About us', 'Contacts'];

const ul:HTMLUListElement | null = document.querySelector<HTMLUListElement>('ul');

if (ul)
{
    for (const item of navigation)
    {
        const li:HTMLLIElement = document.createElement('li');
        li.innerText = item;
        ul.appendChild(li);
    }
}

