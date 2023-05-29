import React from "react";

function ToyCard({ toy, setToys }) {

  const {id, name, image, likes} = toy;

  const handleDelete = (id) => {

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(setToys(preToys => {
      return preToys.filter(toy => toy.id !== id)
    }))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(id)} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
