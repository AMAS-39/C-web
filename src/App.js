import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import TutorialPage from './components/TutorialPage';
import QuizPage from './components/QuizPage';
import CodeEditorPage from './components/CodeEditorPage';
import AIAssistantPage from './components/AIAssistantPage'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tutorials" component={TutorialPage} />
        <Route path="/quizzes" component={QuizPage} />
        <Route path="/code-editor" component={CodeEditorPage} />
        <Route path="/ai-assistant" component={AIAssistantPage} />
      </Switch>
    </Router>
  );
}

export default App;
