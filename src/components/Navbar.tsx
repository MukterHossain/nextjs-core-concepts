'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div>
            <nav className="max-w-7xl mx-auto bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
            <div className="text-2xl font-bold">
                <Link href="/">NextJs</Link>
            </div>
            <div>
            </div>
            <div className="flex space-x-6">
                <Link href="/products" className={`${pathname === '/products' ? "text-blue-500 font-semibold underline": "text-white hover:underline"}`}>Products</Link>
                
                <Link href="/gallery" className={`${pathname === '/gallery' ? "text-blue-500 font-semibold underline": "text-white hover:underline"}`}>Gallery</Link>
                <Link href="/about" className={`${pathname === '/about' ? "text-blue-500 font-semibold underline": "text-white hover:underline"}`}>About</Link>
                <Link href="/contact" className={`${pathname === '/contact' ? "text-blue-500 font-semibold underline": "text-white hover:underline"}`}>Contact</Link>
                {/* <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link> */}
                <Link href="/login" className={`${pathname === '/login' ? "text-blue-500 font-semibold underline": "text-white hover:underline"}`}>Login</Link>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;