import { Swiper, SwiperSlide } from "swiper/react";
import { allVideoItems } from "../helpers/data";
import ArticleItem from "./ArticleItem";
import { Autoplay, FreeMode, Mousewheel } from "swiper/modules";
import VideoItem from "./VideoItem";

interface LeftSectionProps {}

const LeftSection: React.FC<LeftSectionProps> = () => {
   return (
      <div className="w-full h-full bg-inner-background flex flex-col rounded-[42px] gap-8 p-8 overflow-hidden">
         <Swiper
            direction="vertical"
            freeMode={{ enabled: true, momentum: false }}
            slidesPerView="auto"
            mousewheel={true}
            spaceBetween={24}
            loop={true}
            loopAdditionalSlides={allVideoItems.length}
            autoplay={{
               delay: 0,
               disableOnInteraction: false,
               pauseOnMouseEnter: false,
            }}
            speed={5000}
            modules={[FreeMode, Mousewheel, Autoplay]}
            className="h-full vertical-swiper"
         >
            {allVideoItems.map((article) => (
               <SwiperSlide className="w-full h-fit" key={article.id}>
                  <VideoItem item={article} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default LeftSection;
