import { useState, useRef, useEffect } from 'react';




export default function BeforeAfterSlider({ beforeImage, afterImage, altbefore, altafter, treatment }) {

  const Button = ({func, text,  aria}) => {
      return(
          <button
              onClick={func}   aria-label = {aria}
              className="px-6 py-2 bg-white     hover:bg-white/70      cursor-pointer        text-black rounded-lg transition-colors duration-200 font-medium"
            >
               {text}
          </button>
      )
  }




  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);


  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();
    const handleGlobalTouchMove = (e) => handleTouchMove(e);
    const handleGlobalTouchEnd = () => handleTouchEnd();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchmove', handleGlobalTouchMove);
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchmove', handleGlobalTouchMove);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);



  return (
    <div className="  text-white  flex items-center justify-center p-4       mt-[100px]  mb-[100px]">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-bg-black mb-4">Before & After Slider</h1>
          <p className=" text-lg">Drag the slider to reveal the transformation</p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full     border-2   aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >



                    {/* AFTER Image */}
          <div className="absolute inset-0">
            <img 
              src={afterImage}
              alt={altafter}
              className="w-full h-full object-cover"
              draggable={false}
            />

            <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
              AFTER
            </div>

          </div>



          {/* Before Image */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={beforeImage}
              alt={altbefore}
              className="w-full h-full object-cover"
              draggable={false}
            />

            <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
              BEFORE
            </div>
          </div>




          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-opacity duration-200"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* Slider Handle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-col-resize hover:scale-110 transition-transform duration-200">
              <div className="flex space-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256"><path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34a8,8,0,0,0-11.32,11.32L76.69,120H16a8,8,0,0,0,0,16H76.69L58.34,154.34a8,8,0,0,0,11.32,11.32l32-32a8,8,0,0,0,0-11.32ZM240,120H179.31l18.35-18.34a8,8,0,0,0-11.32-11.32l-32,32a8,8,0,0,0,0,11.32l32,32a8,8,0,0,0,11.32-11.32L179.31,136H240a8,8,0,0,0,0-16Z"></path></svg>        
              </div>
            </div>
          </div>


        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center     space-x-2     sm:space-x-6    md:space-x-8 lg:space-x-8">


            <Button   aria-label={`View teeth before ${treatment}`}   text = "Before"  func = {() => setSliderPosition(100)}  />
            
            <Button   aria-label={`Drag to compare before and after ${treatment} images`}    text = "50/50"  func = {() => setSliderPosition(50)}  />

            <Button   aria-label={`View teeth after ${treatment}`}   text = "After"  func = {() => setSliderPosition(0)}  />


          </div>
          
          <div className="text-white ">
               Position: <span className="font-mono font-bold">{Math.round(sliderPosition)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}