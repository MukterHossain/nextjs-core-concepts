import Image from 'next/image';
import nextImage from "@/assets/nextjs-logo.png"

const Gallerypage = () => {
    return (
        <div>
            <h1>This is Gallery page</h1>
            <img src="https://images.seeklogo.com/logo-png/32/1/next-js-logo-png_seeklogo-321806.png" width={500} height={500} alt="logo" className='mx-auto' />

            <h1>midle image</h1>
            <img src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbHN8ZW58MHx8MHx8fDA%3D" width={500} height={500} alt="logo" className='mx-auto' />
            
           
            <h1>Next image localt</h1>
            <Image src={nextImage} width={500} height={500} alt="next photo" className='mx-auto' />

            <h1>Next image public</h1>
            <Image src={'/nextjs-logo.png'} width={500} height={500} alt="next photo" className='mx-auto' />
            <h1>Next image public</h1>
            <Image src={nextImage} width={500} height={500} alt="next photo" className='mx-auto' />

            <h1>Next image</h1>
            <Image src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlsbHN8ZW58MHx8MHx8fDA%3D" width={500} height={500} alt="next photo" className='mx-auto' />
        </div>
    );
};

export default Gallerypage;