import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError('Please enter some text.');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('http://127.0.0.1:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to connect to backend.');
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Emotion Reflection Tool</h1>

      <textarea
        placeholder="Write your thoughts here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        style={{ width: '80%', padding: '10px', fontSize: '16px' }}
      />

      <br /><br />
      <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Submit
      </button>

      {loading && <p>Analyzing emotion...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
          <h3>Emotion: {result.emotion}</h3>
          <p>Confidence: {Math.round(result.confidence * 100)}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
