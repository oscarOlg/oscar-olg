import React from "react";
import { ReactComponent as FacebookLogo } from "../assets/svg/Facebook.svg";
import { ReactComponent as WhatsappLogo } from "../assets/svg/WhatsApp.svg";
import { ReactComponent as EmailLogo } from "../assets/svg/Email.svg";
import { ReactComponent as InstagramLogo } from "../assets/svg/Instagram.svg";
import { ClassNameProps, SocialsNames } from "./types";

const socials = [
  // {
  //   name: SocialsNames.FACEBOOK,
  //   width: 28,
  //   height: 35,
  //   url: "https://www.facebook.com/profile.php?id=100088045982178",
  // },
  {
    name: SocialsNames.INSTAGRAM,
    width: 25,
    height: 25,
    url: "https://www.instagram.com/oscar.olg.photo/",
  },
  {
    name: SocialsNames.EMAIL,
    width: 30,
    height: 30,
    url: "mailto:oscar.olg.photo@gmail.com",
  },
];

const getSocialLogo = (social: string, ref: React.ForwardedRef<any>) => {
  switch (social) {
    case SocialsNames.FACEBOOK:
      return <FacebookLogo ref={ref} className="w-[28px] h-[35px]" />;
    case SocialsNames.WHATSAPP:
      return <WhatsappLogo ref={ref} className="w-[25px] h-[25px]" />;
    case SocialsNames.EMAIL:
      return <EmailLogo ref={ref} className="w-[30px] h-[30px]" />;
    case SocialsNames.INSTAGRAM:
      return <InstagramLogo ref={ref} className="w-[25px] h-[25px]" />;
  }
};

export const SocialsComponent = React.forwardRef(
  ({ className }: ClassNameProps, ref) => {
    return (
      <div className={`flex md:gap-5 gap-6 items-center ${className}`}>
        {socials.map((app) => (
          <a
            href={app.url}
            key={app.name}
            target="_blank"
            rel="noopener noreferrer"
            className="transition rounded-xl opacity-60 hover:opacity-100"
          >
            {getSocialLogo(app.name, ref)}
          </a>
        ))}
      </div>
    );
  }
);
