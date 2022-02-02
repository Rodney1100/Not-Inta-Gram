const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Like, Dislike, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'image_url',
            'description',
            'image_name',
            'created_at',
            // [sequelize.literal('(SELECT COUNT(*) FROM like WHERE post.id = like.post_id)'), 'like_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Like,
                attributes: ['id', 'count']
            },
            {
                model: Dislike,
                attributes: ['id', 'count']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            // pass a single post object into the homepage template
            res.render('profile', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

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
            'created_at',
            // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Like,
                attributes: ['id', 'count']
            },
            {
                model: Dislike,
                attributes: ['id', 'count']
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