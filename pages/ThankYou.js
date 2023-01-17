import Link from 'next/link'
import React from 'react'

const ThankYou = () => {
    return (
        <div className='flex flex-col items-center justify-center' style={{ height: '90vh' }}>
            <h2 className='text-4xl'>Thank You For Contacting me</h2>
            <Link href='/' className='text-red-500' >Goback</Link>
        </div>
    )
}

export default ThankYou