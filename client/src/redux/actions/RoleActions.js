import actionsFunction from "./generated/RoleActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import RoleApi from "../../api/RoleApi";
 
 actionsFunction.loadRoleList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return RoleApi
     .getRoleList()
     .then(list => {
       dispatch(actionsFunction.loadRoleSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
