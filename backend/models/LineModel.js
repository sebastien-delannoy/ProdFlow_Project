import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Line= db.define(
  "lines",
  {
    site_id: DataTypes.STRING,
    details: DataTypes.STRING,
    line_number: DataTypes.STRING,
    production_rate: DataTypes.STRING,
    status: DataTypes.STRING,
    incident_rate: DataTypes.STRING,
    
  },
  {
    freezeTableName: true,
  }
);

export default Line;

(async () => {
  await db.sync();
})();
