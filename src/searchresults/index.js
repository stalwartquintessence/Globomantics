import React from "react";
import { useParams } from "react-router-dom";
import SearchResultsRow from "./search-results-row";

const SearchResults = ({ allHouses }) => {
  const { country } = useParams();
  console.log("country is" + country);
  const filteredHouses = allHouses.filter((h) => h.country === country);

  console.log(filteredHouses);
  return (
    <div className="mt-2">
      <h4> Results for {country} </h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((h) => (
            <SearchResultsRow key={h.id} house={h} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
