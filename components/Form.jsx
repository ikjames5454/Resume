'use client'
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const access_key = process.env.NEXT_PUBLIC_SECRET_ACESS_KEY

const Form = () => {
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 5000); 

      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", access_key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      if (result.success) {
        console.log("Form submitted successfully:", result);
        setSuccessMessage('Email sent successfully!');
        event.target.reset(); 
       
      } else {
        console.error("Form submission failed:", result);
        setSuccessMessage('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  }
//  ""932ccb39-f066-4a4f-9336-69c7ae1fe376"
  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      <div className="relative flex items-center">
        <Input type="text" name="name" placeholder="Name" required={true}/>
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" name="email" placeholder="Email" required={true}/>
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Textarea name="message" placeholder="Type Your Message Here" required={true}/>
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center max-w-[166px] gap-x-1">
        Let's Discuss <ArrowRightIcon size={20} />
      </Button>
      {successMessage && (
        <p className="text-green-500 mt-4 text-xl font-medium">{successMessage}</p>
      )}
    </form>
  );
};

export default Form;