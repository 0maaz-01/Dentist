import { assets, blogs } from '../constants';
import Card from '../components/Card';
import Info from '../components/Info';
import Pricing from './Pricing';


const SingleSevice = () => {



  return (
    <div className=" font-sans leading-normal tracking-normal    ">

      {/* Main Content */}
      <div className="container max-w-[1600px] mx-auto    lg:flex  ">
        <div className="mx-0            lg:w-2/3     xl:w-3/4">
          <div className=" w-full p-8 md:p-16 text-xl md:text-2xl text-black leading-normal             " style={{ fontFamily: 'Georgia, serif' }}>
              {blogs.map((blog, index) => (
                  <Info blog={blog}     index={index}    slider = "no"     part = "1"/>
              ))}

          </div>


        </div>





      <div className=" hidden    lg:block       lg:w-1/3  xl:1/4  bg-black/60      lg:p-4  lg:pt-0    xl:p-6 xl:pt-0 ">
          <Card     link = "/reconstructions"      title = "Dental Implant"     image = { assets.implants }        alt = "Learn More About Dental Implant" />
          <Card     link = "/reconstructions"      title = "Crowns"             image = { assets.Crowns }          alt = "Learn More About Crowns" />
          <Card     link = "/reconstructions"      title = "Orthodontics"       image = {assets.orthodontics}      alt = "Learn More About Orthodontics" />
          <Card     link = "/reconstructions"      title = "Teeth Whitening"    image = {assets.TeethWhitening}    alt = "Learn More About Teeth Whitening" />
          <Card     link = "/reconstructions"      title = "Root Canal"         image = {assets.RootCanal}         alt = "Learn More About Root Canal" />
      </div>


      </div>

      <div className="pl-2">
          <Pricing/>
      </div>


    </div>
  );
};

export default SingleSevice;