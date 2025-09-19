

const ProductsPage = async() => {
    const res = await fetch("http://localhost:5000/products")
    const products = await res.json()
    console.log(products);
    return (
        <div>
            <h1>This is Products page</h1>
            {products.map((product: any) => <div key={product.id} className="border p-4 my-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p>Price: ${product.price}</p>
            </div>)
            }
        </div>
    );
};

export default ProductsPage;