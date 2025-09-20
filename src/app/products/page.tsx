import ProductCard from "@/components/Products/ProductCard";
import { Iproduct } from "@/type";


const ProductsPage = async() => {
    const res = await fetch("http://localhost:5000/products", {
        // cache: "force-cache",
        cache: "no-store",
        // next: {
        //     revalidate: 30
        // }
    })
    const products = await res.json()
    // console.log(products);
    return (
        <div >
            <h1 className="text-3xl">My products</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                products.map((product: Iproduct) => <ProductCard key={product?.id} product={product}></ProductCard>)
            }
            </div>
        </div>
    );
};

export default ProductsPage;