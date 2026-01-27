/*#HmvAfRQM
– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.*/

interface IProduct
{
    id:number,
    title:string,
    price:number,
    quantity: number;
    total: number;
}

interface ICart
{
    id:number,
    products:IProduct[],
    total:number,
    discountedTotal: number;
    userId:number;
    totalProducts: number;
    totalQuantity: number;
}
interface ICartsResponse
{
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}

let cartsDiv:HTMLElement | null = document.getElementById('carts');
fetch('https://dummyjson.com/carts')
    .then((res: Response) => res.json())
    .then(
        (cartsObj: ICartsResponse) =>
        {
            if (!cartsDiv) return;
            console.log(cartsObj);
            const carts:ICart[] = cartsObj.carts;
            console.log(carts);

            for (const cart of carts)
            {
                const cartItem:HTMLDivElement = document.createElement('div');
                cartItem.classList.add('cartItem');

                const idP:HTMLParagraphElement = document.createElement( 'p');
                idP.classList.add('cart-id');
                idP. innerText = `Cart id: ${cart.id}`;

                const cartProductsDiv:HTMLDivElement = document.createElement( 'div' );
                cartProductsDiv.classList.add('cart-products');

                const productsP:HTMLParagraphElement = document.createElement( 'p' );
                productsP.classList.add('products-p');
                productsP. innerText = `Products:`;

                for (const product of cart.products)
                {
                    const innerDiv:HTMLDivElement = document.createElement( 'div' );
                    innerDiv.classList.add('inner');
                    innerDiv.innerText = `Id: ${product.id} Title: ${product.title}  Price: ${product.price}  Quantity: ${product.quantity}  Total: ${product.total}`;
                    cartProductsDiv.appendChild(innerDiv);
                }

                const cartInfoP:HTMLParagraphElement = document.createElement( 'p' );
                cartInfoP.classList.add('cart-info');
                cartInfoP. innerText = `Total: ${cart.total}\n Discounted total: ${cart.discountedTotal}\n User Id: ${cart.userId}\n Total products: ${cart.totalProducts}\n Total quantity: ${cart.totalQuantity}`;

                const br:HTMLBRElement = document.createElement('br');

                cartItem.append(idP, productsP, cartProductsDiv, cartInfoP);

                cartsDiv.appendChild(br);
                cartsDiv.appendChild(cartItem);
            }
        }
    )


