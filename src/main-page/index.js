import { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseFilter from "./house-filter";
import SearchResults from "../searchresults";
import HouseFromQuery from "../house/HouseFromQuery";

function App() {
  //let allHouses = [];
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
      //console.log(houses);
    };
    fetchHouses();
  }, []);
  // eslint-disable-next-line
  const featuredHouse = useMemo(() => {
    // get the length of the houses array
    // return a random index
    if (allHouses.length) {
      // console.log(Math.random());
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      //console.log(randomIndex);
      //console.log(allHouses[randomIndex]);
      return allHouses[randomIndex];
    }
  });

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />
        <Switch>
          <Route exact path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
