export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TEAM_MEMBER':
      return {
        ...state,
        team: state.team.filter(member => member.id !== action.payload)
      }
    case 'ADD_TEAM_MEMBER':
      return {
        ...state,
        team: [action.payload, ...state.team]
      }
    default:
      return state;
  }
}