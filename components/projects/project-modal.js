export default function ProjectModal(props) {
    return (
        <div id="modal1" className="bg-black bg-opacity-40 w-[100%] h-[100%] fixed left-0 top-0 z-[999]">
            <div className="bg-white mx-auto p-20 border rounded-[10px] border-gray-400 w-80 max-h-80vh rounded-10 overflow-scroll fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="text-gray-600 float-right text-2xl font-bold hover:text-black no-underline cursor-pointer" onClick={()=>props.setModalOpen(false)}>&times;</span>
                <div id="modal-content"></div>
                {/* <!-- <p>modal1</p> --> */}
            </div>
      </div>
    );
};