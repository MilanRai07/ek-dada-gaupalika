import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/image/logo.webp';
import { FooterMedia } from '../../localData/footer/FooterMedia';

const CompanyLinks = () => {
    return (
        <div className='flex flex-col gap-4 max-[996px]:gap-2 max-[996px]:items-center'>
            <NavLink to='/'>
                <div className='w-[100px] max-[996px]:w-[80px] max-[996px]:h-[60px] h-[93px]' >
       
                        <img
                            src={Logo}
                            className='w-full h-full '
                            alt='Logo'
                        />
             
                </div>

            </NavLink>
            <p className='font-medium text-xs leading-5 max-[996px]:text-center max-[996px]:w-[600px] max-[679px]:w-[400px] max-[539px]:w-[300px]'>
                Building stronger communities through transparency and engagement. Connect with us for the latest updates and
                civic opportunities.
            </p>
            <div>
                <div className='flex gap-3'>
                    {
                        FooterMedia.map((item, index) => {
                            const { icon, path } = item;
                            return (
                                <a
                                    href={path}
                                    key={index}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="w-[40px] h-[40px] max-[996px]:w-[30px] max-[996px]:h-[30px] rounded-full flex justify-center items-center bg-MainRed
                                    hover:bg-MainRed/90 transition-all duration-300 ease-in-out
                                    ">
                                        {icon}

                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default CompanyLinks;