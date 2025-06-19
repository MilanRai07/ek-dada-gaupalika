import React, { useRef, useState } from 'react'
import GalleryCard from '../../components/cards/GalleryCard'
import { ReactComponent as Triangle } from '../../assets/svg/triangle.svg';
// import { useGetBlogsQuery } from '../../services/Blogs'
import GalleryCardShimmer from '../../components/shimmer/GalleryCardShimmer';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';
import Hero from '../../assets/image/Hero.webp'


const ShowAbout = () => {
    const [page, setPage] = useState(1);
    const limit = 9;
    const category = 'Projects'
    const upRef = useRef(null);

    // const { data, isFetching, isError, error } = useGetBlogsQuery({ page, limit, category })
    // let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 6 }
    // const { totalPages, currentPage } = pagination;

    // const goTop = () => {
    //     if (upRef.current) {
    //         const y = upRef.current.getBoundingClientRect().top + window.scrollY - 150; // Adjust offset as needed
    //         window.scrollTo({ top: y, behavior: 'smooth' });
    //     }
    // }
    // const onPageChange = (page) => {
    //     setCurrentPage(page);
    // }
    const data = {
        blogs: [
            {
                title: "title 1",
                slug : "",
                id:0,
                content : "No content available No content available No content available No content availableNo content availableNo content available No content available No content available",
                image_url : Hero,
            },
            {
                title: "title 2",
                slug : "",
                id:1,
             content : "No content available No content available No content available No content availableNo content availableNo content available No content available No content available",
                image_url : Hero,
            },
            {
                title: "title 3",
                slug : "",
                id:2,
            content : "No content available No content available No content available No content availableNo content availableNo content available No content available No content available",
                image_url : Hero,
            },
        ]
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            ref={upRef}
            className='px-[75px] max-[784px]:px-[30px] mb-20 mt-16 max-[784px]:mb-10 max-[784px]:mt-12 max-[418px]:mb-7 max-[418px]:mt-6'
        >
            <div className='w-[600px] max-md:w-[400px] max-[520px]:!w-[300px] mx-auto mb-12'>
              <h1 className='font-extrabold text-[24px] max-md:text-[18px] text-MainRed text-center'> Our Events & Activities</h1>
              <p className='text-[15px] text-center max-md:text-xs text-black/80'>Discover the rich cultural heritage and community spirit through our captured moments</p>
            </div>
            <div className=' '>
                {/*     {isFetching && (
                    <div className='grid grid-cols-3 gap-8 max-[988px]:grid-cols-2 max-[658px]:grid-cols-1 h-auto'>
                        {
                            [...Array(3)].map((_, i) => <ProjectCardShimmer key={i} />)
                        }
                    </div>
                )}
                {isError && (
                    <div className="col-span-full text-center loading">
                        <p>Sorry, we cannot get projects at the moment...</p>

                    </div>
                )}
                {!isFetching && !isError && data?.blogs?.length === 0 && (
                    <div className="col-span-full text-center loading">
                        <p>No Projects available at the moment...</p>
                    </div>
                )} */}

                {/* {!isFetching && !isError && data?.blogs?.length > 0 &&
                    ( */}

                <div className='grid grid-cols-3 gap-6 max-[988px]:grid-cols-2 max-[658px]:grid-cols-1' >
                    {
                        data.blogs.map((item, index) => {
                            const {
                                title = "Untitled",
                                slug = "",
                                id,
                                content = "No content available",
                                image_url = "",
                            } = item;

                            return (
                                <div key={id ?? index}>
                                    <GalleryCard
                                        title={title}
                                        content={content}
                                        image={image_url}
                                        slug={slug}
                                    />
                                </div>
                            );
                        })}

                </div>
                {/* )} */}
            </div>

            {/* {totalPages > 1 && (
                <div className='flex items-center justify-center gap-3 h-[43px] mt-16'>
                    <button
                        className="md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-lightblue hover:bg-hoverblue transition rounded-full relative cursor-pointer"
                        onClick={() => {
                            setPage(currentPage - 1)
                            goTop()
                        }
                        }
                        disabled={currentPage === 1}

                    >
                        <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                    </button>

                    <ReactPaginate
                        previousLabel={null}
                        nextLabel={null}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={2}
                        onPageChange={(event) => {
                            setPage(event.selected + 1);
                            goTop();
                        }}
                        containerClassName={`
                       flex items-center justify-center gap-[4px]
                       bg-lightblue rounded-full px-[10px] py-[3px]
                       md:h-[38px] h-[30px] transition-all duration-300
                   `}
                        pageClassName={`
                       w-[24px] h-[24px] md:w-[30px] md:h-[30px]
                       flex items-center justify-center
                       text-white text-[12px] md:text-sm
                       rounded-full cursor-pointer hover:text-black
                       transition-all duration-300
                   `}
                        activeClassName={`!bg-white !text-black font-bold`}
                        forcePage={currentPage - 1}
                    />


                    <button
                        className="md:w-[38px] md:h-[38px] w-[29px] h-[29px] bg-lightblue hover:bg-hoverblue transition rounded-full relative rotate-180 cursor-pointer"
                        onClick={() => {
                            goTop()
                            setPage(currentPage + 1)
                        }}
                        disabled={currentPage === totalPages}
                    >
                        <Triangle className="w-[15px] max-md:w-[10px] max-md:h-[15px] h-[17px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                    </button>
                </div>
            )} */}
        </motion.section>
    )
}

export default ShowAbout;