import React from 'react'

const JobDescription = ({info}:{info:string[]}) => {
  return (
    
        <ul className="list-disc list-outside">
        {info.map((item, idx) => (
            <li key={idx} className="ml-4 text-start py-2">
                <span>{item}</span></li>
        ))}
        </ul>
      
  );
};

export default JobDescription