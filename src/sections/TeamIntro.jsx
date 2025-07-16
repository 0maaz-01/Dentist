import { Team2 } from '../constants';


    export const Card = ({img, alt, desc}) => {
        return(
            <div
                className="relative        isolate flex flex-col justify-end overflow-hidden rounded-2xl           transition-transform duration-300        md:hover:scale-110          hover:scale-105             min-h-[500px]    min-w-[260px]    max-w-[350px]   bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                    
                
                    <img src = {img} alt={alt} className="absolute inset-0 -z-10 h-full w-full object-cover                   "/>
                
                
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <div className="-ml-4 flex items-center gap-x-4">
                    </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a><span className="absolute inset-0"></span>{desc}</a>

                </h3>
            </div>
        )}

            

const TeamIntro = () => {


  return (
      
 <div className="w-full           playfair-font   sm:mt-[100px]      md:mt-[150px]      lg:mt-[200px]   mb-[150px]">

    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-8   flex items-center justify-center  ">

        <div
            className="      justify-center    gap-24     xl:gap-20    sm:gap-8     mx-auto mt-8 grid max-w-2xl auto-rows-fr  sm:mt-12 lg:mx-0 lg:max-w-none  grid-cols-1  sm:grid-cols-2     lg:grid-cols-3 ">
            
            {Team2.map((team, index) => (
                <Card key = {index} img = {team.img} alt = {team.alt} desc = {team.desc}/>
            ))}

        </div>
    </div>

</div>
    )
}
                                            

export default TeamIntro;