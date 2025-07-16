import { assets, singleslider } from '../constants';
import Card from '../components/Card';
import Info from '../components/Info';

const SingleSlider = () => {



  return (
    <div className=" font-sans leading-normal tracking-normal    ">

      {/* Main Content */}
      <div className="container max-w-[1600px] mx-auto    lg:flex   ">
        <div className="mx-0            lg:w-2/3     xl:w-3/4">
          <div className=" w-full p-8 md:p-16 text-xl md:text-2xl text-black leading-normal             " style={{ fontFamily: 'Georgia, serif' }}>
              {singleslider.map((blog, index) => (
                  <Info blog={blog}    slider = "yes"     part = "1"   index={index}       />
              ))}

          </div>


        </div>




      <div className=" hidden    lg:block       lg:w-1/3  xl:1/4  bg-black/60      lg:p-4  lg:pt-0    xl:p-6 xl:pt-0 ">
          <Card  link = "/image-slider"   title = "Her Smile, Finally Free"         image = { assets.AB1 }        alt = "Read Her Smile, Finally Free" />
          <Card  link = "/image-slider"   title = "From Pain to Peace"              image = { assets.AB2 }        alt = "Read From Pain to Peace" />
          <Card  link = "/image-slider"   title = "The Chipped Tooth Champion"      image = { assets.AB3 }        alt = "Read The Chipped Tooth Champion" />
          <Card  link = "/image-slider"   title = "Gap No More"                     image = { assets.AB4 }        alt = "Read Gap No More" />
      </div>







      </div>
    </div>
  );
};

export default SingleSlider;