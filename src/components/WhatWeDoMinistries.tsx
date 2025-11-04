import CardFeature from "./CardFeature";
import JC from "../assets/jc.jpg";

const ministries = [
  {
    heading: "Women's Ministry",
    description: `
      Our mission is to nurture women in their spiritual growth and calling in 
      Christ, while also empowering them through activities that help them 
      discover their God-given potentials, cultivate resilience, and gain skills 
      that uplift their families and communities
    `,
    src: JC,
  },
  {
    heading: "Discipleship Ministry",
    description: `
      It exists to nurture spiritual growth and guide believers toward a lifelong, 
      wholehearted devotion to Christ—grounded in Scripture and committed to making 
      disciples
    `,
    src: JC,
  },
  {
    heading: "Youth & Young Professional Ministry",
    description: `
      Our mission is to lead young people to Christ with faith anchored in God's 
      Word, overflowing with love, obedience, and surrendered worship, while 
      empowering young professionals to deepen their faith, build intentional 
      relationships, and serve with purpose rooted in Christ's truth.
    `,
    src: JC,
  },
  {
    heading: "Kids Ministry",
    description: `
      Our mission is to faithfully train up the next generation by creating a 
      Christ-centered environment where they can discover and develop their 
      God-given potential. In strategic partnership with outreach, we are committed 
      to delivering engaging teaching and purposeful play that nurture spiritual 
      growth, build godly character, and a lifelong foundation of faith.
    `,
    src: JC,
  },
  {
    heading: "Outreach Ministry",
    description: `
      To implement outreach programs that cultivate children's holistic 
      development and bridge the gap through family involvement, and to empower 
      outreach volunteers to grow into servant leaders who reflect Christ's likeness, 
      lead with compassion, and serve with humility.
    `,
    src: JC,
  },
  {
    heading: "Praise & Worship Team",
    description: `
      To worship God in all aspects of life, encouraging the Body of Christ 
      to have a lifestyle of praise that extends beyond the church walls, and 
      cultivate relationship with Christ and fellow believers through intentional 
      discipleship.
    `,
    src: JC,
  },
  {
    heading: "PluggedIn (Media Ministry)",
    description: `
      To share God's Word through new media with a Spirit-led team anchored in 
      God's truth—equipping hearts, reaching lives, and glorifying Christ in 
      every output.
    `,
    src: JC,
  },
  {
    heading: "Ushering Ministry",
    description: `
      To faithfully serve by creating a Christ-centered atmosphere 
      through prayer, Spirit-led guidance, intentional discipleship, and 
      genuine care for each individual
    `,
    src: JC,
  },
  {
    heading: "Finance Ministry",
    description: `
      Stewards of church resources, ensuring faithful management and transparency.
    `,
    src: JC,
  },
];

const WhatWeDoMinistries = () => {
  return (
    <section className="block container">
      <header>
        <h2>Ministries</h2>
      </header>
      <div className="masonry">
        {ministries.map((ministry) => (
          <CardFeature heading={ministry.heading} src={ministry.src}>
            {ministry.description}
          </CardFeature>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoMinistries;
