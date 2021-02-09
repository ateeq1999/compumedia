import { combineReducers } from "redux";

// START IMPORT REDUCERS
import CourseEditReducer from "./CourseEditReducer";
import CourseListReducer from "./CourseListReducer";
import HomeReducer from "./HomeReducer";
import RoleEditReducer from "./RoleEditReducer";
import RoleListReducer from "./RoleListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	CourseEditReducer,
	CourseListReducer,
	HomeReducer,
	RoleEditReducer,
	RoleListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
