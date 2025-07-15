import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";



gsap.registerPlugin(ScrollTrigger);



const Office = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase      mb-[100px]  ">
      <div className="w-full            max-w-[1600px]      mb-24    ">
        <div  className=" lg:mb-[50px]">
            <TitleHeader title = "Our Office"/>
        </div>
        <div className="showcaselayout      gap-24">
          <div ref={rydeRef} className="first-project-wrapper mt-[50px]   xl:mt-[25px]      max-h-[1400px]    ">
            <div className="image-wrapper           rounded-4xl">
              <img     
                  className="rounded-4xl"      
                  src="/images/Office2.jpg" 
                  alt="Comfortable waiting hall at Pure Harmony Dental" 
              />

            </div>

          </div>

          <div className="project-list-wrapper overflow-hidden    gap-24  md:gap-12 ">
            <div className="project       " ref={libraryRef}>       {/*bg-[#FFEFDB]*/}
              <div className="image-wrapper     min-h-[350px]    rounded-4xl     max-h-[700px]    bg-black/60">
                <img    className="rounded-4xl    max-h-[700px]"
                  src="/images/Entrance.jpg"
                  alt="Entrance of Pure Harmony Dental clinic" 

                />
              </div>

            </div>

            <div className="project         " ref={ycDirectoryRef}>     {/*bg-[#FFE7EB]*/}
              <div className="image-wrapper     bg-black/60     min-h-[350px]    max-h-[700px]    rounded-4xl">
                <img    className=" rounded-2xl     cover-fit      max-h-[700px] "    
                       src="/images/Desk.jpg"    
                       alt="Reception area of Pure Harmony Dental clinic" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
