import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModels.js";

const {DataTypes} = Sequelize;
const Products = db.define('product', {
    uuid : {
        type : DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    name : {
        type : DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    price : {
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    userId : {
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    gambar : {
        type : DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    description : {
        type : DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    url: DataTypes.STRING,
},{
    freezeTableName: true
});

// (async()=>{
//     await db.sync();
// })();

Users.hasMany(Products);
Products.belongsTo(Users, {foroignKey: 'userId'});


export default Products;