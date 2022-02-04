const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        image_url: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          image_name: {
            type: DataTypes.TEXT,
            allowNull: false
          },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;