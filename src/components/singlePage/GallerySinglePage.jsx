import React, { useState } from 'react'
import T1 from '../../assets/image/temp/1.png'
import T2 from '../../assets/image/temp/2.png'
import T3 from '../../assets/image/temp/3.png'
import T4 from '../../assets/image/temp/4.png'
import T5 from '../../assets/image/temp/5.png'
import T6 from '../../assets/image/temp/6.png'
import T7 from '../../assets/image/temp/7.png'
import T8 from '../../assets/image/temp/8.png'
import T9 from '../../assets/image/temp/9.png'
import T10 from '../../assets/image/temp/10.png'
import T11 from '../../assets/image/temp/11.png'
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';

const images = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11]


const GallerySinglePage = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <main className='px-[75px] max-[784px]:px-[30px] mb-20 mt-16 max-[784px]:mb-10 max-[784px]:mt-12 max-[418px]:mb-7 max-[418px]:mt-6'>
            <div className='w-full shadow-[0_4px_10px_2px_rgba(0,0,0,0.15)] py-3 rounded-[10px] flex justify-center items-center'>
                <div className='w-[600px] max-md:w-[400px] max-[520px]:!w-[300px] mx-auto space-y-3'>
                    <h1 className='font-extrabold text-[24px] max-md:text-[18px] text-MainRed text-center'> Our Events & Activities</h1>
                    <p className='text-[15px] text-center max-md:text-xs text-black/80'>Medical checkup and health awareness program for villagers and community members</p>
                    <p className='text-[15px] text-center max-md:text-xs'>
                        <span className='font-bold'>Date:</span> <span className='ml-0.5 mr-2 text-black/80'>2025-3-15</span>
                        <span className='font-semibold text-black/80'>|</span>
                        <span className='font-bold ml-2'>Photos:</span><span className='ml-1 text-black/80'>12 Photos</span>
                    </p>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {images.map((item, index) => (
                    <div key={index} className='w-full h-[250px] overflow-hidden rounded-lg cursor-pointer'
                        onClick={() => setSelectedImage(item)}
                    >
                        <img
                            src={item}
                            alt={`gallery-${index}`}
                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                >
                    <button onClick={() => setSelectedImage(null)} className='w-[48px] h-[48px] absolute z-10 top-7 right-7 bg-white rounded-full
                    flex justify-center items-center
                    '>
                        <Cross className='m-d:w-[50px] m-d:h-[50px] w-[38px] h-[38px] cursor-pointer stroke-black '

                        />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="max-w-[90%] max-h-[90%] max-lg:absolute max-lg:top-[10%] rounded-lg shadow-lg"
                    />
                </div>
            )}
        </main>
    )
}

export default GallerySinglePage