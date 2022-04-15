import React from "react";
import { Card } from "react-bootstrap";

function MoviCard({ el }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text></Card.Text>
          <Card.Link href="#">{`/movis/${el.id}`}</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MoviCard;
