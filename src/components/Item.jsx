import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'

function Item ({item}){
    const navigate = useNavigate()
    return (
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
            <Card
                style={{
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.06)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer"
                }}
                onClick={() => navigate(`/item/${item.id}`)}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
                <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    style={{
                        height: "320px",
                        objectFit: "cover",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px"
                    }}
                />
                <Card.Body style={{ padding: "18px" }}>
                    <Card.Title
                        style={{
                            fontSize: "1rem",
                            fontWeight: "500",
                            color: "#1a1a1a",
                            marginBottom: "8px"
                        }}
                    >
                        {item.title}
                    </Card.Title>
                    <Card.Text style={{ color: "#555", fontSize: "0.95rem", marginBottom: "16px" }}>
                        ${item.price}
                    </Card.Text>
                    <Button
                        variant="dark"
                        style={{
                            width: "100%",
                            fontSize: "0.9rem",
                            padding: "10px",
                            borderRadius: "6px"
                        }}
                    >
                        Ver más
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item