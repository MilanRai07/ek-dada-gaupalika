import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';
import { useState } from "react";
import { ReactComponent as Back } from '../../assets/svg/blackBack.svg';
import Logo from '../../assets/image/logo.webp';

import { motion } from "framer-motion";

const HamDrop = ({ setShowHam }) => {

    const [showMedia, setShowMedia] = useState(false);

    const intro = [
        {
            name: 'Our Mission and Vision',
            path: '/our-mission-vision',
        },
        {
            name: 'Elected Officials',
            path: '/elected-officials',
        }
    ];

    const clickItem = (name) => {
        if (name === 'introduction') {
            setShowMedia(true);

        } else {

            setShowMedia(false);
            setShowHam(false);
        }
    };

    const handleBack = () => {
        setShowMedia(false);
        setShowHam(true);
    };

    return (
        <div className="bg-white border-[0.5px] border-black/50 w-full p-6 h-auto text-black ">
            <div className={`flex w-full justify-between items-center mb-5`}>
                {showMedia ? (
                    <Back className="w-[20px] h-[20px] text-black" onClick={handleBack} />
                ) : (
                    <NavLink to='/' onClick={() => setShowHam(false)}>
                        <img src={Logo} className="w-[90px] max-m-d:w-[70px]" alt="Logo" />
                    </NavLink>
                )}
                <Cross className='w-[35px] h-[35px] stroke-black' onClick={() => setShowHam(false)} />
            </div>

            {
                !showMedia && (
                    <ul className="Flex-Col space-y-4 list-none h-auto mb-5 justify-between">

                        <li
                            className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'
                            onClick={() => clickItem('introduction')}
                        >
                            <NavLink to='/' className='font-medium text-black max-1md:text-xs'>Introduction</NavLink>
                        </li>
                        <li
                            className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'
                            onClick={() => clickItem('digitalProfile')}
                        >
                            <NavLink to='/' className='font-medium text-black max-1md:text-xs'>Digital Profile</NavLink>
                        </li>
                        <li
                            className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'
                            onClick={() => clickItem('gallery')}
                        >
                            <NavLink to='/' className='font-medium text-black max-1md:text-xs'>Gallery</NavLink>
                        </li>
                        <li
                            className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'
                            onClick={() => clickItem('contact')}
                        >
                            <NavLink to='/' className='font-medium text-black max-1md:text-xs'>Contact</NavLink>
                        </li>
                    </ul>
                )
            }

            {
                showMedia && (
                    <motion.ul className="Flex-Col space-y-4 list-none h-auto mb-5 justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        {
                            intro.map((item, index) => (
                                <li key={index} className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'>
                                    <NavLink
                                        to={item.path}
                                        className='font-medium text-black max-1md:text-xs'
                                        onClick={() => setShowHam(false)} // closes menu on click
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </motion.ul>
                )
            }

        </div>
    );
};

export default HamDrop;