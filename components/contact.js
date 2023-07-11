import React, {useState, useEffect} from 'react';
import Header from "./header";
import AboutMe from "./about-me";
import { TOKEN, DATABASE_ID } from '../config';
import jennaAtWork from '../resources/jennaAtWork.jpg';
import Image from 'next/image';


export default function Contact({result}) {
    const [ english, setEnglish ] = useState(false);
    const [ darkMode, setDarkMode ] = useState(true);
     const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      setLoading(true);
    }, []);

    return (
        <div className='h-[100vh] w-[100%]'>
            <div className="m-auto w-[100%] h-[100%]">

                <Image src={jennaAtWork} width={400}/>
            </div>
        </div>
    )
}
