import PersonCard from "./PersonCard";
import JC from "../assets/jc.jpg";
import Betchai from "../assets/betchai.jpg";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";
import SlideCard from "./SlideCard";

const slides = [
  {
    heading: "Ministry1",
    src: JC,
    description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
      officiis.
    `,
  },
  {
    heading: "Ministry1",
    src: Betchai,
    description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
      officiis.
    `,
  },
  {
    heading: "Ministry1",
    src: JC,
    description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
      officiis.
    `,
  },
  {
    heading: "Ministry1",
    src: Betchai,
    description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
      officiis.
    `,
  },
];

const HomeLeadership = () => {
  return (
    <section className="block container">
      <header className="header">
        <h2>Leadership</h2>
      </header>
      <div className="grid grid--1x2 grid--center">
        <PersonCard src={JC} heading="Pastor JC">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, error.
        </PersonCard>
        <PersonCard src={Betchai} heading="Pastor Betchai">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, error.
        </PersonCard>
      </div>
      <header>
        <h2>Meet Our Team</h2>
      </header>
      <Slider>
        {slides.map((slide, i) => (
          <SwiperSlide>
            <SlideCard
              heading={slide.heading}
              src={slide.src}
              style={i % 2 != 0 ? "light" : "dark"}
            >
              {slide.description}
            </SlideCard>
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default HomeLeadership;
