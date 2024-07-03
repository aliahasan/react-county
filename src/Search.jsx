/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    onSearch(searchText);
  }, [searchText ]);

  return (
    <div>
      <input
        onChange={handleChange}
        value={searchText}
        type="text"
        placeholder="Search Country"
      />
    </div>
  );
};

export default Search;
