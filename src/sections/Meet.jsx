import React from 'react';
import TitleHeader from "../components/TitleHeader";

const Meet = () => {

    const Image = ({link}) => {
        return(
            <img src = {link}/>
        )
    }


  return (
    <div className="flex flex-col           mt-[100px]    items-center justify-center    ">
        <div className="flex flex-col gap-8">
            <TitleHeader title = "Meet Our Team"/>
            <Image link = "/images/Dentist1.jpg"/>
            <Image link = "/images/Dentist2.jpg"/>
        </div>
    </div>
  )
}

export default Meet