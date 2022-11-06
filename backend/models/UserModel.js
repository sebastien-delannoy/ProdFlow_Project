import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Site = db.define(
  "sites",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    town: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    country: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Site;

(async () => {
  await db.sync();
})();
