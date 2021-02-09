// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function RoleListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ROLE_SUCCESS:
      return { ...state, role: action.payload };
    case types.LIST_ROLE_SUCCESS:
      return { ...state, listRole: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}