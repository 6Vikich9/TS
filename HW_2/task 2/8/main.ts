/*#kUSgFqWY
 Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
 При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.*/

let tableGeneration:HTMLFormElement = document.forms.namedItem('tableGeneration') as HTMLFormElement;
let table:HTMLTableElement = document.getElementById('table') as HTMLTableElement;

tableGeneration.addEventListener('submit', (event:SubmitEvent):void =>
{
    event.preventDefault();
    table.innerHTML = " ";

    const linesInput = tableGeneration.elements.namedItem('lines') as HTMLInputElement;
    const cellsInput = tableGeneration.elements.namedItem('cells') as HTMLInputElement;
    const contentInput = tableGeneration.elements.namedItem('cellsContent') as HTMLInputElement;

    const linesValue: number = Number(linesInput.value);
    const cellsValue: number = Number(cellsInput.value);
    const cellsContent: string = contentInput.value;

    for (let i:number = 0; i < linesValue; i++)
    {
        let tr:HTMLTableRowElement = document.createElement('tr');

        for (let j:number=0; j < cellsValue; j++)
        {
            let td:HTMLTableCellElement = document.createElement('td');
            td.innerText = cellsContent;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
});

