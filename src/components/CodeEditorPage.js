import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/clike/clike';

const CodeEditorPage = () => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');

    const runCode = async () => {
        console.log("Running code:", code); // Debug log
        try {
            const response = await fetch('http://127.0.0.1:5000/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code }),
            });
            const data = await response.json();
            console.log("Response:", data); // Debug log
            if (data.error) {
                setError(data.error);
                setOutput('');
            } else {
                setOutput(data.output);
                setError('');
            }
        } catch (err) {
            setError('Error running the code.');
            setOutput('');
        }
    };

    return (
        <Container>
            <h2>Code Editor</h2>
            <CodeMirror
                value={code}
                options={{
                    mode: 'text/x-c++src',
                    lineNumbers: true,
                    theme: 'default',
                }}
                onBeforeChange={(editor, data, value) => setCode(value)}
            />
            <Button className="mt-3" onClick={runCode}>Run Code</Button>
            {output && <Alert variant="success" className="mt-3">{output}</Alert>}
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Container>
    );
};

export default CodeEditorPage;
