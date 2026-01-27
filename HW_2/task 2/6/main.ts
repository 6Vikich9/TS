/*#Jg0gPO00
Створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок*/

let kgInput: HTMLInputElement | null = document.getElementById('kg') as HTMLInputElement;
let poundInput: HTMLInputElement | null = document.getElementById('pound') as HTMLInputElement;

if (kgInput && poundInput)
{
    kgInput.addEventListener('input', () =>
    {
        let kg: number = Number(kgInput.value);

        if (!isNaN(kg))
        {
            poundInput.value = (kg * 2.20462).toFixed(2);
        }
        else
        {
            poundInput.value = '';
        }
    });
}
