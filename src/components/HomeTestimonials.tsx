import { IoChatbubbleSharp } from "react-icons/io5";
import Testimonial from "./Testimonial";

const HomeTestimonials = () => {
  return (
    <section className="home__testimonials">
      <div className="circle"></div>
      <div className="block container">
        <header>
          <h2>What Our Members Say.</h2>
        </header>
        <div className="flex gap--md align--center">
          <span className="flex justify--center align--center justify--center testimonial__bubble">
            <IoChatbubbleSharp />
          </span>
          <span className="testimonial__text">Success Stories</span>
        </div>
        <div className="grid grid--1x2 gap--sm">
          <Testimonial
            name="Stevenson Chin"
            date="March 22"
            commenterType="Member"
          >
            It was such an amazing experience, OMG. How did they create
            something so CRAZY I LOVE IT. Thank you so mUCH ABLAZE for this
            wonderful blessing. We wil always be together in JESUS hearts.
          </Testimonial>
          <Testimonial
            name="Stevenson Chin"
            date="March 22"
            commenterType="Member"
          >
            It was such an amazing experience, OMG. How did they create
            something so CRAZY I LOVE IT. Thank you so mUCH ABLAZE for this
            wonderful blessing. We wil always be together in JESUS hearts.
          </Testimonial>{" "}
          <Testimonial
            name="Stevenson Chin"
            date="March 22"
            commenterType="Member"
          >
            It was such an amazing experience, OMG. How did they create
            something so CRAZY I LOVE IT. Thank you so mUCH ABLAZE for this
            wonderful blessing. We wil always be together in JESUS hearts.
          </Testimonial>{" "}
          <Testimonial
            name="Stevenson Chin"
            date="March 22"
            commenterType="Member"
          >
            It was such an amazing experience, OMG. How did they create
            something so CRAZY I LOVE IT. Thank you so mUCH ABLAZE for this
            wonderful blessing. We wil always be together in JESUS hearts.
          </Testimonial>{" "}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
