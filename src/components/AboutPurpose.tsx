const purposes = [
  {
    heading: "Vision",
    description: `
        To exalt, honor, and magnify God, reflect Christ by living as His
        committed followers, and make will transform this nation.
    `,
  },
  {
    heading: "Mission",
    description: `
        Our mission is to enlighten minds and transform lives by leading
        people and generations to live in Christ - intentionally sharing
        His word, empowering through discipleship, and equipping for
        faith-rooted leadership.
    `,
  },
  {
    heading: "Our Verse",
    description: `
        18 Then Jesus came to them and said, “All authority in heaven and
        on earth has been given to me. 19 Therefore go and make disciples
        of all nations, baptizing them in the name of the Father and of
        the Son and of the Holy Spirit, 20 and teaching them to obey
        everything I have commanded you. And surely I am with you always,
        to the very end of the age.” - Matthew 28: 18-20 NIV
    `,
  },
];

const AboutPurpose = () => {
  return (
    <section className="block purpose">
      <div className="container">
        <header>
          <h2>Our Purpose</h2>
        </header>
        <div className="grid grid--1x2 gap--sm">
          {purposes.map((purpose) => (
            <div className="purpose__content">
              <h3>{purpose.heading}</h3>
              <p>{purpose.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPurpose;
