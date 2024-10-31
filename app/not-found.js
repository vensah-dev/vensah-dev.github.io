import Link from 'next/link'
 
export default function NotFound() {
  return( 
    <div className='flex justify-center items-center h-screen w-screen absolute z-50 bg-primary '>
      <div className='flex-col justify-center'>

        <h1 className='block text-[160px] font-bold text-center bg-gradient-to-r from-accent to-accentSecondary bg-clip-text text-transparent p-0 leading-none'>404</h1>
        <h1 className='block text-base text-white75 font-light text-center pb-8 pt-2'>You <p className='italic inline'>really&nbsp;</p> thought you were onto something &nbsp; 🤦‍♂️</h1>


        <Link href="/" className='block text-base font-medium text-accent text-center italic'>Just go back</Link>
      </div>
    </div>
  )
}