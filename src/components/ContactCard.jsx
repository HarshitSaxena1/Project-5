import { deleteDoc, doc } from "firebase/firestore";
import {HiOutlineUserCircle} from "react-icons/hi";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactCard = ({contact}) => {
    const [isOpen,setOpen]=useState(false);
const onOpen=()=>{
setOpen(true);
};
const onClose=()=>{
  setOpen(false);
  };


const deleteContact=async (id)=>{

try {
    await deleteDoc(doc(db,"contacts",id)); 
toast.success("Contact Deleted Success");
} catch (error) {
    console.log(error)
    
}

}

  return (
    <>
    <div key={contact.id} className="bg-yellow flex items-center p-2 rounded-lg justify-between">
    <div className="flex gap-1">
    <HiOutlineUserCircle className="text-blue text-4xl" />
    <div className="">
    <h2 className="text-medium">{contact.name}</h2>
    <p className="text-sm">{contact.email}</p>
    </div>
    </div>
    <div className="flex text-3xl">
    <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
    <IoMdTrash  onClick={()=>deleteContact(contact.id)} className="cursor-pointer text-blue" />
    </div>
      </div>
      <AddAndUpdateContact   contact={contact} 
      
      isUpdate isOpen={isOpen} onClose={onClose} />
</>
  )
}

export default ContactCard;