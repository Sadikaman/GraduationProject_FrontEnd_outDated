import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";

export const Payment = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <Button onClick={() => setOpenModal(true)}>pay now</Button>
      <Modal
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
        className="font-kanit border-black"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col gap-8 items-center h-screen top-1">
            
         
         <div className="">

            <h1 className="flex justify-center font-medium xl:text-3xl md:2xl sm:xl">payment method</h1>
            <p className="text-sm text-gray-600 mt-9"> choose the payment method you want for this service</p>
            <div className="flex bg-gray-200 w-96 mt-5 h-20 rounded-3xl justify-center items-center gap-10">
            <img
             src="/telebirr.png" 
             alt=""
             className="w-12"
             />
             
             <p className="text-md font-medium text-gray-900 dark:text-white ">
              Pay With TeleBirr
            </p>
            <input 
            type="checkbox" 
            name="" 
            className="w-5 h-5 rounded-full"
            id="" 
            />

              </div>


              <div className="flex bg-gray-100 mt-8 w-96 h-20 gap-10 rounded-3xl justify-center items-center">
            <img
             src="/chapa.png" 
             alt=""
             className="w-20"
             />
               <p className="text-md font-medium text-gray-900 dark:text-white ">
              Pay With Chapa
            </p>
            <input 
            type="checkbox" 
            name="" 
            className="w-5 h-5 rounded-full"
            id="" />

              </div>


            </div>
            

            <Button className="w-[250px] rounded-xl bg-white text-black border-black hover:bg-black hover:text-white">
              Continue to Payment
            </Button>
            <Button color="dark" className="w-[250px] rounded-xl">
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
