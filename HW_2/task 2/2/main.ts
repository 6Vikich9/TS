/*#j693ca8
– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача*/

const sub:HTMLElement | null = document.querySelector('#sub');
sub?.addEventListener('click', (): void =>
{
    const ageInput = document.querySelector('#age') as HTMLInputElement;
    const age:number = parseInt(ageInput.value);

    if (age > 18)
    {
        alert('Your age more than 18, your age is: ' + age);
    }
    else if (age < 18)
    {
        alert('Your age is less than 18, your age is: ' + age);
    }
    else
    {
        alert('Your age: 18');
    }
});
