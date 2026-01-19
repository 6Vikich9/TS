/*#vV9a6584I5
    – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
    — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
    — changeYear (newValue) – змінює рік випуску на значення newValue
    — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car*/

class Car
{
    model:string;
    producer:string;
    year:number;
    maxSpeed:number;
    engineCapacity:number;
    driver?:object;


    constructor(model:string, producer:string, year:number, maxSpeed:number,engineCapacity:number)
    {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;


    }

    drive(): void
    {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info(): void
    {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }

    increaseMaxSpeed(newSpeed:number):void
    {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }

    changeYear(newValue:number):void
    {
        this.year = newValue;
    }

    addDriver(driver: object): void
    {
        this.driver = driver;
    }


}

let car = new Car('Audi', 'Audi Sport GmbH', 2013, 285, 4);
console.log(car);
car.info();
car.drive();
console.log(`car increase max speed to`,car.increaseMaxSpeed(15));
console.log(`year changed to`, car.changeYear(2024));
console.log('додамо нового водія', car.addDriver({} ));
console.log(car);