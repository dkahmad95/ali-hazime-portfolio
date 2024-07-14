import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Link from "next/link";

const Contact = () => (
  <section>
    <div className="container mx-auto">
      {/* text and illustration */}
      <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-12">
        {/* text */}
        <div className="flex flex-col justify-center">
          <h1 className="h2 max-w-md mb-8 text-primary">
            Elevate Your Systems Performance!
          </h1>
          <p className="subtitle max-w-[400px]">
            Ready to optimize your infrastructure and solve complex challenges?
            Let’s work together to enhance system efficiency and drive
            innovation!
          </p>
        </div>
        {/* illustration */}
        <div className="hidden md:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
      </div>

      {/* info text and forms */}
      <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
        {/* info text */}
        <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg ">
          {/* address 1 */}
          <div className="flex items-center gap-x-8">
            <HomeIcon size={18} className="text-primary" />
              <div>Beirut, Lebanon</div>
          </div>
          {/* mail */}
          <div className="flex items-center gap-x-8">
            <MailIcon size={18} className="text-primary" />
            <a href="mailto:ali.k.hazime@gmail.com">
            <div>ali.k.hazime@gmail.com</div>
            </a>
          </div>
          {/* phone */}
          <div className="flex items-center gap-x-8">
            <PhoneCall size={18} className="text-primary" />
            <div>+961 70 999 302</div>
          </div>
        </div>
        {/* <form>
          <Form />
        </form> */}
      </div>
    </div>
  </section>
);

export default Contact;
