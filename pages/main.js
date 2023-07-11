import React, { useEffect, useState} from 'react';
import Image from 'next/image';
import js from 'resources/skills/java-script.png';
import react from 'resources/skills/react.png';
import ts from 'resources/skills/typescript.png';
import css from 'resources/skills/css-3.png';
import next from 'resources/skills/next.png';

import jenna from 'resources/jenna.png';
import moveBtn from 'resources/right.png';
import Link from 'next/link';

export default function Main({}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    },[])

    return (
        <div id="main-page" className={'flex h-[100vh] w-[100vw]'}>
            <div className="font-bold text-6xl	m-auto ">
                Hi! I am <span className="text-base bg-[#f7df1e] rounded-[30px] p-2.5">front-end engineer</span><p>Jenna Jiyoung Yeo</p>
                <Link href="/project">
                    {/* <Image src={moveBtn} alt="moveBtn"/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </Link>
                {/* <img class='move-button' src='' id='moveto-about'/> */}
            </div>
            <div className="w-[360px] pt-[270px] bg-[#E2DED0] relative m-auto opacity-100">
                <div className="absolute w-[80px] h-20 bg-[#fff] rounded-full flex items-center justify-center shadow-lg right-[40px] top-[400px] animate-bounce">
                    <Image className="w-[50px]" src={js} alt="js"/>
                </div>
                <div className="absolute w-[80px] h-20 bg-[#fff] rounded-full flex items-center justify-center shadow-lg left-[40px] top-[100px] animate-bounce">
                    <Image className="w-[50px]" src={react} alt="react"/>
                </div>
                <div className="absolute w-[80px] h-20 bg-[#fff] rounded-full flex items-center justify-center shadow-lg left-[10px] top-[300px] animate-bounce">
                    <Image className="w-[50px]" src={ts} alt="ts"/>
                </div>
                <div className="absolute w-[80px] h-20 bg-[#fff] rounded-full flex items-center justify-center shadow-lg left-[40px] top-[500px] animate-bounce">
                    <Image className="w-[50px]" src={css} alt="css"/>
                </div>
                <div className="absolute w-[80px] h-20 bg-[#fff] rounded-full flex items-center justify-center shadow-lg left-[250px] top-[200px] animate-bounce">
                    <Image className="w-[50px]" src={next} alt="next"/>
                </div>
                <Image src={jenna} alt="jenna"/>
            </div>
            {/* <script src="main.js"></script> */}
        </div>
    )
}