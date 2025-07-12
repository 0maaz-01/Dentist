import AboutMe from '../components/AboutMe';
import { DentistLongInfo, TeamInfo2 } from '../constants';
import Team from '../components/Team';


export const AboutUs = () => {
  return (
  <section className="flex flex-col   mt-[200px]    ">

        {TeamInfo2.map((info, index) => {
          return(
            <Team key = {index}     imglink = {info.imglink}      alt = {info.alt}      title = {info.title}      details={info.details}      orient={info.orient}/>
          ) 
        })}

      <div className="sm:mt-[100px]">
        {DentistLongInfo.map((info, index) => {
          return(
            <AboutMe   page = "about"     key = {index} namer = {info.name}  altinfo = {info.alt}     linker = {info.img}    orient = {info.orient}  details = {info.details}    shape = {info.shape}      />
          )
        })}
      </div>

  </section>

  )
}

export default AboutUs;