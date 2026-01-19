/*#EP5I1UUzAX
Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
Приклад моделі кінцевого об’єкту
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/

interface IDeck
{
    cardSuit: string,
    value: string,
    color: string
}

interface IGroupedDeck {
    spades: IDeck[];
    diamonds: IDeck[];
    hearts: IDeck[];
    clubs: IDeck[];
}

let suits:string[] = ['spades', 'diamonds', 'hearts', 'clubs'];
let values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let getColor = (suit:string) => (suit === 'diamonds' || suit === 'hearts') ? 'red' : 'black';

let deck:IDeck[] = suits.flatMap(suit =>
    values.map(value => (
        {
            cardSuit: suit, value,
            color: getColor(suit)
        }))
);

let reduce:IGroupedDeck= deck.reduce<IGroupedDeck>((accumulator, card) =>
{
    if (card.cardSuit === 'spades')
    {
        accumulator.spades.push(card);
    }
    else if (card.cardSuit === 'diamonds')
    {
        accumulator.diamonds.push(card);
    }
    else if (card.cardSuit === 'hearts')
    {
        accumulator.hearts.push(card);
    }
    else if (card.cardSuit === 'clubs')
    {
        accumulator.clubs.push(card);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduce);
