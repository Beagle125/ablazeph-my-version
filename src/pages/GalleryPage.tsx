import { useState } from "react";
import GalleryGrid from "../components/GalleryGrid";
import GalleryHeader from "../components/GalleryHeader";
import GallerySideBar from "../components/GallerySideBar";

const GalleryPage = () => {
  const [filteredText, setFilteredText] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleFilter = (year: string) => {
    setFilteredText(year);
    setSearchText("");
  };

  return (
    <div className="grid gap--xlg gallery">
      <GallerySideBar
        filteredText={filteredText}
        onSetFilter={(year) => handleFilter(year)}
        onClearFilter={() => setFilteredText("")}
      />
      <main className="block">
        <GalleryHeader />
        <GalleryGrid
          searchText={searchText}
          onSearch={(value) => setSearchText(value)}
          filteredText={filteredText}
          onSetFilter={(year) => handleFilter(year)}
          onClearFilter={() => setFilteredText("")}
        />
      </main>
    </div>
  );
};

export default GalleryPage;
