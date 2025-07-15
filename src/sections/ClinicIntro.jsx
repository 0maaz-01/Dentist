import clsx from 'clsx'
import TitleHeader from '../components/TitleHeader';
import Para from '../components/Para';


const ClinicIntro = () => {
  return (

    <section className="min-h-[650px]      mt-[200px]    lg:mt-[200px]   sm:min-h-[750px] md:min-h-[450px] lg:min-h-[550px] xl:min-h-[650px] 2xl:min-h-[700px] ">
      <div className=" p-4 min-h-[400px] max-w-[1800px] mx-auto sm:p-8 lg:p-4           lg:flex md:items-center md:justify-center">

        <div className="lg:w-1/3 lg:p-8      flex justify-center items-center     lg:order-2">
              <div  className={clsx(
                "flex justify-center items-center lg:w-[35vw] flex-grow-0   max-w-[400px]",

              )}>
                <img className="w-[40vw] min-w-[250px]    max-w-[400px]   rounded-t-[200px]"   alt = "Pure Harmony Dental operation room in Austin, Texas"    src="/images/Clinic.jpg" />
              </div>
    
        </div>
            <div className="lg:w-2/3     md:p-16       lg:order-1    lg:mt-[100px]     lg:max-w-[600px]   xl:max-w-[700px]    2xl:max-w-[900px]">
                <TitleHeader  title = "A Holistic Approach"/>          
                <Para content="At Pure Harmony Dental, we understand that oral health is a gateway to whole-body wellness. That’s why we combine leading-edge dental techniques with a holistic mindset, ensuring that every procedure supports not just your teeth, but your entire system. Our integrative approach means carefully selecting materials that are gentle on the body, avoiding toxins, and harnessing natural regenerative methods to encourage optimal healing."/>

                <Para content="From low-radiation digital imaging to toxin-free sealants and nutritional guidance, every aspect of your care is designed to honor the intricate connection between your mouth and your overall health. We believe that dentistry should be proactive, preventive, and profoundly personal—empowering you to thrive inside and out." />
            </div>
        </div>
    </section>
  )
}

export default ClinicIntro;