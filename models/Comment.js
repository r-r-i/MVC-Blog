// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const Blog = require('./Blog');

// class Comment extends Model { }

// Comment.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         comment: {
//             type: DataTypes.ARRAY,
//             allowNull: false,
//         },
//         blog_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: Blog,
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize: sequelize,
//         timestamps: true,
//         freezeTableName: true,
//         modelName: 'comment'
//     }
// );

// module.exports = Comment;