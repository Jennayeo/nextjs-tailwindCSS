import React, {useState, useEffect} from 'react';

// import { Html, Head, Main, NextScript } from 'next/document'
import jennaEmoji from 'resources/emojijenna.png';
import Image from 'next/image';
// import ScrollDown from "resources/arrow-down.png";
import ProjectModal from "../components/projects/project-modal";

export default function AboutMe(props) {

  const [modalOpen, setModalOpen] = useState(false);
  const [currentModalData, setCurrentModal] = useState();
  const [showCards, setShowCards] = useState(false);
  const [projectDiv, setProjectDiv] = useState(false);
  const [projectDivOnBtnClicked, setProjectDivOnBtnClicked] = useState(false);


  useEffect(() => {
    if (projectDiv) {
      var location = document.querySelector("." + 'recent-work-container').offsetTop;
      window.scrollTo({top: location, behavior: 'smooth'});
      setShowCards(true);
    }
  }, [projectDiv])
  // const imgSrc = props.projectList.cover.file.url

  const projectDivOn = (name) => {
    setProjectDivOnBtnClicked(true);
    setProjectDiv(true);


  }

  // const goToScroll = (name) => {
  //   var location = document.querySelector("." + name).offsetTop;
  //   window.scrollTo({top: location, behavior: 'smooth'});
  //   setShowCards(true);
  // }

  const clickModalOpen = (project) => {
    setModalOpen(true);
    setCurrentModal(project);
  }

    return (
      <div id="aboutme-container">
        
      <div className={`${props.darkMode ? 'bg-[#222222]' : 'bg-white'} transition-colors duration-500 ease-in-out`}>
        <div className='w-[100vw] h-[100vh] 	'>
          <div className='flex h-[100%] mx-0 my-auto justify-center items-center'>

            <Image alt='introduction-img' src={jennaEmoji}/>
            <div className='w-[500px]'>
              <div className={`font-extrabold text-4xl	${props.darkMode ? 'text-[#dddddd]' : 'text-[#222222]'}`}>ABOUT</div>
              {/* {props.english?  */}
                <div className={`transition-opacity duration-500 ${props.english ? 'opacity-100' : 'opacity-0 h-0 invisible'} ${props.darkMode ? 'text-[#dddddd]' : 'text-[#222222]'}`}>
                  <p>My name is Jenna Yeo and I am a front-end developer with 2 years of experience in this field. I am very passionate about my work and take pride in creating services that are not only functional but also cater to the needs of the users.</p>
                  <p>Through my years of experience, I have honed my skills in HTML, CSS, and JavaScript and have also gained expertise in various front-end frameworks such as React and Angular. I have worked on a variety of projects, ranging from small websites to large-scale web applications, and have gained valuable experience and knowledge along the way.</p>
                  <p>My goal as a front-end developer is to create visually appealing, user-friendly, and accessible web applications that provide a seamless experience to the users. I believe that a great user experience is key to the success of any web application, and I strive to achieve this through my work.</p>
                  <p>Thank you for taking the time to view my portfolio, and I hope you enjoy browsing through my work.</p>
                </div>
                  {/* : */}
                  <div className={`transition-opacity duration-500 ${!props.english ? 'opacity-100' : 'opacity-0 h-0 invisible'}  ${props.darkMode ? 'text-[#dddddd]' : 'text-[#222222]'}`}>
                    <p className=''>월요일이 설레는 2년차 <span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'} animate-pulse delay-0`}>웹 </span><span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'} animate-pulse delay-1000`}>프</span><span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'} animate-pulse delay-2000`}>론</span><span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'} animate-pulse delay-3000`}>트</span><span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'} animate-pulse delay-4000`}>엔</span><span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'} animate-pulse delay-5000`}>드</span><span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'} animate-pulse delay-6000`}> 개</span><span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'} animate-pulse delay-7000`}>발</span><span className={`${props.darkMode ? 'text-[#ffffff]' : 'text-[#222222]'}animate-pulse delay-8000`}>자</span> 여지영입니다! </p>
                    <p>현재까지 다양한 프로젝트를 경험해오며, 웹 개발에 대한 열정과 끊임없는 학습 욕구를 가지고 있으며, 사용자의 경험을 개선하기 위해 항상 최선을 다하고 있습니다.</p>
                    <p>프론트엔드 기술에 대한 깊은 이해와 경험을 가지고있으며, 다양한 프레임워크와 라이브러리를 사용하여 웹 애플리케이션을 개발할 수 있습니다. 특히 React와 같은 프레임워크를 활용한 프로젝트에서 성과를 얻고 있습니다.</p>
                    <p>지난 몇 년 동안 다양한 프로젝트에 참여하면서 팀과의 협업 능력을 키웠습니다. Git을 사용하여 소스 코드를 버전 관리하고, 이슈 트래킹 시스템을 활용하여 팀원들과의 원활한 커뮤니케이션을 유지합니다. </p>
                    <p>저는 웹 개발자로서의 역량과 열정을 통해 사용자에게 가치 있는 경험을 제공하고 싶습니다. 사용자 중심의 웹 애플리케이션을 개발하고, 최적화된 코드와 효율적인 아키텍처를 구축하여 사용자의 요구에 부응하는 서비스를 제공하고자 합니다.    </p>
                  </div>
              {/* } */}
            </div>
          </div>
          {projectDiv? '':<div className={`${props.darkMode ? 'bg-white' : 'bg-[#222222]'} bg-opacity-10 w-[100%] h-[60px] absolute bottom-0 flex justify-center items-center	cursor-pointer ${props.darkMode ? 'text-[#dddddd]' : 'text-black'}`} onClick={() => projectDivOn()} >
              <span>
                see projects
              </span>
            </div>}
        </div>
        {/* <Image src={ScrollDown} onClick={() => projectDivOn()} className='flex justify-center w-[60px]'/> */}
        {/* <div id="scrollButton" className="scrollButton" onclick="goToScroll('recent-work-container')"><img src="resources/arrow-down.png"/></div> */}
      </div>
      {projectDivOnBtnClicked ? (
        <div className={`recent-work-container ${props.darkMode ? 'bg-[#060918]' : 'bg-white'} transition-colors duration-500 ease-in-out w-[100vw] h-[100vh]`}>
        {/* <!-- <div>My Recent Work</div> --> */}
        
        <div className='flex flex-wrap pt-[100px] w-[100%] max-w-[1200px] m-auto' id="open-modal">
        {props.projectList.map((project,index) => {
          return (
            <div className={`w-[calc(33.33%-20px)] max-h-[100px] m-[10px] cursor-pointer	box-border rounded-[10px] p-[15.55%] transition-all duration-300 ease-linear hover:translate-y-[-10px] hover:shadow-md animate-fadeInLeft`}
                onClick={() => clickModalOpen(project)} key={index} data-modal-target="#modal2"
                style={{ backgroundImage: `url(${project.cover?.file.url})`,backgroundSize: 'cover' }}
            />
            // </div>
          )
        })}
        {modalOpen? <ProjectModal setModalOpen={setModalOpen} currentModalData={currentModalData} loading={props.loading}/> : ''}
              
      </div>
      </div> 

      ) : 
      ''
      }
      
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

