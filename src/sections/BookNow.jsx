import clsx from "clsx";
import TitleHeader from "../components/TitleHeader";
import Button2 from "../components/Button2";



const BookNow = () => {

    const Para = ({content, bold}) => {
        return (
            <div className={clsx("     text-white         m-4   mb-0 mt-0 sm:mb-0 sm:mt-0 lg:mb-0 lg:mt-0 2xl:mt-0 2xl:mb-0   text-lg    sm:m-4    sm:text-xl    md:text-2xl    lg:text-3xl lg:m-4    xl:text-3xl       2xl:text-4xl 2xl:m-8",
                    bold ? "playfair-font" : "wdxl-font "
            )}>{content}</div>
        )
    }
    


  return (
    <section id = "#locationdown" className="      relative 2xl:flex  flex-col       2xl:justify-center 2xl:items-center       ">
 
  
        <div      
            className="w-full h-full   max-w-[1600px]       bg-no-repeat     sm:bg-cover bg-center         hidden  sm:block       sm:bg-[url('/images/Book.jpg')]      bg-bkg        mt-[100px] " >
            <div            className="pt-[100px]     flex flex-col items-start    justify-center">

                <TitleHeader title = "New Patients are Welcome"  color = "white"/>

                <div className=" flex flex-col">
                    <div className="w-full    flex justify-center">
                        <div className="mt-[10px]   md:mt-[20px]   max-w-[400px]    sm:max-w-[500px]    md:max-w-[600px]    lg:max-w-[700px]    xl:max-w-[800px]  2xl:max-w-[850px]">
                            <Para  content="We’re dedicated to making your visit as comfortable and stress-free as possible. Enjoy our relaxing atmosphere, gentle care, and complimentary scans as part of our commitment to your health and well-being."/>
                        </div>
                    </div>
                    <div  className="w-full   flex justify-center mt-[20px]   md:mt-[40px]      mb-[100px]">
                        <Button2 text = "Book Now"/> 
                    </div>
                </div>
            </div>
        </div>




        <div className="bg-[url('/images/Book2.jpg')]   min-h-[768px]    bg-no-repeat   bg-center     relative    bg-cover   bg-black/40      sm:hidden">
            <div            className="    flex flex-col items-start         justify-center">

                <TitleHeader title = "New Patients are Welcome"  color = "white"/>

                <div className=" flex flex-col">
                    <div className="w-full    flex justify-center">
                        <div className="mt-[10px]   md:mt-[20px]   max-w-[400px]    sm:max-w-[500px]    md:max-w-[600px]    lg:max-w-[700px]    xl:max-w-[800px]  2xl:max-w-[850px]">
                            <Para  content="We’re dedicated to making your visit as comfortable and stress-free as possible. Enjoy our relaxing atmosphere, gentle care, and complimentary scans as part of our commitment to your health and well-being."/>
                        </div>
                    </div>
                    <div  className="w-full  bg-no-repeat  flex justify-center mt-[20px]   md:mt-[40px]      mb-[100px]">
                        <Button2 text = "Book Now"/> 
                    </div>
                </div>
            </div>
        </div>



    </section>
  )
}

export default BookNow