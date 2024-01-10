export type ClassNameProps = {
  className?: string;
};

export type MasonryComponentProps = {
  images: { src: string; type: string[] }[];
  className?: string;
};

export type InputComponentProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  placeholder?: string;
};

export enum SocialsNames {
  FACEBOOK = "Facebook",
  INSTAGRAM = "Instagram",
  WHATSAPP = "WhatsApp",
  EMAIL = "Email",
}
