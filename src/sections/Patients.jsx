
const Patients = () => {



    const Image = ({link, infoalt}) => {
        return (
            <img  className=" w-36  sm:w-72   lg:w-80"   alt = {infoalt}  src = {link}/>
        )
    }


    return (
        <section className="relative  text-white flex      items-center justify-center                sm:mt-[100px]      sm:mb-[100px]          md:mt-[150px]       md:mb-[150px]">
            <div       className=" gap-4  mx-auto   flex flex-wrap     items-center justify-center    max-w-[1600px]  mb-[100px] mt-[100px]  ">
                <Image  infoalt = "Woman Smiling" link = "/images/Smile1.png"/>
                <Image  infoalt = "Man looking at his teeth in the mirror" link = "/images/Smile2.png"/>
                <Image  infoalt = "Woman Laughing" link = "/images/Smile3.png"/>
                <Image  infoalt = "Woman brushing her teeth."       link = "/images/Smile4.png"/>
            </div>
        </section>
    )
}

export default Patients;