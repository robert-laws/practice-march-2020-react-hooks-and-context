import React, { useState, useContext } from 'react';
import { TeamContext } from '../context/team.context';

import { v4 as uuidv4 } from 'uuid';

const AddTeamMember = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const { addTeamMember } = useContext(TeamContext);
  
  const onSubmit = event => {
    event.preventDefault();

    const newTeamMember = {
      id: uuidv4(),
      name,
      age,
      fullTime: false
    }

    addTeamMember(newTeamMember);

    setName('');
    setAge(0);
  }

  return (
    <>
      <h4>Add Team Member</h4>
      <form onSubmit={onSubmit}>
        <input type='text' name='name' id='name' value={name} onChange={e => setName(e.target.value)} /><br/>
        <input type='text' name='age' id='age' value={age} onChange={e => setAge(e.target.value)} /><br/>
        <button type='submit'>Add Team Member</button>
      </form>
    </>
  )
}

export default AddTeamMember;