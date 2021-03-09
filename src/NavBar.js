import { NavLink } from "react-router-dom";

const NavBar = ({ dogs }) => {
  return (
    <nav>
      <NavLink exact to="/">
        <br></br>Home
      </NavLink>
      <NavLink exact to="/doglist">
        <br></br>AllDogs
      </NavLink>
      {dogs.map((dog) => (
        <NavLink key={dog.name} to={`/dog/${dog.name}`}>
          <br></br>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
