"use client";
import Image from "next/image";

import LeftSection from "./components/LeftSection";
import Center from "./components/Center";
import RightSection from "./components/RightSection";
import { useTheme } from "./contexts/ThemeContext";

export default function Home() {
   const { theme } = useTheme();
   return (
      <div
         className="w-screen h-screen bg-bg-page p-2.5 overflow-auto "
         data-theme={theme}
      >
         <div className="grid grid-cols-[18rem_auto_18rem] gap-x-8 w-full h-full">
            <LeftSection></LeftSection>
            <Center></Center>
            <RightSection></RightSection>
         </div>
      </div>
   );
}
