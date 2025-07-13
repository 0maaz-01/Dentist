import BeforeAfterSlider from "./BeforeAfterSlider"


  const Info = ({blog, index, part, slider}) => {
      return(
        <div key = {index}>
            {part === "1"  &&
                <div className="text-white flex justify-center items-center  lg:items-start lg:justify-start  ">
                    <div className=" m-2 font-semibold text-4xl        sm:text-6xl sm:m-2 sm:p-[4px]        lg:text-6xl lg:m-4       xl:text-7xl  xl:pl-[0px]    playfair-font text-white   2xl:pl-[12px]">{blog.title}</div>
                </div>
            }

            {blog.descs1.map((desc, dindex) => (
                <p key = {dindex} className="py-6   text-white">{desc}</p>
            ))}


            <blockquote className="text-white      border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                {blog.info}
            </blockquote>


          { slider === "no" &&
            <pre className="  mt-[150px] mb-[150px]   w-full    flex justify-center items-center">
              <div  className=" max-w-[600px]      bg-gray-900 rounded      p-4">
                <div className="break-words whitespace-pre-wrap">
                    <img  src = { blog.img }    alt = {blog.alt}/>
                </div>
              </div>
            </pre>
          }



          { slider === "yes" &&
                <BeforeAfterSlider  
                    beforeImage = { blog.before }  altbefore={ blog.altbefore }   treatment = { blog.treatment }
                    afterImage = { blog.after }   altafter={ blog.altafter }
                />
            }



            {blog.descs2.map((desc, dindex) => (
                <p key = {dindex} className="py-6     text-white">{desc}</p>
            ))}
        </div>
    )
  }


export default Info