import { allIcons } from "../helpers/icons";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
   return (
      <div className="flex gap-3 p-3 bg-bg-main  rounded-[100px] items-center w-3xl ">
         <div className="p-3.5 bg-inner-background rounded-[100px] flex gap-3 items-center w-full">
            <div className="text-foreground">{allIcons.searchIcon}</div>
            <input
               placeholder="Search"
               className="bg-transparent outline-none border-none text-foreground placeholder:text-foreground flex-1"
            ></input>
            <div className="text-foreground">{allIcons.mic}</div>
         </div>
         {allIcons.iqra}
      </div>
   );
};

export default Search;
