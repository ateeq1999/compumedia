import RoleControllerGenerated from "./generated/RoleControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import RoleModel from "../../models/Compumedia_db/RoleModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/role`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     RoleControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await RoleModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...RoleControllerGenerated,
  ...customControllers
};

