import Image from "next/image";
import Search from "./Search";
import GeneralFilter from "./GeneralFilter";

interface CenterProps {}

const Center: React.FC<CenterProps> = () => {
   return (
      <div className="flex flex-col  pb-8 gap-3 bg-inner-background rounded-[42px] items-center w-full justify-between h-full">
         <div className="flex flex-col w-full items-center">
            <img
               src="/images/logo.png"
               alt="logo"
               className="w-36 h-auto mb-12"
            ></img>
            <div className="mb-8">Swiper top</div>
            <div className="mb-8">Swiper Middle</div>
            <div className="mb-8">Swiper Bottom</div>
            <GeneralFilter></GeneralFilter>
         </div>
         <Search></Search>
      </div>
   );
};

export default Center;
