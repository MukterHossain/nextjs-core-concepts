import { Iproduct } from "@/type";
import Image from "next/image";
import Link from "next/link";




const ProductCard = ({ product }: { product: Iproduct }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full h-52 object-contain">
                <Image src={product?.image} alt={product?.product_name} width={1500} height={800} className="rounded-lg h-56"></Image>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-800">{product?.product_name}</h1>
                    <span className="ml-4 bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wide py-1 px-3 rounded-lg">{product?.category}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">Brand: <span className="font-medium">{product?.brand}</span></p>
                <p className="text-sm text-gray-600 mb-1">$ <span className="font-medium">{product?.price}</span></p>
                <div className="mt-6 flex justify-between items-center">
                    <Link href={`/products/${product?.id}`} className="bg-black text-white py-2 px-5 rounded-lg shadow-lg hover:bg-green-800 transition-all">See Details</Link>
                    <button className="bg-black text-white py-2 px-5 rounded-lg shadow-lg hover:bg-green-800 transition-all">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;