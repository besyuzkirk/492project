import React, { useState } from "react";
import "./AutocompleteDropdown.scss";

const communities = [
  "Community 1",
  "Community 2",
  "Community 3",
  "Community 4"
];

function AutocompleteDropdown() {
  const [inputValue, setInputValue] = useState("");
  const [filteredCommunities, setFilteredCommunities] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length >= 2) {
      const filtered = communities.filter((community) =>
        community.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCommunities(filtered);
      setDropdownOpen(true);
    } else {
      setFilteredCommunities([]);
      setDropdownOpen(false);
    }
  };

  const handleSelectCommunity = (community) => {
    setInputValue(community);
    setFilteredCommunities([]);
    setDropdownOpen(false);
  };

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  return (
    <div className="autocomplete-dropdown">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={() => setDropdownOpen(true)}
        className="autocomplete-dropdown-input"
        placeholder="All"
      />
      {dropdownOpen && (
        <ul className="autocomplete-dropdown-list">
          {filteredCommunities.length > 0 ? (
            filteredCommunities.map((community, index) => (
              <li
                key={index}
                onClick={() => handleSelectCommunity(community)}
                className="autocomplete-dropdown-item"
              >
                {community}
              </li>
            ))
          ) : (
            <li className="autocomplete-dropdown-item no-results">
              No results found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default AutocompleteDropdown;
