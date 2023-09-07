import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({onClose,isOpen,children}) => {

  return createPortal (
    <>
    {isOpen && (
  <div className=" grid place-items-center absolute  top-0 z-40 backdrop-blur h-screen w-screen">
  
  <div className=" z-50 relative m-auto  min-h-[150px] bg-white p-4 min-w-[38%]">
  <div className="flex justify-end">
  <AiOutlineClose onClick={onClose} className="text-2xl self-end" />
  </div>
{children}
</div>
  <div onClick={onClose} className="absolute  top-0 z-40 backdrop-blur h-screen w-screen">

  </div>
  
  </div>

  )}
    </>
  ,document.getElementById("modal-root"));
}

export default Modal;