import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Details({ movis }) {
  let { id } = useParams();
  const Navigate = useNavigate();

  return (
    <div>
      {movis
        .filter((movi) => movi.id == id)
        .map((movi) => (
          <div>
            <Card.Title>{movi.title}</Card.Title>
            <p> {movi.description} </p>
            <Button onClick={() => Navigate("/Home")}> go Home</Button>
          </div>
        ))}
    </div>
  );
}

export default Details;
