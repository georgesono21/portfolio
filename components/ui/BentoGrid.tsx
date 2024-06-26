import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import Skills from "../Skills";
import { socialMedia } from "@/data";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "px-4 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "flex-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: `rgb(2,0,36)`,
        backgroundColor: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(99,99,205,1) 35%, rgba(0,212,255,1) 100%)`,
      }}
    >

      {id == 2 ? (
        <div className="relative w-full h-full">
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover object-center w-full h-full")}
          />
        </div>
      ) : (
        <div
          className={cn(
            null,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className={cn(titleClassName, "font-sans font-bold text-lg lg:text-3xl z-10  pb-2")}>
            {title}
          </div>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          {id === 3 ? (
          <div>
              <Skills/>
          </div>
          ) : null}

          <div>
            <div className="">
              {img && (
                <img
                  src={img}
                  alt={img}
                  className={cn(imgClassName, "object-cover object-center")}
                />
              )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
              {spareImg && (
                <img
                  src={spareImg}
                  alt={spareImg}
                  className="object-cover object-center"
                />
              )}
            </div>
            
          </div>

          {id == 5 ? (
          <div className="flex items-center justify-center  gap-10 pt-3">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="w-30 h-30 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180  rounded-lg  "
              >
                {info.id == 3 ? 
                  (<a href = "mailto:yoshinobugeorgesono@gmail.com" target="_blank">
                    <img src={info.img} alt="icons" width={80} height={80} />
                  </a>) : (<a href = {info.link} target="_blank">
                    <img src={info.img} alt="icons" width={60} height={60} />
                  </a>
                  )}
              </div>
            ))}
          </div>
          ) : null }
          
  
        </div>
      )}
     
    </div>
  );
};
