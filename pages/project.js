import React, {useState, useEffect} from 'react';
import Header from "../components/header";
import AboutMe from "../components/about-me";
import { TOKEN, DATABASE_ID } from '../config';
import Contact from "../components/contact";

export default function Project({result}) {
    const [ english, setEnglish ] = useState(false);
    const [ darkMode, setDarkMode ] = useState(true);
     const [ loading, setLoading ] = useState(false);

    useEffect(() => {
      setLoading(true);
    }, []);

    return (
        <div className='h-[100vh]'>
            <Header setEnglish={setEnglish} english={english} setDarkMode={setDarkMode} darkMode={darkMode}/>
            <AboutMe english={english} projectList={result.results} loading={loading} darkMode={darkMode}/>
            {/* <Contact /> */}
        </div>
    )
}

// 빌드 타임에 호출
export async function getServerSideProps() {

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({page_size: 100})
    };
    
    // 데이터가 다 받아질때까지 기다림
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    const result = await res.json();

    // await setLoading(false);

    const projectIds = result.results.map((aProject) => (
        aProject.properties.이름.title[0].plain_text
    ))

    return {
      props: {result},
    }
  }