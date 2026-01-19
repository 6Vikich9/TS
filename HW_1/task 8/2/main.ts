type Item = number | null | undefined | (() => string);
interface Ioriginal
{
    name: string;
    age: number;
    greeting:()=> void;
    items:Item[]
}

function deepClone<T>(value: T): T
{
    if (value === null) return null as any;
    if (value === undefined) return undefined as any;

    if (typeof value === 'number' && isNaN(value))
    {
        return NaN as any;
    }

    if (typeof value !== 'object' && typeof value !== 'function')
    {
        return value;
    }

    if (typeof value === 'function')
    {
        return value;
    }

    if (Array.isArray(value))
    {
        return value.map(item => deepClone(item)) as any;
    }

    const clonedObject: any = {};
    for (const key in value)
    {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            clonedObject[key] = deepClone((value as any)[key]);
        }
    }
    return clonedObject;
}

const original =
{
    name: 'Vika',
    age: NaN,
    greeting()
    {
        console.log('Hello!');
    },
    items: [1, null, undefined, () => 'ok'] as Item[]
};

const cloned:Ioriginal = deepClone(original);

console.log(cloned.name);
console.log(cloned.age);
console.log(cloned.items[2]);
if (typeof cloned.items[3] === 'function')
{
    console.log(cloned.items[3]());
}
