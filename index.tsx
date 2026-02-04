import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles.css';

// Send logs to parent frame (like a preview system)
function postToParent(level: string, ...args: any[]): void {
  if (window.parent !== window) {
    window.parent.postMessage(
      {
        type: 'iframe-console',
        level,
        args,
      },
      '*'
    );
  }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);