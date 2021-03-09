const DogList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((i) => (
        <div>
          <li>{i.name}</li>
          <img src={i.src} alt={i.name} />
        </div>
      ))}
    </div>
  );
};

export default DogList;
