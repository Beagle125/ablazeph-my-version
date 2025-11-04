interface Props {
  onClick: () => void;
}

const HamburgerMenu = ({ onClick }: Props) => {
  return (
    <div className="flex flex--column hamburger__menu" onClick={onClick}>
      <div className="hamburger__bar"></div>
      <div className="hamburger__bar"></div>
      <div className="hamburger__bar"></div>
    </div>
  );
};

export default HamburgerMenu;
