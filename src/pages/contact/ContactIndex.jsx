import Hero from '../../assets/image/Hero.webp'
import CommonHero from '../../components/heroComponents/CommonHero'
import { ReactComponent as Phone } from '../../assets/svg/phone.svg'
import { ReactComponent as Mail } from '../../assets/svg/mail.svg'
import { ReactComponent as Location } from '../../assets/svg/location.svg'
import ContactForm from '../../components/form/ContactForm'



const ContactIndex = () => {
    return (
        <main>
            <CommonHero img={Hero} title='Contact Us' />
            <section className='px-[75px] max-[784px]:px-[30px] mb-20 mt-16 max-[784px]:mb-10 max-[784px]:mt-12 max-[418px]:mb-7 max-[418px]:mt-6'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10'>
                    <div className='shadow-[0_4px_10px_2px_rgba(0,0,0,0.15)] overflow-hidden rounded-lg cursor-pointer flex flex-col gap-4 max-[862px]:gap-2 max-sm:gap-1
                    items-center justify-center w-full h-[250px] max-[862px]:h-[200px] max-sm:h-[180px] '>
                        <Phone className='w-[60px] h-[50px]' />
                        <h1 className='font-bold text-[20px] max-[862px]:text-[18px] max-sm:text-[16px]'>Calling Support</h1>
                        <p className='font-medium text-[15px] text-black/70  max-[862px]:text-[14px] max-sm:text-[13px]'>
                            <a href='tel:9812345678' className='hover:text-MainRed'>
                                <span>9812345678 ,</span>
                            </a>
                            <a href='tel:012345' className='hover:text-MainRed'>
                                <span>012345</span>
                            </a>
                        </p>
                    </div>
                    <div className='shadow-[0_4px_10px_2px_rgba(0,0,0,0.15)] overflow-hidden rounded-lg cursor-pointer flex flex-col gap-4 max-[862px]:gap-2 max-sm:gap-1
                     items-center justify-center w-full h-[250px] max-[862px]:h-[200px] max-sm:h-[180px] '>
                        <Location className='w-[50px] h-[50px]' />
                        <h1 className='font-bold text-[20px] max-[862px]:text-[18px] max-sm:text-[16px]'>Address</h1>
                        <p className='font-medium text-[15px] text-black/70  max-[862px]:text-[14px] max-sm:text-[13px]'>
                            Kathmandu, Nepal
                        </p>
                    </div>
                    <div className='shadow-[0_4px_10px_2px_rgba(0,0,0,0.15)] overflow-hidden rounded-lg cursor-pointer flex flex-col gap-4 max-[862px]:gap-2 max-sm:gap-1
                     items-center justify-center w-full h-[250px] max-[862px]:h-[200px] max-sm:h-[180px] '>
                        <Mail className='w-[60px] h-[60px]' />
                        <h1 className='font-bold text-[20px] max-[862px]:text-[18px] max-sm:text-[16px]'>Email Information</h1>
                        <p className='font-medium text-[15px] max-[862px]:text-[14px] max-sm:text-[13px] text-black/70 hover:text-MainRed' >
                            <a href='mailto:demo@gmail.com' >
                                demo@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
                <ContactForm />
            </section>
        </main>
    )
}

export default ContactIndex