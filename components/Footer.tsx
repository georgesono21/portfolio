import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      {/* background grid */}
  

   
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        
         <p className="md:text-base text-sm md:font-normal font-light p-3">
          Yoshinobu Sono
        </p>


        <div className="flex items-center md:gap-3 gap-6 px-">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-90 h-90 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 rounded-lg "
            >
               {info.id == 3 ? 
                  (<a href = "mailto:yoshinobugeorgesono@gmail.com" target="_blank">
                    <img src={info.img} alt="icons" width={40} height={40} />
                  </a>) : (<a href = {info.link} target="_blank">
                    <img src={info.img} alt="icons" width={30} height={30} />
                  </a>
                  )}
            </div>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;