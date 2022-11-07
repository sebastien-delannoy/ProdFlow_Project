import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Incident = db.define(
  "incident",
  {
    site_id: DataTypes.STRING,
    line_id: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    owner: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Incident;

(async () => {
  await db.sync();
})();
