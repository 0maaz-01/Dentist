import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button2 from "./Button2";
import clsx from "clsx";



const Hero = ({ text1, text2, info, buttontext,  page}) => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text ",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id = {`#${page}`} className="relative 2xl:flex 2xl:justify-center 2xl:items-center ">

        <div className={clsx("w-full h-screen bg-no-repeat bg-cover bg-center  2xl:max-h-[1300px] 2xl:max-w-[3000px]   max-h-[700px]   sm:max-h-[1000px]   lg:max-w-[1536px]    md:max-w-[1536px]", 
             page === "hero"        &&       "bg-[url('/images/BG2.webp')]           md:bg-[url('/images/BG2.jpg')]",
             page === "location"    &&       "bg-[url('/images/Entrance.jpg')]       md:bg-[url('/images/Entrance.jpg')]",
        )} >
          

            <div className="flex items-center justify-center h-full text-white bg-black/40 playfair-font ">
              <header className="     md:w-full w-screen md:px-20 px-5 lg:relative  lg:flex  lg:items-center">
                  <div className="flex flex-col gap-4 top-24 lg:top-0  lg:left-5  absolute justify-center items-center  lg:mt-[-200px]">
                    <div className="hero-text  ">
                      
                      {text1  && 
                          <h1>
                              { text1 }
                          </h1>
                      }

                      {text2  && 
                          <h1>
                              { text2 }
                          </h1>
                      }

                    </div>

                    { info && 
                        <p className="hero-text    text-white relative z-10 pointer-events-none  text-base md:text-xl xl:text-2xl">
                            { info }
                        </p>
                    }

                    {    buttontext &&      <Button2  text = {buttontext}/> }


                  
                  </div>
                </header>

            </div>
        </div>

    </section>

  );
};

export default Hero;