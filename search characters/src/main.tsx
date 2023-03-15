import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

import { CharactersProvider } from './context/CharactersProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </React.StrictMode>
);
