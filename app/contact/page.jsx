import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mt-6 xl:mb-24">
        <div className="flex flex-col justify-center">
          <div  className="flex items-center gap-x-4 text-primary text-lg mb-4">
            <span className="w-[30px] h-[2px] bg-primary"></span>
       Say Hello 👏 
        </div>
        <h1 className="h1 max-w-md mb-8">Let's Work Together</h1>
        <p className="subtitle max-w-[400px]">
        As a passionate software developer, I thrive on turning ideas into reality. Whether you have a project in mind, need help with a technical challenge, or simply want to connect, I'm here to help
        </p>
        </div>
        <div className="hidden xl:flex w-full bg-contain bg-top bg-no-repeat bg-contact_illustration_light dark:bg-contact_illustration_dark"></div>
        </div>
      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32 xl:gap-x-80">
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
        <div className="flex items-center gap-x-8">
          <MailIcon size={18} className="text-primary"/>
          <div>ikennajames03@gmail.com</div>
          </div>
          <div className="flex items-center gap-x-8">
          <HomeIcon size={18} className="text-primary"/>
          <div>No 24 Ike-Oluwa Street,Redeem Bus/stop,Iju-Ishaga, Lagos State</div>
          </div>
          <div className="flex items-center gap-x-8">
          <PhoneCall size={18} className="text-primary"/>
          <div>08149661102</div>
          </div>
          </div>
          <Form/>
         </div>
      </div>
    </section>
  )
}

export default Contact;