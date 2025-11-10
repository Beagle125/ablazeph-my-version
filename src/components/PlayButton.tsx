import { FaPlay } from "react-icons/fa";

interface Props {
  inverted?: boolean;
  isWhite?: boolean;
  className?: string;
  onClick?: () => void;
}

const PlayButton = ({
  inverted = false,
  isWhite,
  className,
  onClick,
}: Props) => {
  return (
    <button
      className={`btn btn--circle ${inverted && "btn--inverted"} ${
        isWhite && "white"
      } ${className}`}
      onClick={onClick}
    >
      <FaPlay className="play__button" />
    </button>
  );
};

export default PlayButton;
