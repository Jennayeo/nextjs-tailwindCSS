import React, {useState, useEffect} from 'react';
import Image from 'next/image';

export default function ProjectItem(props) {

  const clickModalOpen = (project) => {
    props.setModalOpen(true);
    props.setCurrentModal(project);
  }

    return (
        <div className={`w-[calc(33.33%-20px)] h-[42.55%] m-[10px] cursor-pointer  transition-all duration-300 ease-linear hover:translate-y-[-10px] hover:shadow-md animate-fadeInLeft`}
        onClick={() => clickModalOpen(props.project)} 
        // p-[15.55%]
        key={props.index} data-modal-target="#modal2"
        // style={{ backgroundImage: `url(${project.cover?.file.url})`,backgroundSize: 'cover' }}
        
    >
        {/* <div className='static'> */}
        <div className="relative w-[100%] h-[100%] " >

            <Image
                src={props.project.cover?.file.url}
                // className="w-full h-full"
                fill
                style={{borderRadius:'10px'}}
            />
        {/* </div> */}
        </div>
    </div>
    )
}




