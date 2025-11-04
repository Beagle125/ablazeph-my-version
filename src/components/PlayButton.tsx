import { FaPlay } from "react-icons/fa";

interface Props {
  inverted?: boolean;
}

const PlayButton = ({ inverted = false }: Props) => {
  return (
    <button className={`btn btn--circle ${inverted && "btn--inverted"}`}>
      <FaPlay className="play__button" />
    </button>
  );
};

export default PlayButton;
