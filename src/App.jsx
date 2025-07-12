import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Changed to 'Router' and 'Routes'

import Navbar from "./components/NavBar";
import Footer from "./sections/Footer";
import Services from "./sections/Services";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Patients from "./sections/Patients";
import ClinicIntro from "./sections/ClinicIntro";
import Office from "./sections/Office";
import Location from "./sections/Location";
import LocationText from "./sections/LocationUp";
import Map from "./sections/Map";
import SingleSevice from "./sections/SingleSevice"
import Smile from "./sections/Smile";
import AboutUs from "./sections/AboutUs";
import  SingleSlider from "./sections/SingleSlider";
import BookNow from "./sections/BookNow";
import Testimonials from "./sections/Testimonials";
import FaqSection from "./sections/FaqSection";
import Testimonials2 from "./sections/Testimonials2";
import FullScreenSlider from "./components/FullScreenSlider";
import FullScreenVideoSlider from "./components/FullScreenVideoSlider";
import BeforeAfterGallery from "./sections/BeforeAfterGallery";
import GlassDemo from "./components/GlassDemo";



const HomePage = () => (
  <>
    <Navbar/>
    <FullScreenVideoSlider/>
    <ClinicIntro/>
    <About/>

    <Services/>    


    <BookNow/>

    <FaqSection/>
    <Testimonials/>

    <FullScreenSlider/>
    <Footer/>
  </>
);


const ContactPage = () => (
  <>
    <Navbar   page = "Contact Us"/>
    <Contact/>
    <Footer/>
  </>
)


const AboutPage = () => (
  <>
    <Navbar   page = "About Us"/>
    <AboutUs/>
    <Office/>
    <BookNow/>
    <Footer/>
  </>
)


const LocationPage = () => (
   <>
      <Navbar   page = "Location"/>
      <Location/>
      <LocationText/>
      <Map/>
      <BookNow/>
      <Footer/>
   </>
)



const SingleSevicePage = () => (
  <>
     <Navbar/>
     <Smile/>
     <SingleSevice/>
     <Footer/>
  </>
)



const ServicePage = () => (
  
  <>
      <Navbar   page = "Services"/>
      <div className="mt-[150px]              mb-[200px]    lg:mb-[300px] ">
          <Services/>
      </div>
      <BookNow/>
      <Footer/>
  </>
)



const PatientsPage = () => (
  <>
    <Navbar   page = "Patients Gallery"/>
      <div  className="mt-[100px]">
        <BeforeAfterGallery/>
      </div>
    <Patients/>
    <div className="mt-[200px] mb-[200px] ">
        <Testimonials2/>
    </div>
    <BookNow/>  
    <Footer/>
  </>
)



const ImageSliderPage = () => (
  <>
    <Navbar/>
    <div className="mt-[90px]">
        <SingleSlider/>
     </div>
    <Footer/>
  </>
)






const App = () => (
  <Router>  {/* Wrap the entire app in Router */}
    <Routes>  {/* Wrap Routes inside this element */}
        {/* Route for the home page */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/location" element={<LocationPage/>} />
        <Route path="/reconstructions" element={<SingleSevicePage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/patients-gallery" element = {<PatientsPage/>} />
        <Route path="/image-slider" element = {<ImageSliderPage />} />
    </Routes>  
  </Router>
);




export default App;
