import { useState, useEffect } from "react";
import clsx from "clsx";
import { navLinks } from "../constants";

const NavBar = ({page}) => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
  
    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
        <header className={`navbar      lg:bg-transparent      ${scrolled ? "scrolled   lg:bg-transparent      " : `not-scrolled `}      ${isOpen? " bg-black    " : "bg-transparent"}         max-w-[1800px]     text-base  sm:text-lg md:text-xl    lg:text-base  2xl:text-xl `}>
            <div className="inner mb-[2vh]   playfair-font">
                <a aria-label="Go to homepage" href="/" className="bg-black/80      p-2 rounded-full">
                    <img className="rounded-xl" src = "/images/logo.webp" height="40" width="40"  alt = "Logo Of Maaz, Full Stack Web Developer, Competitive Programmer and Software Developer"/>
                </a>

                <nav className="desktop   bg-black/80  p-4  pr-8 pl-8  rounded-4xl ">
                    <ul>
                        {navLinks.map(({ link, name, alt }, index) => (
                          <li key={name} className = "group font-semibold       text-white  ">
                              <a aria-label = {alt} href={link}   className={`hover:bg-white/20    ${page === `${name}` ? "bg-white/20" : ""}        p-2  rounded-4xl  pl-4 pr-4`}>
                                  <span>{name}</span>
                                  
                              </a>
                          </li>
                      ))}
                    </ul>
                </nav>

                <div>

                </div>


              <button    aria-label = {isOpen ? "Close navigation menu" : "Open navigation menu"}
                    className="cursor-pointer lg:hidden z-2 size-10  border-s4/25 rounded-full flex     bg-black/80     justify-center items-center"
                        
                      // previous state ka ulta krdo jab bhi ye button click ho
                        onClick={() => setIsOpen((prevState) => !prevState)}
                      >
                        <img
                          src = {`/images/${isOpen ? "close" : "bar"}.png`}
                          alt = "" 
                          aria-hidden = "true" 
                          className = "size-1/2 object-contain"
                        />
              </button>

                
            </div>



            <div className= {clsx("       lg:hidden max-width-[100vw] p-4 ml-auto border-0    ", 
                  isOpen ? "block  " : "hidden"
                )}>
                <ul>
                  {navLinks.map(({ link, name }, index) => (
                  <li key={name} className="group   playfair-font   mt-6  sm:mt-8  flex items-center justify-center">
                      <a href={link}>
                        <span className=" mt-2   text-2xl   sm:text-3xl   font-semibold group-hover:text-amber-500">{name}</span>

                      </a>
                  </li>
                ))}
                </ul>
            </div>

        </header>
  );
}

export default NavBar;
