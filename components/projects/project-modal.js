import React, {useState, useEffect} from 'react';
import Carousel from '../carousel';

export default function ProjectModal(props) {

    // const [development, setDevelopment] = useState();
    
    console.log(props);
    const imgUrl = props.currentModalData.properties.Features.files;
    // useEffect(() => {
    //     if (props.currentModalData.properties.Development.rich_text[0].plain_text) {
    //         let str = props.currentModalData.properties.Development.rich_text[0].plain_text;
    //         setDevelopment(str.replace(/\n/ig, '<br>'));
    //         console.log(development);
    //     }
    // }, []);

    return (
        <div id="modal1" className="bg-black bg-opacity-40 w-[100%] h-[100%] fixed left-0 top-0 z-[999]">
            {props.loading?
                <div className="bg-white mx-auto border rounded-[10px] border-gray-400 p-10 w-2/3 max-h-[80vh] rounded-10 overflow-scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-gray-600 float-right text-4xl font-bold hover:text-black no-underline cursor-pointer " onClick={()=>props.setModalOpen(false)}>&times;</span>
                <div className="text-gray-600 p-10">

                <Carousel imgUrl={imgUrl}/>
                <h1 className="text-2xl font-bold">💡Background</h1>
                <div className="mb-[20px]">{props.currentModalData.properties.Background.rich_text[0].plain_text}</div>
                {props.currentModalData.properties.Development.rich_text[0].plain_text == '추가 예정' ?
                '' :
                <>
                    <h1 className="text-2xl font-bold">⚙️Development</h1>
                    <div className="mb-[20px]">
                        {
                            props.currentModalData.properties.Development.rich_text[0].plain_text.split('\n').map((line, index) => {
                                return (<span key={index}>{line}<br/></span>)
                            })
                        }
                    </div>
                </>
                }
                <h1 className="text-2xl font-bold">🛠️Tech Stack</h1>
                <div>
                    {
                        props.currentModalData.properties.TechStack.rich_text[0].plain_text.split('\n').map((line, index) => {
                            return (<span key={index}>{line}<br/></span>)
                        })
                    }
                </div>
                </div>
                {/* <!-- <p>modal1</p> --> */}
            </div>
            : 
            <div>loading</div>
            }
            
      </div>
    );
};