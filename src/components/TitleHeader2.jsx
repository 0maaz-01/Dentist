import clsx from "clsx";

const TitleHeader = ({ title, color }) => {
  return (
    <div className="flex flex-col items-center gap-5 ">
      {/* [#981053]  */}

          <div className="flex justify-center items-center  lg:items-start lg:justify-start  ">
              <div className={clsx("m-2 font-semibold text-3xl    text-pink    sm:text-4xl sm:m-2 sm:p-[4px]     md:text-5xl      lg:text-6xl lg:m-4       xl:text-7xl  xl:pl-[0px]    playfair-font text-black    2xl:pl-[12px]",
                  color === "white"  &&   "text-white",
                  color === "black"  &&   "text-black" ,
                  color === "pink"   &&   "text-pink"
              )}>
                
                  {title}</div>
          </div>
    </div>
  );
};

export default TitleHeader;
