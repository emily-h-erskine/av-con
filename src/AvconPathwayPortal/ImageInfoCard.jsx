import React from "react";

/* Card component is replaced by a custom Card component */

// import Card from 'react-bootstrap/Card';

// export default function ImageInfoCard({ imageUrl, title, description, webURL }) {
//   const cardStyle = {
//     width: '50%',
//     border: '1px solid #FFFFFF',
//     margin: '1%',
//   };

//   return (
//     <Card style={cardStyle}>
//       <Card.Img variant="top" src={imageUrl} style={{ width: '100%', backgroundColor: "white"}} />
//       <Card.Body style={{padding: '5%'}}>
//         <Card.Title><b>{title}</b></Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <Card.Text>{webURL}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

export default function ImageInfoCard({
    imageUrl,
    title,
    description,
    webURL,
}) {
    const cardStyle = {
        width: "50%",
        border: "1px solid #FFFFFF",
        borderRadius: "8px",
        margin: "1%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        backgroundColor: "#fff",
    };

    const imageStyle = {
        width: "100%",
        height: "auto",
    };

    const bodyStyle = {
        padding: "5%",
    };

    const titleStyle = {
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        color: "#07101d",
    };

    const textStyle = {
        fontSize: "1rem",
        marginBottom: "1rem",
        color: "#07101d",
    };

    return (
        <div style={cardStyle}>
            <img src={imageUrl} alt={title} style={imageStyle} />
            <div style={bodyStyle}>
                <h2 style={titleStyle}>{title}</h2>
                <p style={textStyle}>{description}</p>
                <p style={textStyle}>{webURL}</p>
            </div>
        </div>
    );
}
