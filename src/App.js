import React from 'react';
import './App.scss';

import { TeamProvider } from './context/team.context';

import Team from './components/Team.component';
import AddTeamMember from './components/AddTeamMember.component';

function App() {
  return (
    <>
      <div className="app">
        <h2>App</h2>
        <hr/>
        <TeamProvider>
          <Team />
          <AddTeamMember />
        </TeamProvider>
      </div>
    </>
  );
}

export default App;
