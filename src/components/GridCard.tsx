interface Props {
  heading: string;
  children: string;
}

const GridCard = ({ heading, children }: Props) => {
  return (
    <article className="card grid__card">
      <div>
        <h3>{heading}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
};

export default GridCard;
