import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router';

function OrderSuccess({ order }) {
    const navigate = useNavigate()
    return (
        <Container
            className="my-5"
            style={{
                maxWidth: '600px',
                fontFamily: "'Helvetica Neue', sans-serif",
            }}
        >
            <Card
                className="text-center"
                style={{
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                }}
            >
                <Card.Header
                style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.3rem',
                    padding: '20px',
                }}
                >
                ¡Compra realizada con éxito!
                </Card.Header>

                <Card.Body style={{ padding: '30px' }}>
                    <Card.Title
                        style={{
                        fontWeight: '700',
                        fontSize: '1.4rem',
                        marginBottom: '20px',
                        color: '#222',
                        }}
                    >
                        ID de la orden: <strong>{order.id}</strong>
                    </Card.Title>

                    <Card.Text
                        style={{
                            textAlign: 'left',
                            fontSize: '1rem',
                            color: '#444',
                            lineHeight: '1.5',
                        }}
                        >
                        <h5 style={{ fontWeight: '700', marginBottom: '12px' }}>
                            Datos del usuario:
                        </h5>
                        <p><strong>Nombre:</strong> {order.user.name}</p>
                        <p><strong>Email:</strong> {order.user.email}</p>
                        <p><strong>Teléfono:</strong> {order.user.phone}</p>

                        <h5 style={{ fontWeight: '700', margin: '20px 0 12px 0' }}>
                            Productos:
                        </h5>
                        <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
                            {order.products.map((prod, i) => (
                            <li key={i} style={{ marginBottom: '6px' }}>
                                {prod.title} x {prod.cantidad || prod.quantity || 1}
                            </li>
                            ))}
                        </ul>
                    </Card.Text>


                    <Button
                        variant="dark"
                        onClick={() => navigate('/')}
                        style={{
                        padding: '12px 25px',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        borderRadius: '8px',
                        width: '100%',
                        transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#333')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#212529')}
                    >
                        Volver a la tienda
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}


export default OrderSuccess