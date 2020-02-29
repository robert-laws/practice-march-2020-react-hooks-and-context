import React from 'react';
import './App.scss';

import { TeamProvider } from './context/team.context';

import Team from './components/Team.component';

function App() {
  return (
    <>
      <div className="app">
        <h2>App</h2>
        <hr/>
        <TeamProvider>
          <Team />
        </TeamProvider>
      </div>
    </>
  );
}

export default App;
