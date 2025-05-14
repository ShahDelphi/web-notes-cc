// models/index.js
import db from "../config/Database.js";
import Users from "./UsersModel.js";
import Notes from "./NotesModel.js";

// Relasi antar tabel
Users.hasMany(Notes, { foreignKey: "id", onDelete: "CASCADE" });
Notes.belongsTo(Users, { foreignKey: "id" });

export { db, Users, Notes };
