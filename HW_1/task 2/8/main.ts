/*#UMoNq4biWGe
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day:number = 23
if (day >=1 && day <=10)
{
    console.log('first')
}
else if(day >10 && day <= 20)
{
    console.log('second')
}
else if(day >20 && day <= 31)
{
    console.log('third')
}
else
{
    console.log('error')
}