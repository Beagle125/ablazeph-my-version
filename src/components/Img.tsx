interface Props {
  src: string;
  alt?: string;
  isCircle?: boolean;
  className?: string;
}

const Img = ({ src, alt, isCircle = false, className }: Props) => {
  return (
    <img
      className={`img ${isCircle && "img--circle"} ${className}`}
      src={src}
      alt={alt}
      loading="lazy"
    />
  );
};

export default Img;
