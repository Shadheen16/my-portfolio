import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from '../Home/components/Navbar/Navbar';
import ContactSvg from './ContactSvg/ContactSvg';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_emwx83g', 'template_5xlqlc1', e.target, 'user_AhCg011iEkqKMvRD1Zu1q')
      .then((result) => {
        if (result.text==="OK"){
          alert("Email sent");
          e.target.reset();
        }
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-[100vh] pt-20 flex flex-cols-reverse md:grid md:grid-cols-2 justify-center items-center">
        <form className=" text-center" ref={form} onSubmit={sendEmail}>
          <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-clr-dark">
            Send Email
          </h1>
          <div className="py-2 text-left">
          <label>Name</label>
          <input className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-transparent focus:ring-clr-accent focus:ring-2"  type="text" name="name" />
          </div>
          <div className="py-2 text-left">
            <label>Email</label>
          <input className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-transparent focus:ring-clr-accent focus:ring-2"  type="email" name="email" />
          </div>
          <div className="py-2 text-left">
          <label>Message</label>
          <textarea className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-transparent focus:ring-clr-accent focus:ring-2 "  name="message" />
          <input className="text-md rounded-lg text-clr-dark w-full my-5 py-3 font-semibold bg-clr-accent hover:ring-4 hover:ring-clr-accent hover:ring-offset-2"  type="submit" value="Send" />
          </div>
          
        </form>
          <div className="sm:pl-10">
             <ContactSvg />
          </div>
       
      </div>
    </>
  );
};