import clsx from "clsx";
import TitleHeader from "../components/TitleHeader";
import Button from "../components/Button";



const LocationDown = () => {


    const Para = ({content, bold}) => {
        return (
            <div className={clsx("     text-[#262424]         m-4   mb-0 mt-0 sm:mb-0 sm:mt-0 lg:mb-0 lg:mt-0 2xl:mt-0 2xl:mb-0   text-lg    sm:m-4    sm:text-xl    md:text-2xl    lg:text-3xl lg:m-4    xl:text-3xl       2xl:text-4xl 2xl:m-8",
                    bold ? "playfair-font" : "wdxl-font "
            )}>{content}</div>
        )
    }
    


  return (
    <section id = "#locationdown" className="relative 2xl:flex 2xl:justify-center 2xl:items-center ">
        <div className="w-full h-full max-w-[1400px]   mt-[100px] mb-[100px]" >
            <div className="mt-[100px]">
                <TitleHeader  title = "New Patients Are Welcome"/>
                <div className="w-full    flex justify-center">
                    <div className="mt-[10px]   md:mt-[20px]   max-w-[400px]    sm:max-w-[500px]    md:max-w-[600px]    lg:max-w-[700px]    xl:max-w-[800px]  2xl:max-w-[850px]">
                        <Para  content="We’re dedicated to making your visit as comfortable and stress-free as possible. Enjoy our relaxing atmosphere, gentle care, and complimentary scans as part of our commitment to your health and well-being."/>
                    </div>
                </div>
                <div  className="w-full   flex justify-center mt-[20px]   md:mt-[40px]">
                    <Button  name = "Book Now"      buttoncolor = "#000000"     link = "/contact"    textcolor = "#fff"     linkcolor = "#eac59d"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LocationDown