import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const quizzes = [
    { title: 'Syntax Quiz', link: '/quizzes/syntax' },
    { title: 'Variables Quiz', link: '/quizzes/variables' },
    // Add other quizzes...
];

const Quizzes = () => {
    return (
        <Container>
            <Row>
                {quizzes.map((quiz, index) => (
                    <Col key={index} sm={12} md={6} lg={4} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{quiz.title}</Card.Title>
                                <Card.Link href={quiz.link}>Take Quiz</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Quizzes;
