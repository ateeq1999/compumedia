import actionsFunction from "./generated/CourseActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import CourseApi from "../../api/CourseApi";
 
 actionsFunction.loadCourseList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return CourseApi
     .getCourseList()
     .then(list => {
       dispatch(actionsFunction.loadCourseSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
