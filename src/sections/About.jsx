import AboutMe from '../components/AboutMe';
import Team from '../components/Team';
import { DentistBriefInfo, TeamInfo } from '../constants';
import TeamIntro from "./TeamIntro";


export const About = () => {
  return (
  <section className="flex flex-col   mt-[200px]      ">
      <div  className="mb-[100px]     lg:mb-[200px]">
        {TeamInfo.map((info, index) => {
          return(
            <Team key = {index}     imglink = {info.imglink}      alt = {info.alt}      title = {info.title}      details={info.details}      orient={info.orient}/>
          ) 
        })}
      </div>

      <div className="mt-[100px]">
        {DentistBriefInfo.map((info, index) => {
          return(
            <AboutMe key = {index} namer= {info.name}   altinfo= {info.alt}    linker = {info.img}    orient = {info.orient}  details = {info.details}    shape = {info.shape}      page="main"/>
          )
        })}
      </div>

        <TeamIntro/>

  </section>

  )
}

export default About;