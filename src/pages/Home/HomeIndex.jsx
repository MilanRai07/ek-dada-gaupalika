import AboutIndex from "./about/AboutIndex";
import HeroHomeIndex from "./Hero/HeroHomeIndex";
import NoticeIndex from "./notice/NoticeIndex";
import PublicNotice from "./public-notice/PublicNotice";
import StatisticsIndex from "./statistics/StatisticsIndex";
import TeamIndex from "./Team/TeamIndex";

const HomeIndex = () => {
   return (
      <main>
         <div className="px-[75px] max-lg:px-[45px] max-sm:px-[30px]">
            <NoticeIndex />
            <HeroHomeIndex />
         </div>

         <TeamIndex />

         <div className="px-[75px]  max-lg:px-[45px] max-sm:px-[30px]">
            <AboutIndex />
         </div>

         <StatisticsIndex />
         <div className="px-[75px]  max-lg:px-[45px] max-sm:px-[30px]">
            <PublicNotice />
         </div>
      </main>
   )
}
export default HomeIndex;