/*#ymAmN2xJ
Створити форму з трьома полями для name, surname, age та кнопкою.
При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом*/

let sub:HTMLElement | null = document.querySelector('#sub');
let info:HTMLElement | null = document.querySelector('#info');
sub?.addEventListener('click', function(ev)
{
    let nameInput:HTMLInputElement = document.querySelector('#name') as HTMLInputElement;
    let name:string = nameInput.value;
    let surnameInput:HTMLInputElement = document.querySelector('#surname') as HTMLInputElement;
    let surname:string = surnameInput.value;
    let ageInput:HTMLInputElement = document.querySelector('#age') as HTMLInputElement;
    let age:number = parseInt(ageInput.value);
    ev.preventDefault();
    if (info)
    {
        info.innerText = `Name: ${name}\n
        Surname: ${surname}\n
        Age: ${age}`;
    }
});
