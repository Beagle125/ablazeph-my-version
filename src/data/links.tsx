import { BiSolidDonateHeart } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuSpeech } from "react-icons/lu";
import { MdAutoStories, MdOndemandVideo, MdEmail } from "react-icons/md";
import { RiGalleryView, RiCrossFill, RiTeamFill } from "react-icons/ri";

export const leftLinks = [
  {
    name: "Memories",
    dropdown: [
      {
        name: "Gallery/Media",
        path: "gallery",
        description: "Watch our videos",
        icon: <RiGalleryView />,
        isBordered: true,
      },
      {
        name: "Testimonials/Stories",
        path: "testimonial",
        description: "Discover our impact stories",
        icon: <MdAutoStories />,
        isBordered: true,
      },
      {
        name: "Sermons/Messages",
        path: "sermons",
        description: "Worship services/outreach ",
        icon: <LuSpeech />,
        isBordered: false,
      },
    ],
  },
  {
    name: "Background",
    dropdown: [
      {
        name: "About Us",
        path: "about",
        description: "Story & core beliefs",
        icon: <RiCrossFill />,
        isBordered: true,
      },
      {
        name: "Leadership/Team",
        path: "leadership",
        description: "Pastors/elders/ministry heads",
        icon: <RiTeamFill />,
        isBordered: false,
      },
    ],
  },
  {
    name: "Ministries",
    dropdown: [
      {
        name: "What we Do",
        path: "what-we-do",
        description: "Gatherings/programs/ministries",
        icon: <FaPeopleGroup />,
        isBordered: true,
      },
      {
        name: "Join",
        path: "involved",
        description: "Participation & service",
        icon: <FaHandshake />,
      },
    ],
  },
];

export const rightLinks = [
  {
    name: "Events",
    path: "events",
    description: "Past & upcoming events",
    icon: <MdOndemandVideo />,
  },
  {
    name: "Give",
    path: "give",
    description: "Gcash/bank transfer",
    icon: <BiSolidDonateHeart />,
  },
  {
    name: "Plan your visit/contact us",
    path: "contact",
    description: "Email/visit/social media",
    icon: <MdEmail />,
  },
];
