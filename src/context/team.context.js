import React, { createContext, useReducer } from 'react';
import teamReducer from './team.reducer';

import { team } from '../data/team';

const initialState = {
  team
}

export const TeamContext = createContext(initialState);

export const TeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(teamReducer, initialState);

  // Actions
  const deleteTeamMember = (id) => {
    dispatch({
      type: 'DELETE_TEAM_MEMBER',
      payload: id
    })
  }

  const addTeamMember = (teamMember) => {
    dispatch({
      type: 'ADD_TEAM_MEMBER',
      payload: teamMember
    })
  }

  return (
    <TeamContext.Provider value={{
      team: state.team,
      deleteTeamMember,
      addTeamMember
    }}>
      {children}
    </TeamContext.Provider>
  ) 
}