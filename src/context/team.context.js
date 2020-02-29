import React, { createContext, useReduder } from 'react';


import { team } from '../data/team';

export const TeamContext = createContext(team);

export const TeamProvider = ({ children }) => {


  return (
    <TeamContext.Provider value={team}>
      {children}
    </TeamContext.Provider>
  ) 
}