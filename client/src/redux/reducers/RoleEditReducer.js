// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  role: {}
};

// Reducer
export default function RoleEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ROLE_SUCCESS:
      return { ...state, role: action.payload };
    case types.UPDATE_ROLE_SUCCESS:
      return { ...state, role: action.payload };
    case types.GET_ROLE_SUCCESS:
      return { ...state, role: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}