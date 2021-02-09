import RoleModelGenerated from "./generated/RoleModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await RoleModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RoleModelGenerated,
  ...customModel
};
