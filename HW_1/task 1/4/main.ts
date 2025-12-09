/*- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль*/

let name:string|null= prompt('Enter your name', '');
let lastName:string|null= prompt('Enter your last name', '');
let birthday:string|null= prompt('Enter your birthday year', '');
alert(name + ' ' + lastName + ' ' + birthday);