

const FooterDown = () => {

    const Link = ({aria, link, name}) => {
        return ( 
            <li><a target="_blank" aria-label={aria}  href={link} className=" text-white hover:text-amber-400">{name}</a></li>
        )
    }

    const Info = ({aria, name}) => {
        return ( 
            <li><div target="_blank" aria-label={aria}  className=" text-white ">{name}</div></li>
        )
    }

  return (
      <footer id = "#footerdown" className="flex items-center justify-center ">
        <div className="  w-full max-w-[1800px]   playfair-font">
          <div className="bg-black/50 py-4  ">
            <div className="container px-4 mx-auto">
                <div className="-mx-4 flex flex-wrap justify-between">
                    {/*Photo and Description*/}
                    <div className="px-4 my-4 w-full xl:w-1/5        playfair-font    mb-16 sm:mb-12">
                        <div aria-label="Back to top of homepage" href="/" className=" w-full   xl:w-56 mb-5 flex flex-row gap-[20px]">
                            <h2 className="playfair-font   inline-block text-4xl  sm:mb-4   sm:text-5xl    xl:text-2xl  text-white font-semibold">Contact Us</h2>   
                        </div>

                      <div  className="text-2xl     sm:text-3xl     xl:text-xl">
                        <p className="        mb-2    sm:mb-4">
                            Address : 
                        </p>

                        <p className="     mb-8     sm:mb-10">
                            4372 Prairie Loop Dr, Fort Worth, TX 76123                        
                        </p>

                        <p className="     mb-2      sm:mb-4">
                            Phone Number : 
                        </p>

                        <p className="  sm:mb-10">
                            +1 (210) 614-8838                       
                        </p>
                      </div>
                    </div>




                      <div className="px-4 my-4 w-full sm:w-auto hidden sm:block">
                        <div>
                          <h2 className="inline-block text-2xl  mb-4 text-white font-semibold">About Us</h2>
                        </div>
                        <ul className="leading-10    md:leading-12   text-lg sm:text-xl ">
                            <Link aria = "Back to top of homepage" link = "/" name = "Home"/>
                            <Link aria = "View About Us Section" link = "/about" name = "About Us"/>
                            <Link aria = "View Our Services Section" link="/services" name="Services" />
                            <Link aria = "View Our Patient"  link="/patients-gallery" name="Patient Gallery" />
                            <Link aria = "Contact Us" link="/contact" name="Contact Us" />
                            <Link aria = "View Our Location" link="/location" name="Location" />
                        </ul>
                      </div>
                      <div className="px-4 my-4 w-full sm:w-auto hidden sm:block">
                        <div>
                          <h2 className="inline-block text-2xl  mb-4 text-white font-semibold">Services</h2>
                        </div>

                          <ul className="leading-10   md:leading-12 text-lg sm:text-xl ">
                              <Link aria = "View more about Dental Implants" link="/services/Dental-Implants" name="Dental Implants" />
                              <Link aria = "View more about Orthodontics" link="/services/Full-Mouth-Dental-Implants" name="Orthodontics" />
                              <Link aria = "View more about Reconstructions" link="/services/Fixed-Teeth-vs-Removable " name="Reconstructions" />
                              <Link aria = "View more about crowns" link="/services/Orthodontics" name="Crowns" />
                              <Link aria = "View more about Root Canal" link="/services/Smile-Makeover" name="Root Canal" />
                              <Link aria = "View more about Teeth Whitening" link="/services/Porcelain-Veneers " name="Porcelain Veneers " />
                          </ul>
                      </div>


                      <div className="sm:hidden   w-full     ">
                          <div className="px-4 my-4  sm:w-auto    ">
                            <div>
                              <h2 className="inline-block text-4xl mb-6 text-white font-semibold">About Us</h2>  {/*border-b-4 border-[#e3158a]*/}
                            </div>
                            <ul className="leading-12  text-2xl   gap-8">
                                <Link aria = "Back to top of homepage" link = "/" name = "Home"/>
                                <Link aria = "View About Us Section" link = "/about" name = "About Us"/>
                                <Link aria = "View Our Services Section" link="/services" name="Services" />
                                <Link aria = "View Our Patient"  link="/patients-gallery" name="Patient Gallery" />
                                <Link aria = "Contact Us" link="/contact" name="Contact Us" />
                                <Link aria = "View Our Location" link="/location" name="Location" />
                            </ul>
                        </div>

    

                            <div className="px-4 my-4  mt-16   sm:w-auto">
                              <div>
                                  <h2 className="inline-block text-4xl mb-6 text-white font-semibold">Services</h2>
                              </div>
                              <ul className="leading-12     text-2xl ">
                                  <Link aria = "View more about Dental Implants" link="/services/Dental-Implants" name="Dental Implants" />
                                  <Link aria = "View more about Orthodontics" link="/services/Full-Mouth-Dental-Implants" name="Orthodontics" />
                                  <Link aria = "View more about Reconstructions" link="/services/Fixed-Teeth-vs-Removable " name="Reconstructions" />
                                  <Link aria = "View more about crowns" link="/services/Orthodontics" name="Crowns" />
                                  <Link aria = "View more about Root Canal" link="/services/Smile-Makeover" name="Root Canal" />
                                  <Link aria = "View more about Teeth Whitening" link="/services/Porcelain-Veneers " name="Porcelain Veneers " />
                                  </ul>

                            </div>
                          </div>
            
                 
                          <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5     relative  mt-[50px]     md:mt-[-0px]">
                              <div className="px-4 my-4 w-full sm:w-auto    ">
                                <div>
                                  <h2 className="inline-block text-4xl   sm:text-5xl md:text-2xl  mb-8   md:mb-4    text-white font-semibold">Hours</h2>
                                </div>
                                <ul className="leading-8 text-2xl   sm:text-3xl   md:text-xl ">
                                  <div className=" mb-8    md:mb-4">
                                    <Info   name = "Monday"/>
                                    <Info   name = "8 : 30AM – 5 : 00PM"/>
                                  </div>
                                  <div className=" mb-8     md:mb-4">
                                    <Info   name = "Tuesday"/>
                                    <Info   name = "8 : 30AM – 5 : 00PM"/>
                                  </div>
                                  <div className=" mb-8     md:mb-4">
                                    <Info   name="Wednesday" />
                                    <Info   name="8 : 30AM – 5 : 00PM" />
                                  </div>
                                  <div className="mb-8      md:mb-4">
                                    <Info   name="Thursday" />
                                    <Info   name="8 : 30AM – 5 : 00PM" />
                                  </div>
                                  <div className=" mb-8     md:mb-4">
                                    <Info   name="Friday" />
                                    <Info   name="8 : 30AM – 4 : 30PM" />
                                  </div>

                                </ul>
                              </div>


                            </div>
                </div>
              </div>
          </div>
          <div className="bg-black/50 py-4 text-black flex justify-center items-center ">
            <div className="container mx-auto px-4">
              <div className="-mx-4 flex justify-center items-center flex-col">
                <div className = "w-[50%] border-t-1 border-[#f2efef] "></div>
                <div className="mt-4 px-4 w-full text-center sm:w-auto sm:text-left text-white font-semibold">
                    Copyright © 2025 Mohammed Maaz Rayeen. All Rights Reserved.
                </div>

              </div>
            </div>
          </div>
         </div>
        </footer>

  );
};

export default FooterDown;
