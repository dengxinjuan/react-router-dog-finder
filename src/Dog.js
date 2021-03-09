import whiskey from "./images/whiskey.jpg";

const Dog = ({ dog }) => {
  return (
    <div>
      <h1>Name: {dog.name}</h1>
      <h1>Age: {dog.age}</h1>
      <h1>
        <img src={dog.src} alt={dog.name} />
      </h1>
      <h1>
        Facts:
        {dog.facts.map((k, v) => (
          <div>
            <li>
              {k}:{v}
            </li>
          </div>
        ))}
      </h1>
    </div>
  );
};

const data = {
  name: "Whiskey",
  age: 5,
  src: whiskey,
  facts: [
    "Whiskey loves eating popcorn.",
    "Whiskey is a terrible guard dog.",
    "Whiskey wants to cuddle with you!",
  ],
};

export default Dog;
