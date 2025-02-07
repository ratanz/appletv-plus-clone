import React from 'react'

const Homepage = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='heading-text relative h-screen'>
                {/* Hero Image */}
                <img 
                    src="https://www.apple.com/v/apple-tv-plus/aj/images/overview/sizzle_startframe__e8oe4l3l27qm_large.jpg" 
                    className='object-cover w-full h-full' 
                    alt="Apple TV+ Hero" 
                />
            
                {/* Hero Content */}
                <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-24'>
                    <h1 className='text-[8vw] md:text-[5vw] font-poppins text-white font-bold tracking-tighter leading-tight md:leading-none max-w-4xl'>
                        All Apple Originals <br />
                        Only on Apple TV+
                    </h1>

                    {/* CTA Button */}
                    <div className='mt-8 md:mt-12'>
                        <button className='bg-white hover:bg-gray-100 transition-colors px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-semibold'>
                            Stream now
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional Content Section */}
            <div className='px-6 md:px-24 py-16 bg-black'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {/* Add your content cards here */}
                </div>
            </div>
        </div>
    )
}

export default Homepage

