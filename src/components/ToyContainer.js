import React, { useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys}) {

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(resp => resp.json())
    .then(toysArr => setToys(toysArr))
  }, [])

  const renderToys = toys.map(toy => {
    return <ToyCard key={toy.id} toy={toy} />
  })

  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
