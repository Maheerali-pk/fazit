import { IArticle } from "../helpers/data";
import { allIcons } from "../helpers/icons";

interface ArticleItemProps {
   item: IArticle;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ item }) => {
   return (
      <div className="flex flex-col gap-2 p-5 bg-bg-main rounded-3xl  h-fit">
         <div className="justify-between items-center flex">
            <div className="gap-2 flex items-center">
               <img src={item.icon} className="h-3 w-3"></img>
               <div className="text-[0.5rem] text-foreground">
                  {item.channel}
               </div>
            </div>
            <div className="text-foreground">{allIcons.threeDots}</div>
         </div>
         <div className="text-foreground font-medium text-xs">{item.text}</div>
         <div className="flex items-center gap-2">
            <div className="text-foreground cursor-pointer hover:scale-125 transition-all duration-300">
               {allIcons.like}
            </div>
            <div className="text-foreground cursor-pointer hover:scale-125 transition-all duration-300">
               {allIcons.dislike}
            </div>
         </div>
      </div>
   );
};

export default ArticleItem;
