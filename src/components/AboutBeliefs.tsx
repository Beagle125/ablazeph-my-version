import { SwiperSlide } from "swiper/react";
import Slider from "./Slider";
import PastorJC from "../assets/jc.jpg";
import GridCard from "./GridCard";

const gridCards = [
  {
    src: PastorJC,
    heading: "God",
    description: `
      We believe in one true and living God—Creator of all things, holy
      and unchanging, full of love, power, and truth. He exists eternally
      in three persons: Father, Son, and Holy Spirit—equal in glory, one
      in purpose. Through His grace, God is redeeming a people for
      Himself. He is worthy of all our love, praise, and worship.
    `,
  },
  {
    src: PastorJC,
    heading: "Jesus",
    description: `
      We believe Jesus Christ is the Son of God—fully God and fully man.
      He was born of a virgin, lived without sin, died for our sins, and
      rose again on the third day. He ascended to heaven, where He
      intercedes for us and leads His Church. One day, He will
      return—bodily and in glory—to reign forever.
    `,
  },
  {
    src: PastorJC,
    heading: "Holy Spirit",
    description: `
      We believe the Holy Spirit is God, active in the world today. He
      draws people to Christ, gives new life, and lives within every
      believer. We believe in the baptism in the Holy Spirit as a gift
      that empowers believers for bold witness and service. The Spirit
      produces godly character, gives spiritual gifts, and builds up the
      Church for the glory of God.
    `,
  },
  {
    src: PastorJC,
    heading: "Bible",
    description: `
      We believe the Bible—made up of 39 books in the Old Testament and 27
      in the New—is the inspired, error-free, and authoritative Word of
      God. It is without error, unchanging in truth, and completely
      trustworthy for teaching, correction, and guidance in all areas of
      life and faith.
    `,
  },
  {
    src: PastorJC,
    heading: "Salvation",
    description: `
      We believe salvation is God's gracious gift—planned from eternity
      and fulfilled in Jesus Christ. Through His death and resurrection,
      Jesus rescues lost sinners and offers new life to all who believe.
      By faith, not by works, we are forgiven, made right with God, filled
      with the Holy Spirit, and adopted into His family.
    `,
  },
  {
    src: PastorJC,
    heading: "Church",
    description: `
      We believe the Church includes all who trust Jesus as Lord and
      Savior. The local church is a community of believers in one place,
      united by a shared Mission, Vision, Core Values, and Statement of
      Faith, working together to follow Christ and serve others.
    `,
  },
];

const AboutBeliefs = () => {
  return (
    <section className="block container">
      <header>
        <h2>Our Beliefs</h2>
      </header>
      <Slider slidesPerView={1}>
        {gridCards.map((card) => (
          <SwiperSlide>
            <GridCard src={card.src} heading={card.heading}>
              {card.description}
            </GridCard>
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default AboutBeliefs;
