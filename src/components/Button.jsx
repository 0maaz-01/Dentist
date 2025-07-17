import clsx from "clsx";


const Button = ({name, buttoncolor, link, textcolor, linkcolor,   aria }) => {

        return ( 
                <a     aria-label = {aria} href = {link}
                     className = {clsx   ("rounded-full        max-h-[60px]   " ,
                    )}

                >
                    <button          aria-label={aria} className={clsx(" rounded-full           p-3 pl-8 pr-8       sm:p-2 sm:pl-12 sm:pr-12      md:text-lg    md:p-2 md:pl-12 md:pr-12        lg:p-3  lg:pl-12 lg:pr-12  lg:text-xl        cursor-pointer  font-semibold",
                            buttoncolor === "white"         &&       "         bg-white           hover:opacity-50",
                            buttoncolor === "black"         &&       "         bg-black           hover:border-1",
                            textcolor === "white"           &&       " text-white        ",
                            textcolor === "black"           &&       " text-black        ",                        
                    )}>
                        {name}
                    </button>
                </a>
        )
    }

export default Button;