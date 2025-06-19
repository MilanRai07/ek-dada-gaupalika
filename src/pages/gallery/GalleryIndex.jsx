import Hero from '../../assets/image/Hero.webp'
import CommonHero from '../../components/heroComponents/CommonHero'
import ShowAbout from './ShowAbout'

const GalleryIndex = () => {
    return (
        <main>
            <CommonHero img={Hero} title='Photo Gallery' />
            <ShowAbout/>
        </main>
    )
}

export default GalleryIndex