import RoleApiGenerated from "./generated/RoleApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class RoleApi extends RoleApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Role List
  static getRoleList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/roles")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default RoleApi;