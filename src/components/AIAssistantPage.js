import React, { useState } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const AIAssistant = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleAsk = async () => {
        try {
            const res = await axios.post('http://127.0.0.1:5000/ask', { query });
            setResponse(res.data.response);
        } catch (err) {
            setResponse('Error getting response from AI assistant.');
        }
    };

    return (
        <Container>
            <h2>AI Assistant</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Ask the AI Assistant</Form.Label>
                    <Form.Control
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Form.Group>
                <Button className="mt-3" onClick={handleAsk}>Ask</Button>
            </Form>
            {response && <Alert variant="info" className="mt-3">{response}</Alert>}
        </Container>
    );
};

export default AIAssistant;
