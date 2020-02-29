import React, { useContext } from 'react';

import { TeamContext } from '../context/team.context';

const Team = () => {
  const team = useContext(TeamContext);

  return (
    <>
      <h3>Team</h3>
      <ul>
        {team.map(member => (
          <li key={member.id}>
            {member.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Team;