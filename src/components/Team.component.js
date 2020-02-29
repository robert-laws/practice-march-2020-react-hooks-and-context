import React, { useContext } from 'react';

import { TeamContext } from '../context/team.context';

const Team = () => {
  const { team, deleteTeamMember } = useContext(TeamContext);

  return (
    <>
      <h3>Team</h3>
      <ul>
        {team.map(member => (
          <div key={member.id}>
            <li>
              {member.name}
            </li>
            <button onClick={() => deleteTeamMember(member.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Team;