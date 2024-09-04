import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ImageInfoCard({ imageUrl, title, description, webURL }) {
  const cardStyle = {
    width: '50%',
    border: '1px solid #FFFFFF',
    margin: '1%',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} style={{ width: '100%', backgroundColor: "white"}} />
      <Card.Body style={{padding: '5%'}}>
        <Card.Title><b>{title}</b></Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{webURL}</Card.Text>
      </Card.Body>
    </Card>
  );
}
