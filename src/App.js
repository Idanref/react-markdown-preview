import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('# This is an h1');
  return (
    <>
      <main>
        <section className='markdown'>
          <textarea className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
          <section className='result'>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
