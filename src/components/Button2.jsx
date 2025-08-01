
const Button2 = ({text}) => {
  return (
    <div className=" w-full flex justify-center ">
        <a  aria-label="To Contact Page" href = "/contact">
            <button   aria-label="Go To Contact Page" className="   bg-amber-50 max-w-[200px]  animated-button cursor-pointer">
                <svg aria-label="Open contact page to reach Maaz" viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
                
                <span className="text">{text}</span>
                <span className="circle"></span>
                          
                <svg aria-label="Open contact page to reach Maaz" viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
            </button>
        </a>
    </div>
  )
}

export default Button2

