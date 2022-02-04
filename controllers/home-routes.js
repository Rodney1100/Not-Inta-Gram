
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Like, Dislike, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET /
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'image_url',
            'description',
            'image_name',
            'created_at'
        ],
        include: [
            // {
            //     model: Comment,
            //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            //     include: {
            //         model: User,
            //         attributes: ['username']
            //     }
            // },
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
            res.render('feed', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// GET /post/1
router.get('/post/:id', withAuth, (req, res) => {
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
        ],
        include: [
            // {
            //     model: Comment,
            //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            //     include: {
            //         model: User,
            //         attributes: ['username']
            //     }
            // },
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
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            // serialize the data
            const post = dbPostData.get({ plain: true });

            // pass data to template
            res.render('single-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//renders login handlebar
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//renders signup handlebar
router.get('/signup', (req,res) =>{
    res.render('signup');
})

//renders new-post handlebar
router.get('/new', (req, res) => {
    res.render('new-post', {
        loggedIn: req.session.loggedIn
    });
});


module.exports = router;