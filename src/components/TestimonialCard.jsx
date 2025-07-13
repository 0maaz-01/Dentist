  
  
  
  
  const TestimonialCard = ({path, name, mention, review, color}) => {


    return (    // bg-${color}
      <div style={{backgroundColor : color}}  className=" rounded-4xl mt-[20px] w-[80vw] h-[70vh] min-h-[200px] max-h-[300px] max-w-[320px] min-w-[280px]            sm:mt-[40px] sm:w-[40vw] sm:min-w-[320px] sm:h-[70vh] sm:min-h-[300px] sm:max-h-[339px] sm:max-w-[400px]           md:mt-[40px] md:w-[40vw] md:h-[70vh] md:min-h-[340px] md:max-h-[379px] md:max-w-[600px]        lg:mt-[60px] lg:w-[33vw] lg:h-[50vh] lg:min-h-[380px] lg:max-h-[420px]          xl:h-[70vh] xl:min-h-[430px] xl:max-h-[450px] xl:min-w-[400px]         2xl:max-w-[500px] 2xl:min-w-[450px] 2xl:min-h-[450px] 2xl:max-h-[450px]"
      >
          
          <div className="ml-4  2xl:rounded-b-full         w-[100%] flex     mt-[20px]        sm:mt-[20px] sm:h-[70px]         md:mt-[20px] md:h-[80px]        lg:mt-[20px] lg:h-[80px]      xl:h-[100px] ">
              <img alt = {name} className="rounded-full w-[50px] h-[50px] mt-1 mr-1    sm:w-[60px] sm:h-[60px] sm:mt-1      md:w-[70px] md:h-[70px]     lg:w-[80px] lg:h-[80px]    xl:w-[70px] xl:h-[70px] xl:mt-3      2xl:w-[80px] 2xl:h-[80px] 2xl:mt-2" src={path}></img>

              <div className="w-[100%] h-[100%]">
                  <div className="w-full font-semibold      pt-1 pl-1 text-xl              sm:pl-2 sm:text-2xl         md:pt-2 md:pl-2 md:text-3xl                   lg:pt-2 lg:text-3xl          xl:text-4xl xl:pl-4   xl:mb-1">
                      {name}
                  </div>

                  <div className="w-full      text-xs pl-1         sm:text-sm sm:pl-2 sm:pt-1       md:text-base md:pl-2 md:pt-1     lg:text-lg        xl:pl-4 xl:text-xl">
                      {mention}
                  </div>

                  {/*<div className="flex     pl-1 pt-1      sm:pl-2 sm:pt-1       md:pl-2 md:pt-1      lg:pt-1         xl:pl-4">
                      {Array.from({ length: 5 }, (_, i) => (
                          <img key={i} src="/images/star.png" alt="star" className=" size-2       sm:size-3      md:size-4    lg:size-5" />
                      ))}
                  </div>*/}
              </div>
          </div>
          <div className="overflow-y-auto   pl-3 pr-3     h-[65%]      sm:h-[66%]     md:h-[65%]     lg:h-[70%]   xl:h-[65%] 2xl:h-[65%]">   {/*lg:mt-[5px]*/}
              <div className="w-full    playfair-font        p-2     sm:p-3       md:p-3      md:text-base      lg:p-3 lg:text-lg      xl:text-xl">
                  {review}
              </div>
          </div>
      </div>
)
  }


  export default TestimonialCard;