import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const tutorials = [
    { title: 'Introduction', link: '/tutorials/intro' },
    { title: 'Syntax', link: '/tutorials/syntax' },
    { title: 'Comments', link: '/tutorials/comments' },
    // Add other tutorials...
];

const Tutorials = () => {
    return (
        <Container>
            <Row>
                {tutorials.map((tutorial, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{tutorial.title}</Card.Title>
                                <Card.Link href={tutorial.link}>Learn More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Tutorials;
