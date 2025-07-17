import Para from '../components/Para'
import TitleHeader from '../components/TitleHeader'
import clsx from 'clsx'


const Team = ({imglink,  alt,  title, details, orient}) => {
  return (
    <section className="min-h-[650px] sm:min-h-[750px] md:min-h-[450px] lg:min-h-[550px] xl:min-h-[650px] 2xl:min-h-[700px]  ">


            <div className="    p-4 min-h-[400px] max-w-[1800px] mx-auto sm:p-8 lg:p-4 lg:flex lg:items-start lg:justify-center">
              <div 
                  className= {clsx("lg:w-7/12", 
                      orient === "0" ? "lg:order-1" : "lg:order-2"
                  )}>


                  <img     src={imglink}      alt={alt}     className="w-full h-auto" />
              </div>
              <div 
                  className =  {clsx("lg:w-5/12 lg:p-8",
                      orient === "1" ? "lg:order-1" : "lg:order-2"
                  )}>
                  <TitleHeader  title = {title}  color="pink"/>          
                  <Para content={details}/>
              </div>
            </div>


    </section>
  )
}

export default Team
