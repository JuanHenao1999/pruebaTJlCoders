import db from "../database/db.js";
import { DataTypes } from "sequelize";

const LoginModel = db.define('login', {
    email: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},
})

export default LoginModel;
