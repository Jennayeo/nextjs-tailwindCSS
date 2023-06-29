import React, {useState, useEffect} from 'react';

import { Html, Head, Main, NextScript } from 'next/document'
import jennaEmoji from 'resources/emojijenna.png';
import Image from 'next/image';
import ScrollDown from "resources/arrow-down.png";
import ProjectModal from "../components/projects/project-modal";

export default function AboutMe(props) {

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    console.log(props);
    props.projectList.map((project) => {
      console.log(project);
    })
  }, [])

  // const imgSrc = props.projectList.cover.file.url

  const goToScroll = (name) => {
    var location = document.querySelector("." + name).offsetTop;
    window.scrollTo({top: location, behavior: 'smooth'});
  }

    return (
      <div id="aboutme-container" >
        
      <div>
        <div className='flex w-[100vw] h-[100vh] mx-0 my-auto justify-center items-center	'>
          <Image alt='introduction-img' src={jennaEmoji}/>
          <div className='w-[500px]'>
            {/* {props.english?  */}
              <div className={`transition-opacity duration-500 ${props.english ? 'opacity-100' : 'opacity-0 h-0 invisible'}`}>
                <p>My name is Jenna Yeo and I am a front-end developer with 2 years of experience in this field. I am very passionate about my work and take pride in creating services that are not only functional but also cater to the needs of the users.</p>
                <p>Through my years of experience, I have honed my skills in HTML, CSS, and JavaScript and have also gained expertise in various front-end frameworks such as React and Angular. I have worked on a variety of projects, ranging from small websites to large-scale web applications, and have gained valuable experience and knowledge along the way.</p>
                <p>My goal as a front-end developer is to create visually appealing, user-friendly, and accessible web applications that provide a seamless experience to the users. I believe that a great user experience is key to the success of any web application, and I strive to achieve this through my work.</p>
                <p>Thank you for taking the time to view my portfolio, and I hope you enjoy browsing through my work.</p>
              </div>
                {/* : */}
                <div className={`transition-opacity duration-500 ${!props.english ? 'opacity-100' : 'opacity-0 h-0 invisible'}`}>
                  <p>월요일이 설레는 2년차 웹 프론트엔드 개발자 여지영입니다! </p>
                  <p>현재까지 다양한 프로젝트를 경험해오며, 웹 개발에 대한 열정과 끊임없는 학습 욕구를 가지고 있으며, 사용자의 경험을 개선하기 위해 항상 최선을 다하고 있습니다.</p>
                  <p>제가 가장 자랑스러워하는 부분은 프론트엔드 기술에 대한 깊은 이해와 경험입니다. HTML, CSS, JavaScript를 비롯한 프론트엔드 기술들을 마스터하고 있으며, 다양한 프레임워크와 라이브러리를 사용하여 웹 애플리케이션을 개발할 수 있습니다. 특히 React와 Vue.js와 같은 프론트엔드 프레임워크를 활용한 프로젝트에서 성과를 얻고 있습니다.</p>
                  <p>지난 몇 년 동안 다양한 프로젝트에 참여하면서 팀과의 협업 능력을 키웠습니다. Git을 사용하여 소스 코드를 버전 관리하고, 이슈 트래킹 시스템을 활용하여 팀원들과의 원활한 커뮤니케이션을 유지합니다. 또한 Agile 방법론을 적용하여 프로젝트 일정과 우선순위를 관리하며, 지속적인 통합 및 배포를 통해 개발과정을 최적화합니다.</p>
                  <p>저는 웹 개발자로서의 역량과 열정을 통해 사용자에게 가치 있는 경험을 제공하고 싶습니다. 사용자 중심의 웹 애플리케이션을 개발하고, 최적화된 코드와 효율적인 아키텍처를 구축하여 사용자의 요구에 부응하는 서비스를 제공하고자 합니다.    </p>
                </div>
            {/* } */}
          </div>
        </div>
        <Image src={ScrollDown} onClick={()=>goToScroll('recent-work-container')} className='flex justify-center w-[60px]'/>
        {/* <div id="scrollButton" className="scrollButton" onclick="goToScroll('recent-work-container')"><img src="resources/arrow-down.png"/></div> */}
      </div>
      <div className="recent-work-container">
        {/* <!-- <div>My Recent Work</div> --> */}
        
        <div className='flex flex-wrap w-[90%] h-[90%]' id="open-modal">
        {props.projectList.map((project) => {
          return (
            <div className="w-[calc(33.33%-20px)] m-[10px] cursor-pointer	box-border rounded-[10px] p-[18.25%] border border-sky-500 transition-all duration-300 ease-linear hover:translate-y-[-10px] hover:shadow-md" 
                  onClick={()=>setModalOpen(true)} data-modal-target="#modal2"
                  style={{ backgroundImage: `url(${project.cover.file.url})` }}
                  >
                  {/* <Image src={project.cover.file.url} className="" width={500} height={100}/> */}
            {/* <img src="resources/project/fms-forBusinessStaff3.png" alt="Project 2"> */}
              <h3>Project 2</h3>
            </div>
          )
        })}
        {modalOpen? <ProjectModal setModalOpen={setModalOpen}/> : ''}
              
      </div>
      </div> 
{/* 
      <!-- <button >Open Modal</button> -->
      <!-- modal section -->
      <div id="modal1" className="modal">
          <div className="modal-content">
              <span className="close">&times;</span>
              <div id="modal-content"></div>
              <!-- <p>modal1</p> -->
          </div>
      </div>
      <div id="modal2" className="modal">
          <div className="modal-content">
              <span className="close">&times;</span>
              <h1>💡 Background</h1>
              <p>This is a team project that created a community to find hiking partners. SANTA is a service that helps people find hiking partners who are hesitant to go hiking alone and whose acquaintances are too busy to join. The service allows the host of a hiking event to accept or reject applicants and allows participants to apply for or cancel their participation. Users can also leave reviews for events they have participated in. The project was developed using React, a JavaScript-based framework, and Redux for state management. Through this project, the team was able to improve their collaboration skills with backend developers and designers.</p>
              <!-- <h1>🛠Development</h1> -->
              <p>Kakao social login
                  Host events:
                  The host can write a recruitment post by adding desired date, location, number of people, image, and content.
                  The host can accept or reject applicants.
                  The post is automatically closed when the host wants to close it or when the recruitment period is over.
                  Participate in events:
                  Users can apply to desired events.
                  They can cancel their application before the event is closed.
                  Leave reviews for events:
                  Users can only leave reviews for events they have participated in.
                  My Page:
                  Users can check events they have applied, participated, or written.
                  They can also check events other users have applied, participated, or written.</p>
              <h1>🛠 Tech Stack</h1>
              <p>
                  - React
                  - Java Script
                  - redux
              </p>
          </div>
      </div>
      <div className="recent-work-container">
        <!-- <div>My Recent Work</div> -->
        <div className='project-container' id="open-modal">
            <div className="project" onclick="openModal('project1')" data-modal-target="#modal1">
                <img src="resources/project/fms-forBusiness2.png" alt="Project 1">
                <h3>Project 1</h3>
              </div>
              
              <div className="project" onclick="openModal('project2')" data-modal-target="#modal2">
                <img src="resources/project/fms-forBusinessStaff3.png" alt="Project 2">
                <h3>Project 2</h3>
              </div>
              
              <div className="project" onclick="openModal('project3')">
                <img src="resources/project/fms1.png" alt="Project 3">
                <h3>Project 3</h3>
              </div>
              
              <div className="project" onclick="openModal('project4')">
                <img src="resources/project/fmsStaff1.png" alt="Project 4">
                <h3>Project 4</h3>
              </div>
              
              <div className="project" onclick="openModal('project5')">
                <img src="resources/project/santa_project.png" alt="Project 5">
                <h3>Project 5</h3>
              </div>
              
              <div className="project" onclick="openModal('project6')">
                <img src="project6.jpg" alt="Project 6">
                <h3>Project 6</h3>
              </div>
      </div>
      </div> */}
    </div>
    )
}

