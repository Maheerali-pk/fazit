import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";
import { articles } from "../helpers/data";
import ArticleItem from "./ArticleItem";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";

interface RightSectionProps {}

const RightSection: React.FC<RightSectionProps> = () => {
   return (
      <div className="w-full h-full bg-inner-background flex flex-col rounded-[42px] gap-8 p-8 overflow-hidden">
         <Swiper
            direction="vertical"
            freeMode={{ enabled: true, momentum: false }}
            slidesPerView="auto"
            mousewheel={true}
            spaceBetween={24}
            loop={true}
            loopAdditionalSlides={articles.length}
            autoplay={{
               delay: 0,
               disableOnInteraction: false,
               pauseOnMouseEnter: false,
            }}
            speed={5000}
            modules={[FreeMode, Mousewheel, Autoplay]}
            className="h-full vertical-swiper"
         >
            {articles.map((article) => (
               <SwiperSlide className="w-full h-fit" key={article.id}>
                  <ArticleItem item={article} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default RightSection;
