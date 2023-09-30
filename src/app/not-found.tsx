import React from 'react';
import Container from '../../components/Container';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Container className='flex items-center justify-center py-20'>
        <div className='max-w-2xl min-h-[500px] flex flex-col items-center justify-center gap-y-5'>
        <h2 className='text-4xl font-bold'>Your page not found</h2>

        <p className='text-base font-medium text-center'>
          Oops! The page you are looking for does not exist. It might have been moved or deleted
        </p>

        {/* Add a link to take you back to home */}
        <Link 
        href={"/"}
        className='bg-black text-slate-100 w-44 h-12 rounded-full 
        text-base font-semibold hover:bg-orange-600 hover:text-white
        flex items-center justify-center'>Back to Home
        </Link>
        </div>
    </Container>
  )
}
