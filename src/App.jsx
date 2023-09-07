import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";
  

const App = () => {

const [contacts,setContacts]=useState([]);
const [isOpen,setOpen]=useState(false);
const onOpen=()=>{
setOpen(true);
};
const onClose=()=>{
  setOpen(false);
  };


useEffect(()=>{

const getContacts=async() =>{
try{
const contactsRef=collection(db,"contacts");

onSnapshot(contactsRef,(snapshot)=>{
  const contactList=snapshot.docs.map((doc)=>{
    return {
      id:doc.id,
      ...doc.data()
    }
    
    });
    setContacts(contactList);
return contactList;
});
}catch(error){

  console.log(error);
}
};
getContacts();
},[]);


const filterContacts=(e)=>{
  const value=e.target.value;
  const contactsRef=collection(db,"contacts");

  onSnapshot(contactsRef,(snapshot)=>{
    const contactList=snapshot.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
      }
      
      });

      const filteredContacts=contactList.filter(contact=>
       contact.name.toLowerCase().includes(value.toLowerCase()) )
      setContacts(filteredContacts);
  return filteredContacts;
  });



}


  return (
<>
<div className="max-w-[370px] mx-auto px-4">
    <Navbar />
    <div className="flex gap-2">
    <div className="flex relative flex-grow items-center">
<FiSearch className="text-white text-3xl absolute ml-1" />
<input   onChange={filterContacts}  type="text" className=" h-10 flex-grow bg-transparent border  text-white pl-10 border-white rounded-md" /></div>

<AiFillPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white" />
</div>
<div className="mt-4 gap-4 flex flex-col" >
{contacts.length <=0 ? (<NotFoundContact />):contacts.map((contact)=>(

  <ContactCard key={contact.id} contact={contact} />
  ))}
</div>
    </div>
   <AddAndUpdateContact
   onClose={onClose}
   isOpen={isOpen}
   />
   <ToastContainer
   position="bottom-center"
   
   />
    </>
  );
};
export default App;
