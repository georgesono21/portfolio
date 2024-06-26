import { technicalSkills } from "@/data";

const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap gap-4">
      {technicalSkills.map((section, index) => (
        <div key={index} className="flex-1 min-w-[200px]">
          <h3 className="font-bold text-lg">{section.category}</h3>
          <ul className="list-disc list-inside">
            {section.items.map((item, idx) => (
              <li key={idx} className="ml-4">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
