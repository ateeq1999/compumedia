// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  course: {}
};

// Reducer
export default function CourseEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_COURSE_SUCCESS:
      return { ...state, course: action.payload };
    case types.UPDATE_COURSE_SUCCESS:
      return { ...state, course: action.payload };
    case types.GET_COURSE_SUCCESS:
      return { ...state, course: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}