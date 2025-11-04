import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "accent" | "special" | "youtube";
  type?: "circle" | "outline";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  color = "primary",
  type,
  className,
  onClick,
}: Props) => {
  return (
    <button
      className={`btn btn--${color} ${type ? `btn--${type}` : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
