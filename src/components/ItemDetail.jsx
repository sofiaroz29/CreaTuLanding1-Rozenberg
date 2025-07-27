
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import "../ItemStyles.css"
import ItemCount from "./ItemCount";

function ItemDetail ({item}){

    return (
        <Container
      className="my-5"
      style={{
        fontFamily: "'Helvetica Neue', sans-serif",
        minHeight: "80vh",
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.05)"
      }}
    >
      <Row>
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image
            src={item?.thumbnail}
            fluid
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
            }}
          />
        </Col>

        <Col md={6}>
          <Card style={{ border: "none", backgroundColor: "transparent" }}>
            <Card.Body>
              <Card.Title
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#1a1a1a"
                }}
              >
                {item?.title}
              </Card.Title>

              <Card.Text
                style={{
                  fontSize: "1rem",
                  color: "#666",
                  marginBottom: "20px",
                  lineHeight: "1.6"
                }}
              >
                {item?.description}
              </Card.Text>

              <h4 style={{ fontWeight: "500", fontSize: "1.5rem", marginBottom: "25px", color: "#000" }}>
                ${item?.price}
              </h4>

              <ItemCount item={item} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
        
    );
}

export default ItemDetail;