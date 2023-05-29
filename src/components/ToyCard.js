import React from "react";

function ToyCard({ toy, setToys }) {

  let {id, name, image, likes} = toy;

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

  const handleClick = (id) => {

    ++likes

    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ 'likes' : likes })
    })
    .then(resp => resp.json())
    .then(setToys(preToys => preToys.filter(toy => toy.id === id ? toy.likes = likes : toy)))
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
      <button className="like-btn"onClick={() => handleClick(id)} >Like {"❤️"}</button>
      <button className="del-btn" onClick={() => handleDelete(id)} >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
