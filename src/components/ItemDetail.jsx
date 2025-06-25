
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
        <Container className="my-4 item-detail-container">
            <Row>
                <Col md={6}>
                    <Image src={item?.thumbnail} className="item-image"  />
                </Col>
                <Col md={6}>
                    <Card className="item-info-card">
                        <Card.Body>
                            <Card.Title className="item-title">{item?.title}</Card.Title>
                            <Card.Text className="item-description">{item?.description}</Card.Text>
                            <h4 className="item-price">${item?.price}</h4>
                            <ItemCount />
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
        
    );
}

export default ItemDetail;