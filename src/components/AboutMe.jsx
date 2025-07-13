import SlideAnimation from "../hooks/SlideAnimation";
import Para from "./Para";
import clsx from "clsx";
import { useRef } from "react";



export const AboutMe = ({linker, namer, orient, details, page, altinfo}) => {

    const ImgRef = useRef(null);
    const TextRef = useRef(null);

    SlideAnimation(ImgRef, { xPercent: 100, duration: 1 });
    SlideAnimation(TextRef, { xPercent: -100, duration: 1 });



    const OneInfo = ({ link, name }) => {
        return (
            <div className =  {clsx("     lg:mt-[0px]     p-[16px]       sm:p-[32px]            lg:flex lg:justify-center lg:items-center               2xl:flex 2xl:justify-center 2xl:items-center ",
                page === "about"  &&  "lg:w-[100vw]   lg:h-[60vh]    lg:max-h-[500px]           2xl:max-w-[1800px] ",
                page === "main"   &&  "2xl:max-w-[1400px] "
             )}>
                

                <div   ref = {orient === "1"? ImgRef : TextRef}  
                    className = {clsx("   flex justify-center items-center       mb-[30px]         sm:mb-[40px]        lg:w-[35vw] ",
                    orient === "1" && "lg:order-2",
                    orient === "0" && "lg:order-1"
                
                )}>
                    <img alt = {altinfo} className={clsx("w-[40vw]   min-w-[250px]         sm:min-w-[450px]        md:min-w-[450px]    sm:w-[40vw]          md:w-[30vw]          lg:w-[30vw] lg:min-w-[400px]        2xl:max-w-[450px]",
                            page === "about"    &&        "rounded-full        sm:min-w-[450px]        md:min-w-[500px]           2xl:max-w-[550px]"
                    )
                    } src = {link} ></img>
                </div>

                {/*ref = {TextRef}*/}
                <div 
                    ref = {orient === "1"? TextRef : ImgRef}  
                    className= {clsx("max-w-[450px]       sm:max-w-[700px]    md:max-w-[800px]     2xl:max-w-[600px]    xl:max-w-[600px]             text-bold rounded-xl        sm:p-[16px] lg:p-[32px]         lg:w-[65vw]     ",
                    orient === "1" && "lg:order-1",
                    orient === "0" && "lg:order-2",
                    page === "about"  &&          "2xl:min-w-[1000px]"              
                )}>

                        <div className=" flex justify-center items-center  lg:items-start lg:justify-start ">
                            <div className=" m-2 font-semibold text-4xl        sm:text-6xl sm:m-2 sm:p-[4px]        lg:text-6xl lg:m-4       xl:text-7xl  xl:pl-[0px]    playfair-font      text-white    2xl:pl-[12px]
                                        ">
                                    {name}
                            
                            </div>
                        </div>
                        
                        <div className=" rounded-xl gap-[12px] ">
                            {details.map((detail, index) => {
                                return(
                                    <Para  color = "white"  content = {detail}  key = {index} />
                                )
                            })}

                        </div> 

                </div>
                    

            </div>
        )
    }

  


  return (
    <section className={clsx("relative  text-white flex      items-center justify-center ",
                            page === "about"          &&        "lg:mt-[250px] xl:mt-[0px]"
    )}>
        <div className= {clsx("2xl:flex 2xl:justify-center 2xl:items-center 2xl:flex-col    min-h-[1000px]   max-h-[2000px]      lg:min-h-[700px]    2xl:min-h-[800px]",
                            page === "about"   &&       "mb-[50px]  md:mb-[100px]"
        )}>
               <OneInfo link={linker}  name = {namer}/>     
        </div>
    </section>
  )
}

export default AboutMe;