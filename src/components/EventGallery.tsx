import Event1 from "../assets/events/event-1.jpg";
import Event2 from "../assets/events/event-2.jpg";
import Event3 from "../assets/events/event-3.jpg";
import Event4 from "../assets/events/event-4.jpg";
import Event5 from "../assets/events/event-5.jpg";
import Event6 from "../assets/events/event-6.jpg";
import Event7 from "../assets/events/event-7.jpg";
import Event8 from "../assets/events/event-8.jpg";
import Event9 from "../assets/events/event-9.jpg";
import Event10 from "../assets/events/event-10.jpg";
import Event11 from "../assets/events/event-11.jpg";
import Event12 from "../assets/events/event-12.jpg";
import Event13 from "../assets/events/event-13.jpg";
import Event14 from "../assets/events/event-14.jpg";
import Event15 from "../assets/events/event-15.jpg";
import Event16 from "../assets/events/event-16.jpg";
import Event17 from "../assets/events/event-17.jpg";
import Event18 from "../assets/events/event-18.jpg";
import Event19 from "../assets/events/event-19.jpg";
import Event20 from "../assets/events/event-20.jpg";
import Img from "./Img";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const events = [
  {
    date: "2025",
    images: [
      {
        src: Event1,
      },
      {
        src: Event2,
      },
      {
        src: Event3,
      },
      {
        src: Event4,
      },
      {
        src: Event5,
      },
      {
        src: Event6,
      },
      {
        src: Event7,
      },
    ],
  },
  {
    date: "2024",
    images: [
      {
        src: Event8,
      },
      {
        src: Event9,
      },
      {
        src: Event10,
      },
      {
        src: Event11,
      },
      {
        src: Event12,
      },
      {
        src: Event13,
      },
      {
        src: Event14,
      },
    ],
  },
  {
    date: "2023",
    images: [
      {
        src: Event15,
      },
      {
        src: Event16,
      },
      {
        src: Event17,
      },
      {
        src: Event18,
      },
      {
        src: Event19,
      },
      {
        src: Event20,
      },
    ],
  },
];

const upcoming = [Event1, Event2, Event3, Event4, Event5];

const EventGallery = () => {
  const [zoomedImage, setZoomedImage] = useState("");

  return (
    <>
      {zoomedImage && <div className="zoom__background"></div>}
      <section className="block event-gallery">
        <div className="container">
          <header className="event-gallery__header">
            <h1>Events</h1>
          </header>
        </div>
        <div className="container">
          <header>
            <h2 className="event-gallery__heading">Upcoming</h2>
            <span className="event__date"></span>
          </header>
          <div className="flex flex--wrap gap--md justify--center event-gallery__container">
            {upcoming.map((image) => (
              <figure
                className={`image__container ${
                  zoomedImage === image && "active"
                }`}
              >
                <span
                  className={`image__close ${
                    zoomedImage === image && "active"
                  }`}
                  onClick={() => setZoomedImage("")}
                >
                  <IoCloseOutline />
                </span>
                <div
                  className="flex justify--center align--center image__overlay"
                  onClick={() => setZoomedImage(image)}
                >
                  <div className="flex flex--column align--center overlay__content">
                    <h3>View</h3>
                  </div>
                </div>
                <Img src={image} className="event-gallery__image" />
              </figure>
            ))}
          </div>
        </div>
        {events.map((event) => (
          <>
            <header className="block container flex gap--md align--center">
              <h2 className="event-gallery__heading">
                {new Date().getFullYear().toString() === event.date
                  ? "Now"
                  : "Past"}
              </h2>
              <span className="event-gallery__date">{event.date}</span>
            </header>
            <div className="masonry gallery__grid event-gallery__grid">
              {event.images.map((image) => (
                <figure
                  className={`image__container ${
                    zoomedImage === image.src && "active"
                  }`}
                >
                  <span
                    className={`image__close ${
                      zoomedImage === image.src && "active"
                    }`}
                    onClick={() => setZoomedImage("")}
                  >
                    <IoCloseOutline />
                  </span>
                  <div
                    className="flex justify--center align--center image__overlay"
                    onClick={() => setZoomedImage(image.src)}
                  >
                    <div className="flex flex--column align--center overlay__content">
                      <h3>View</h3>
                    </div>
                  </div>
                  <Img src={image.src} className="event-gallery__image" />
                </figure>
              ))}
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default EventGallery;
