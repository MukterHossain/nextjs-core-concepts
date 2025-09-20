'use client'

import { useEffect } from "react";

const ErrorPage = ({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) => {

     useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
    console.log(error)
    return (
        <div>
            <p className='text-3xl text-red-500 text-center py-5'>Something went wrong</p>
            <p className='text-3xl text-red-500 text-center py-5'>{error?.message}</p>
            <div className="mt-10 text-center">
                <button onClick={() => reset()} className="bg-black text-white py-2 px-5 rounded-lg shadow-lg hover:bg-green-800 transition-all">Try Againg</button>
            </div>
        </div>
    );
};

export default ErrorPage;