const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Like, Dislike, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET /profile
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        order: [['created_at', 'ASC']],
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'image_url',
            'description',
            'image_name',
            'like_count',
            'dislike_count',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            User.findOne({
                where: {
                    id: req.session.user_id
                },
                attributes: ['id', 'username']
            }).then(dbUserData => {
                res.render('profile', {
                    posts,
                    username: dbUserData.username,
                    id: dbUserData.id,
                    loggedIn: req.session.loggedIn
                });
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /profile/edit/1
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'image_url',
            'description',
            'image_name',
            'like_count',
            'dislike_count',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });
                res.render('edit-post', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;