import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import SlideAnimation from "../hooks/SlideAnimation";
import Para from "../components/Para";



const Contact = () => {


    const MessageBoxRef = useRef(null);
    const ImageRef = useRef(null);
    const InfoRef = useRef(null);
    


    SlideAnimation(MessageBoxRef, { xPercent: -100, duration: 1 });
    SlideAnimation(ImageRef, { xPercent: 100, duration: 1 });
    SlideAnimation(InfoRef, { yPercent: 100, duration: 1 });
    



  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone : "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current,
        "your_public_key"
      );

      // Reset form and stop loading
      setForm({ firstname: "", lastname: "" , email: "", message: "" });
    } 
    catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } 
    finally {
      setLoading(false); // Always stop loading, even on error
    }
  };



  // [#a71166]   [#c31376]
  return (
    <section id="contact" className="     flex-center  mt-[100px]    md:mt-[150px] sm:section-padding    ">
      <div className="w-full h-full mt-[20px] md:px-10  px-2   sm:px-5 max-w-[1900px]     mb-[0px]      lg:px-5  sm:mb-[100px]           md:mb-[200px]">



        <div className="grid-12-cols  bg-primary  lg:flex  lg:justify-center">
          <div className="xl:col-span-5  sm:flex-col   sm:flex sm:items-center sm:justify-center  lg:justify-start   p-4    lg:p-0">

              <div   ref = {InfoRef}   className="   flex flex-col  sm:items-center  lg:items-start  w-full   ">
                <div className="items-start flex    ">
                  <TitleHeader   color = "white" 
                       title="Contact Us"
                  />
                </div>
                <div className="max-w-[600px]      md:max-w-[700px]     lg:max-w-[600px]">
                    <Para  content= "We’re here to help you achieve your healthiest, most beautiful smile. Reach out today to schedule your appointment or ask any questions. We look forward to hearing from you ! " />
                    <Para content="mmaaz0510@gmail.com"/>
                    <Para content="Phone : +1 (412) 610-853"/>
                </div>
              </div>


            <div  ref = {MessageBoxRef}   className={`        relative     text-contact-text     sm:min-w-[600px]   md:min-w-[700px]      lg:min-w-[550px]     max-w-[600px]     min-w-[280px]    sm:max-w-[600px]    lg:w-[550px]      flex-center  rounded-xl   sm:pt-10 sm:pb-10      mt-8`}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col  gap-7  "
              >
                <div  className="flex    gap-5   sm:gap-20    relative">
                  <div className="font-semibold         w-full">
                    <label className="text-white ml-4"   htmlFor="firstname">First name</label>
                    <input
                      className="border-0  bg-pink   min-w-[120px]   rounded-full  placeholder-white/80 "         
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="font-semibold      w-full">
                    <label  className="text-white ml-4"   htmlFor="lastname">Last name</label>
                    <input
                      className="border-0  bg-pink   min-w-[120px]   rounded-full    placeholder-white/80"      
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="font-semibold">
                  <label     className="text-white ml-4" htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="border-0  bg-pink      rounded-full   placeholder-white/80"  
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </div>

                <div className="font-semibold">
                  <label    className="text-white ml-4" htmlFor="tel">Mobile No.</label>
                  <input
                    type="tel"
                    className="border-0  bg-pink      rounded-full   placeholder-white/80"  
                    id="tel"
                    name="tel"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="+1 (415) - 739 - 2846"
                    required
                  />
                </div>

                {/*[#c31376] hover:bg-[#a71166]*/}
                <div className="font-semibold">
                  <label  className="text-white ml-4" htmlFor="message">Message</label>
                  <textarea
                    className="border-0  bg-pink   rounded-2xl   sm:rounded-4xl   placeholder-white/80"  
                    id="message"
                    name="message"
                    type="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>





                <div  className="w-full   flex items-center  justify-center">
                    <button          aria-label= "Send Message" className= " rounded-full  bg-black   hover:border-white   text-white  hover:border-1          p-3 pl-8 pr-8       sm:p-2 sm:pl-12 sm:pr-12      md:text-lg    md:p-2 md:pl-12 md:pr-12        lg:p-3  lg:pl-12 lg:pr-12  lg:text-xl        cursor-pointer  font-semibold"    >
                        Send Message
                    </button>
                </div>




              </form>

            </div>
          </div>

        <div    ref = {ImageRef}    className="flex items-center justify-center    ">
          <div className="           ">
              <img   alt="Smiling woman undergoing a dental check-up"   className="rounded-4xl  p-4 sm:p-0"  src = "/images/Be.jpg"/>
          </div>
        </div>



        </div>


      </div>
    </section>
  );
};

export default Contact;
