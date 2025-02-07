import React from 'react'

const Homepage = () => {
    return (
        <div className='w-full h-screen'>
            <div className='heading-text h-[20vh] relative'>
                <img src="https://www.apple.com/v/apple-tv-plus/aj/images/overview/sizzle_startframe__e8oe4l3l27qm_large.jpg" className='object-cover w-screen' alt="" />
            
                <div className='w-fit absolute left-24 top-54'>
                    <h1 className='text-[5vw] font-heading text-white font-bold tracking-tighter leading-none'>
                        All Apple Originals <br />
                        Only on Apple TV+
                    </h1>
                </div>

                <div className='btn-stream absolute left-24 top-96 mt-5'>
                    <button className='bg-white p-4 px-4 rounded-full font-semibold'>Stream now</button>
                </div>

            </div>
        </div>
    )
}

export default Homepage

