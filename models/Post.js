const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {
    static upvote(body, models) {
        return models.Like.create({
            user_id: body.user_id,
            post_id: body.post_id
        }).then(() => {
            return Post.findOne({
                where: {
                    id: body.post_id
                },
                attributes: [
                    'id',
                    'post_url',
                    'title',
                    'created_at',
                    [
                        sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'),
                        'like_count'
                    ]
                ]
            });
        });
    }
}

// create fields/columns for Post model
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
            allowNull: true
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