import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import Button from "../components/Button";
import { faqData } from "../constants";




const FaqSection = () => {
  const [activeId, setActiveId] = useState(null);

  const halfLength = Math.floor( faqData.length / 2 );

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };



    const Question = ({ itemid, itemquestion, ActiveId }) => {
  
        return(
                <button
                  onClick={() => toggleFaq( itemid )}
                  className={`w-full px-8 py-6 text-left      cursor-pointer       flex items-center justify-between group
                  ${
                      ActiveId === itemid ? "bg-pink     " : "text-bkg    bg-pink "
                    } 
                  `}
                >

                  <h3 className={`text-lg   text-second    font-semibold    group-hover:text-white      ${
                      ActiveId === itemid ? "text-white      " : "text-white"
                    } `}>
                      { itemquestion }
                  </h3>


                  <div
                    className={`flex-shrink-0 ml-4  ${
                      ActiveId === itemid ? "rotate-180     text-white" : "rotate-0   text-black"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5      text-white" />
                  </div>
                </button>
        )
    }





  return (
    <section className="playfair-font     lg:mt-[200px]      mt-52 mb-52           bg-gradient-to-br      sm:max-h-[1200px]    flex items-center justify-center ">
      <div className="max-w-4xl  mx-auto px-6     sm:px-20           w-full  h-full  lg:max-w-[1600px] lg:px-6  lg:mx-0   ">
        {/* Header */}
        <div className="text-center ">

          <TitleHeader   title = "Frequently Asked Questions"/>
          <p className="text-lg       text2      max-w-2xl mx-auto      ">
              Find answers to common questions about our dental services. 
              Can't find what you're looking for? Feel free to contact us !
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-8   lg:hidden     mt-16  ">
          {faqData.map((item) => (
            <div
              key={item.id}                                 // border-pink  border-2
              className=" rounded-2xl shadow-sm        overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question */}
              <Question   itemid = {item.id}      itemquestion = {item.question}       ActiveId = {activeId}/>

              {/* Answer with sliding animation */}
              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out    ${
                  activeId === item.id
                    ? "max-h-96 opacity-100    bg-pink  text-white"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="w-full     bg-gradient-to-r from-transparent    h-[2px]  via-black  to-transparent mb-4"></div>
                  <p className=" leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>







      <div  className = "hidden         w-full h-full       lg:flex     lg:gap-20     mt-32   sm:mt-36">
        <div className="space-y-4   hidden xl:pl-12 2xl:pl-24   lg:block     lg:space-y-16">
          {faqData.slice(0, halfLength).map((item, index) => (
            <div
              key={item.id}                           // border-white border-2 
              className=" rounded-2xl shadow-sm       text-white    overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question */}
              <Question   itemid = {item.id}      itemquestion = {item.question}       ActiveId = {activeId}/>

              {/* Answer with sliding animation */}
              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  activeId === item.id
                    ? "max-h-96 opacity-100       bg-pink  text-white"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent     via-black  to-transparent mb-4"></div>
                  <p className=" leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div></div>


        <div className="space-y-4   hidden  xl:pr-12  2xl:pr-24     lg:block     lg:space-y-16">
          {faqData.slice(halfLength).map((item, index) => (
            <div
              key={item.id}               //   border-white border-2 
              className=" rounded-2xl shadow-sm      text-white       overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question */}
              <Question   itemid = {item.id}      itemquestion = {item.question}       ActiveId = {activeId}/>

              {/* Answer with sliding animation */}
              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  activeId === item.id
                    ? "max-h-96 opacity-100     bg-pink  text-white"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent    via-black  mb-4"></div>
                  <p className=" leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>



        {/* Contact CTA */}
        <div className="text-center  flex items-center justify-center       mt-32   sm:mt-36         ">
            {/*bg-pink*/}
          <div className="  text-white   rounded-2xl shadow-sm   backdrop-blur-sm    border-1 border-white/20       bg-white/10      p-8    md:max-w-[600px]">
            <h3 className="text-2xl font-semibold  mb-4">
                Still have questions ?
            </h3>
            <p className=" mb-6">
                Our team is here to help you with any additional questions you might have.
            </p>

                <Button  name = "Contact Us"    buttoncolor="black"  textcolor="white"/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
