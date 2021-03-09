import logo from "./logo.svg";
import "./App.css";
import DogList from "./DogList";
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import Dog from "./Dog";
import { BrowserRouter, NavLink, Route, Redirect } from "react-router-dom";
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.development";
import FilterDog from "./FilterDog";
import NavBar from "./NavBar";

function App({ dogs }) {
  return (
    <div className="App">
      <h1>Welcome to Dog World!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs} />

        <Route exact path="/doglist">
          <DogList dogs={dogs} />
        </Route>
        <Route exact path="/dog/:name">
          <FilterDog dogs={dogs} />
        </Route>

        <Redirect to="/doglist" />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore.",
      ],
    },
  ],
};

export default App;
