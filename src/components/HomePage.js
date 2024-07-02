import React from 'react';
import { Container, Card } from 'react-bootstrap';

const HomePage = () => {
    return (
        <Container className="mt-3">
            <Card>
                <Card.Body>
                    <Card.Title>Welcome to the C++ Learning Platform</Card.Title>
                    <Card.Text>
                        This is the best place to learn and practice C++ programming. Explore tutorials, take quizzes, write and run code, and get assistance from our AI assistant.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default HomePage;
