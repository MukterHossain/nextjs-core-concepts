import Link from "next/link";


const Navbar = () => {
    return (
        <div>
            <nav className="max-w-7xl mx-auto bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
            <div className="text-2xl font-bold">
                <Link href="/">NextJs</Link>
            </div>
            <div>
            </div>
            <div className="flex space-x-6">
                <Link href="/products" className="hover:text-gray-300">Products</Link>
                <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                {/* <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link> */}
                <Link href="/login" className="hover:text-gray-300">Login</Link>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;