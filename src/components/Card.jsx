


const Card = ({title, image, alt, link}) => {
    return (
      <a   href = {link}   className=" rounded-2xl      mb-[50px]   ">

        {image &&
            <div className="w-full ">
                <img className="rounded-[50px] min-w-[100%]       cursor-pointer       xl:p-4    pt-0"    src= {image}    alt={alt} />
            </div>
        }

        <div className="p-4 pl-0 pt-0 playfair-font flex items-center justify-center text-2xl w-full     ">
            {title}
        </div>
      </a>
    );
};


export default Card