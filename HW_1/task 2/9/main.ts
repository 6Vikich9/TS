/* #KzrtqyQ
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/

let day:string | null =prompt('Enter a day of week')

switch(day)
{
    case 'monday':
        console.log('Plan on monday: ');
        break;
    case 'tuesday':
        console.log('Plan on tuesday: ');
        break;
    case 'wednesday':
        console.log('Plan on wednesday: ');
        break;
    case 'thursday':
        console.log('Plan on thursday: ');
        break;
    case 'friday':
        console.log('Plan on friday: ');
        break;
    case 'saturday':
        console.log('Plan on saturday: ');
        break;
    case 'sunday':
        console.log('Plan on sunday: ');
        break;
    default:
        console.log('error');
}