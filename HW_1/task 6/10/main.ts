/*#bolvdlhP
 описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
Після опису, використовуючи функції масивів:
 – знайти піковий туз
 – всі шістки
 – всі червоні карти
 – всі буби
 – всі трефи від 9 та більше

Приклад моделі об’єкту карти:
{
    cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
    value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
    color:”, // ‘red’,’black’
}*/

interface IDeck
{
    cardSuit: string,
    value: string,
    color: string
}

let suits:string[] = ['spade', 'diamond', 'heart', 'clubs'];
let values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let getColor = (suit:string) => (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';

let deck:IDeck[] = suits.flatMap(suit =>
    values.map(value => (
        {
            cardSuit: suit, value,
            color: getColor(suit)
        }))
);

let aceOfSpades:IDeck | undefined = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
let allSixes:IDeck[] = deck.filter(card => card.value === '6');
let allRedCards:IDeck[] = deck.filter(card => card.color === 'red');
let allDiamonds:IDeck[] = deck.filter(card => card.cardSuit === 'diamond');
let clubsNinePlus:IDeck[] = deck.filter(card =>
    card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);

console.log("Піковий туз:", aceOfSpades);
console.log("Всі шістки:", allSixes);
console.log("Всі червоні карти:", allRedCards);
console.log("Всі бубни:", allDiamonds);
console.log("Всі трефи від 9 і вище:", clubsNinePlus);


