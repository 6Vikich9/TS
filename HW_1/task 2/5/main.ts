/* #coYydZuaeEB
- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
*/

interface IDay
{
    id: number,
    temperature: number[],
}

let day:IDay[] =
    [
        {
            id: 1, temperature: [4, 10, 3]
        },
        {
            id: 2, temperature: [2, 4, -1]
        },
        {
            id: 3, temperature: [3, 5, 7]
        },
        {
            id: 4, temperature: [-2, 1, -4]
        },
        {
            id: 5, temperature: [-6, -2, -9]
        },
        {
            id: 6, temperature: [6, 9, 0]
        },
        {
            id: 7, temperature: [5, 3, 0]
        }
    ]

console.log( 'day', day[0]?.id, 'morning :', day[0]?.temperature[0],'day :',day[0]?.temperature[1],'evening :',day[0]?.temperature[2]);
console.log( 'day', day[1]?.id, 'morning :', day[1]?.temperature[0],'day :',day[1]?.temperature[1],'evening :',day[1]?.temperature[2]);
console.log( 'day', day[2]?.id, 'morning :', day[2]?.temperature[0],'day :',day[2]?.temperature[1],'evening :',day[2]?.temperature[2]);
console.log( 'day', day[3]?.id, 'morning :', day[3]?.temperature[0],'day :',day[3]?.temperature[1],'evening :',day[3]?.temperature[2]);
console.log( 'day', day[4]?.id, 'morning :', day[4]?.temperature[0],'day :',day[4]?.temperature[1],'evening :',day[4]?.temperature[2]);
console.log( 'day', day[5]?.id, 'morning :', day[5]?.temperature[0],'day :',day[5]?.temperature[1],'evening :',day[5]?.temperature[2]);
console.log( 'day', day[6]?.id, 'morning :', day[6]?.temperature[0],'day :',day[6]?.temperature[1],'evening :',day[6]?.temperature[2]);