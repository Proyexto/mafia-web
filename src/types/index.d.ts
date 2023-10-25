export interface Pic {
  id: string;
  download_url: string;
  width: number;
  height: number;
  author: string;
}

export interface iButton{
  text?: string;
  icon?: HTMLElement;
  onClick: void;
  type: "info" | "warning" | "danger" | "neutral" | "primary" | "secondary";
  className: string;
}

export interface iInput{
  placeholder?: string;
  icon?: HTMLElement;
  onChange: void;
  type: "text" | "password" | string;
  className: string;
}

export interface iLogo{
  direction?: "normal" | "reverse";
  size: "2xl" | "xl" | "lg" | "md" | "sm" | "base";

}