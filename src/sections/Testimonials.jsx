import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import { motion } from "framer-motion";
import TestimonialCard from "../components/TestimonialCard";


const Testimonials = () => {
    // #af0303                          [${color}]                     #700a5d   #610951



  return (
  <div className="w-[100vw] flex justify-center items-center    playfair-font     mt-[100px] mb-[100px]   sm:mt-[150px] sm:mb-[150px]  md:mt-[200px] md:mb-[200px]   lg:mb-[100px]    lg:mt-[300px]">
    <div className="w-[100vw] min-h-[500px]      sm:w-[100vw] sm:min-h-[550px]  overflow-hidden       md:min-h-[600px] md:w-[100vw]          lg:w-[100vw] lg:h-[100vh]       lg:max-h-[720px]         xl:min-h-[800px]   xl: max-h-[900px]    max-w-[1600px]">

            <TitleHeader
                title="What People Say About Us ?"
            />
        

        <div className="flex gap-[20px]     sm:gap-[20px]       md:gap-[20px]          lg:gap-[20px]">
          <motion.div initial = {{ x:0 }}                           // initial position
                      animate = {{ x:"-100%" }}                     // to move the div in the left to right direction
                      transition = {{duration:60, repeat:Infinity, ease:"linear"}}>
            <div className="flex         gap-[20px]     sm:gap-[20px]       md:gap-[20px]          lg:gap-[20px]">
            {/*<div className="flex         ml-[20px] gap-[15px]    sm:ml-[20px] sm:gap-[15px]      md:ml-[20px] md:gap-[20px]          lg:gap-[20px] lg:ml-[20px] lg:mr-[20px]">*/}
              {testimonials.map((testimonial, index) => (
                  // index < 1 &&  (<TestimonialCard path = {testimonial.imgPath} name = {testimonial.name} mention={testimonial.mentions} review = {testimonial.review}/>)
                  <TestimonialCard key = {index} color = "#00000099" path = {testimonial.imgPath} name = {testimonial.name} mention={testimonial.mentions} review = {testimonial.review}/>
                  
              ))
            }
            </div>
          </motion.div>

          <motion.div initial = {{ x:0 }}                           // initial position
                      animate = {{ x:"-100%" }}                     // to move the div in the left to right direction
                      transition = {{duration:60, repeat:Infinity, ease:"linear"}}   // linear will help to remove the time when there is a gap in both divs
                      >    
            <div className="flex         gap-[20px]     sm:gap-[20px]       md:gap-[20px]          lg:gap-[20px]">
            {/*<div className="flex         ml-[20px] gap-[15px]    sm:ml-[20px] sm:gap-[15px]      md:ml-[20px] md:gap-[20px]          lg:gap-[20px] lg:ml-[20px] lg:mr-[20px]">*/}
              {testimonials.map((testimonial, index) => (
                  // index < 1 &&  (<TestimonialCard path = {testimonial.imgPath} name = {testimonial.name} mention={testimonial.mentions} review = {testimonial.review}/>)
                  <TestimonialCard key = {index}  color = "#00000099" path = {testimonial.imgPath} name = {testimonial.name} mention={testimonial.mentions} review = {testimonial.review}/>
              ))
            }
            </div>
          </motion.div>
        </div>

    </div>
  </div>
  );
};

export default Testimonials;
