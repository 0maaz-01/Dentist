import clsx from "clsx";

const Para = ({content, color}) => {
    return (
        <div className={clsx("wdxl-font              m-4  text-base    sm:m-4 sm:mb-6 sm:text-lg    md:text-xl    lg:text-[22px] lg:m-4         2xl:text-2xl 2xl:lg:m-8", 
                       color === "black"   &&    "text-[#262424]",
                       color === "white"   &&    "text-white"
        )}>{content}</div>
    )
}

export default Para;
