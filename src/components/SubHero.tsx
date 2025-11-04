import { FaYoutube } from "react-icons/fa";
import Button from "./Button";

const SubHero = () => {
  return (
    <section className="block block--shade subhero">
      <h2>Let's worship together, expectant for breakthrough!</h2>
      <Button className="flex align--center gap--md" color="youtube">
        Watch Sermons
        <FaYoutube size={20} />
      </Button>
    </section>
  );
};

export default SubHero;
