"use client";
import classNames from "classnames";
import { useGlobalContext } from "../contexts/GlobalContext";
import { allIcons } from "../helpers/icons";

interface GeneralFilterProps {}

const GeneralFilter: React.FC<GeneralFilterProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <div className="gap-9">
         <div className="flex items-center gap-8 text-foreground">
            <div
               className={classNames(
                  "cursor-pointer hover:scale-125 transition-all duration-300",
                  {
                     "shadow-blue-main": state.selectedContentType === "video",
                  }
               )}
               onClick={() =>
                  dispatch({
                     setState: {
                        selectedContentType: "video",
                     },
                  })
               }
            >
               {allIcons.video}
            </div>
            <div
               className={classNames(
                  "cursor-pointer hover:scale-125 transition-all duration-300",
                  {
                     "shadow-blue-main": state.selectedContentType === "image",
                  }
               )}
               onClick={() =>
                  dispatch({
                     setState: {
                        selectedContentType: "image",
                     },
                  })
               }
            >
               {allIcons.image}
            </div>
            <div
               className={classNames(
                  "cursor-pointer hover:scale-125 transition-all duration-300",
                  {
                     "shadow-blue-main":
                        state.selectedContentType === "article",
                  }
               )}
               onClick={() =>
                  dispatch({
                     setState: {
                        selectedContentType: "article",
                     },
                  })
               }
            >
               {allIcons.article}
            </div>
         </div>
      </div>
   );
};

export default GeneralFilter;
