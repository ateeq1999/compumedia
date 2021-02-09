// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_compumedia_db";
import UserModel from "../models/Compumedia_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.compumedia_db.host +
        ":" +
        properties.compumedia_db.port +
        "//" +
        properties.compumedia_db.user +
        "@" +
        properties.compumedia_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.compumedia_db.name,
      properties.compumedia_db.user,
      properties.compumedia_db.password,
      {
        host: properties.compumedia_db.host,
        dialect: properties.compumedia_db.dialect,
        port: properties.compumedia_db.port,
        logging: false
      }
    );
    this.dbConnection_compumedia_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_compumedia_db;
  }
}

export default new Database();
