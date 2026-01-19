/*#nkMXISv
– створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об’єктами Client*/

class Client
{
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    order:{product:string, price: number}[];

    constructor(id: number, name: string, surname: string, email: string, phone: string, order:{product:string, price: number}[])
    {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}



let clients: Client[]=
    [
        new Client(77, 'hfdbej', 'fhucre', 'fekjb@gmail.com', '+76548367945', [{product:'fguhe', price: 74938}, {product:'fnrjk', price: 4568}]),
        new Client(743, 'njfer,', 'fnkje', 'njkfe@gmail.com', '+7854947895', [{product:'fjekbh', price: 8475}, {product:'decklmndfr', price: 57849}, {product:'demkfl', price: 57546}]),
        new Client(4903, 'hferi', 'nefjif', 'nfekjl@gmail.com', '+7849425', [{product:'bhfjkdew', price: 9430}, {product:'fkler', price: 54897}, {product:'cfekmnlr', price: 3287}]),
        new Client(38, 'brfjekcw', 'fkemnl', 'fnrejk@gmail.com', '+90348784', [{product:'fnrjke', price: 54367}, {product:'efrmkl', price: 3782}]),
        new Client(30, 'bfejhkd', 'fnkdjler', 'njkref@gmail.com', '+79457459', [{product:'jndcke', price: 74594}, {product:'ermnkflj', price: 55784}]),
        new Client(9234, 'erdfnbjk', 'redjk', 'rebjfk@gmail.com', '+467385445', [{product:'erjfn', price: 478243}]),
        new Client(438, 'fbeikrb', 'fnrhui', 'frnkjfe@gmail.com', '+9403589479', [{product:'fjbrhrt', price: 67438}, {product:'fknljre', price: 90358}, {product:'dfcnjkre', price: 54456},{product:'kmlrf', price: 38958}]),
        new Client(4837, 'fjrbnrkbf ', 'kdnxekj', 'dmknjrfkf@gmail.com', '+94384573875', [{product:'rfjnbhr', price: 56374}, {product:'dkcl', price: 34985}]),
        new Client(12, 'fnjkd', 'sxmdklem', 'dnerkjf@gmail.com', '+4769349554', [{product:'cfjn', price:765847 }, {product:'frkmcln', price: 45},{product:'fejnk', price: 546857}]),
        new Client(77, 'xckoefjm', 'mrtklngv', 'njfktgt@gmail.com', '+75894574', [{product:'vfhjkgtv', price: 475984}])
    ]

console.log(clients);

