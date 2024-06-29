import React from "react";
import { VscArrowRight } from "react-icons/vsc"
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";
import JobDescription from "./JobDescription";


const Experience = () => {
  return (
    <div className="mt-20 py-20 w-full" id = "experience">
      <h1 className="heading pb-10">
        My <span className="text-purple">work experience.</span>
      </h1>

      <div className="px-4 placeholder:w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            // borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col p-10  gap-2">
            <div className="lg:ms-5">
              <h1 className="text-start text-xl md:text-2xl font-bold pb-6">
                {card.title} <br/> <span className="text-purple">@ {card.company}</span>
              </h1>
              <JobDescription info = {card.desc}/>
            </div>
          </div>

          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;