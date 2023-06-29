import React, { useEffect, useState} from 'react';
import Image from 'next/image';
import js from 'resources/skills/java-script.png';
import react from 'resources/skills/react.png';
import ts from 'resources/skills/typescript.png';
import jenna from 'resources/jenna.png';
import moveBtn from 'resources/right.png';
import Link from 'next/link';

export default function Main({}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    },[])

    return (
        <div id="main-page" className={'flex'}>
            <div className="font-bold text-6xl	m-auto ">
                Hi! I am <span className="text-base bg-[#f7df1e] rounded-[30px] p-2.5">front-end engineer</span><p>Jenna Jiyoung Yeo</p>
                <Link href="/project">
                    <Image src={moveBtn} alt="moveBtn"/>
                </Link>
                {/* <img class='move-button' src='' id='moveto-about'/> */}
            </div>
            <div className="w-[360px] h-4/5 bg-[#E2DED0] relative m-auto opacity-100">
                <div className="absolute w-[80px] h-20 bg-[#fff] rounded-full flex items-center justify-center shadow-lg right-[40px] top-[400px] animate-bounce">
                    <Image className="w-[50px]" src={js} alt="js"/>
                </div>
                <div className="absolute w-[80px] h-20 bg-[#fff] rounded-full flex items-center justify-center shadow-lg left-[40px] top-[100px] animate-bounce">
                    <Image className="w-[50px]" src={react} alt="react"/>
                </div>
                <div className="absolute w-[80px] h-20 bg-[#fff] rounded-full flex items-center justify-center shadow-lg left-[10px] top-[300px] animate-bounce">
                    <Image className="w-[50px]" src={ts} alt="ts"/>
                </div>
                <Image src={jenna} alt="jenna"/>
            </div>
            {/* <script src="main.js"></script> */}
        </div>
    )
}