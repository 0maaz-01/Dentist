import clsx from "clsx";
import TitleHeader from "../components/TitleHeader";
import SlideAnimation from "../hooks/SlideAnimation";
import { useRef } from "react";



const LocationUp = () => {


    const RightRef = useRef(null);
    const LeftRef = useRef(null);
    const DownRef = useRef(null);

    SlideAnimation(RightRef, { xPercent: 100, duration: 1 });
    SlideAnimation(LeftRef, { xPercent: -100, duration: 1 });
    SlideAnimation(DownRef, { yPercent: -100, duration: 1 });



  
    const Para = ({content, bold}) => {
        return (
            <div className={clsx("     text-white         m-4   mb-0 mt-0 sm:mb-0 sm:mt-0 lg:mb-0 lg:mt-0 2xl:mt-0 2xl:mb-0   text-lg    sm:m-4    sm:text-xl    md:text-2xl    lg:text-3xl lg:m-4    xl:text-3xl       2xl:text-4xl 2xl:m-8",
                    bold ? "playfair-font" : "wdxl-font "
            )}>{content}</div>
        )
    }



  return (
    <section id = "#locationup" className="relative 2xl:flex 2xl:justify-center 2xl:items-center ">

        <div className="w-full h-full max-w-[1400px]   mt-[100px] mb-[100px]" >

            <div className="     md:flex   md:items-start md:justify-start    mb-[100px]">
                <div   ref = {DownRef}   className="md:w-2/3   w-full h-full    ">
                    <TitleHeader    color = "white"         title="4372 Prairie Loop Dr, Fort Worth, TX 76123"/>
                </div>
    
                <div className="w-full h-full      wdxl-font     md:ml-8    lg:ml-16    xl:ml-24  mt-[50px]  md:flex-col md:gap-14 flex     sm:gap-24    gap-0    md:w-1/3">
                  <div   ref = {LeftRef}>
                    <div className="mb-2    md:mb-5">
                      <Para content="Hours :"  bold="true"/>
                    </div>
                    <div className="mb-2    md:mb-5">
                        <Para content="Monday"/>
                        <Para content="8 : 30 AM – 5 : 00 PM"/>
                    </div>
                    <div className="mb-2    md:mb-5">
                      <Para content="Tuesday"/>
                      <Para content="8 : 30 AM – 5 : 00 PM"/>
                    </div>
                    <div className="mb-2    md:mb-5">
                      <Para content="Tuesday"/>
                      <Para content="8 : 30 AM – 5 : 00 PM"/>
                    </div>
                    <div className="mb-2    md:mb-5">
                      <Para content="Wednesday"/>
                      <Para content="8 : 30 AM – 5 : 00 PM"/>
                    </div>
                    <div className="mb-2    md:mb-5">
                      <Para content="Thursday"/>
                      <Para content="8 : 30 AM – 5 : 00 PM"/>
                    </div>
                    <div className="mb-2    md:mb-5">
                      <Para content="Friday"/>
                      <Para content="8 : 30 AM – 5 : 00 PM"/>
                    </div>
                  </div>
                  <div  ref = {RightRef}  className="ml-2">
                    <Para content="Phone :"    bold="true"/>
                    <Para content="+1 (210) 614-8838"  />
                  </div>
                </div>
            </div>

        </div>

    </section>

  );
};

export default LocationUp;


