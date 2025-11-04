import years from "../data/years";

interface Props {
  filteredText: string;
  onSetFilter: (year: string) => void;
  onClearFilter: () => void;
}

const GallerySideBar = ({
  filteredText,
  onSetFilter,
  onClearFilter,
}: Props) => {
  return (
    <aside className="gallery__sidebar">
      <ul className="flex flex--column sidebar__lists">
        {years.map((year) => (
          <li
            className={`sidebar__list ${filteredText === year && "active"}`}
            onClick={() => onSetFilter(year)}
          >
            {year}
          </li>
        ))}
        <li className="sidebar__list clear" onClick={onClearFilter}>
          Remove filter
        </li>
      </ul>
    </aside>
  );
};

export default GallerySideBar;
