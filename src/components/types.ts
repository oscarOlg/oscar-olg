import { DocumentData } from "firebase/firestore";

export type ClassNameProps = {
  className?: string;
};

export type MasonryComponentProps = {
  images: DocumentData[];
  className?: string;
};

export type CarouselComponentProps = {
  images: DocumentData[];
  className?: string;
};

export type InputComponentProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder?: string;
};

export type ImageCoverLinkComponentProps = {
  image: string;
  link: string;
  title: string;
  description?: string;
};

export enum SocialsNames {
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram",
  WHATSAPP = "WhatsApp",
  EMAIL = "Email",
}
